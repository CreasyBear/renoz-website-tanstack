"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Components
import { PremiumSection } from "@/components/premium/premium-section";
import { PremiumBackground } from "@/components/premium/premium-background";
import { H1, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { VisualConnector } from "@/components/narrative/visual-connector";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "@/components/ui/supabase-dropzone";

// Hooks & Utils
import { useSupabaseUpload } from "@/hooks/use-supabase-upload";
import { generateWarrantyId } from "@/lib/warranty/schema";

// Form Components
import { TextField, CheckboxField } from "@/components/ui/form-fields";
import { FormSection, FormSubmitButton } from "@/components/ui/progressive-form";

// Comprehensive warranty registration schema
const comprehensiveWarrantySchema = z.object({
  // On behalf of homeowner
  onBehalfOfHomeowner: z.boolean().default(false),

  // Contact Information (Installer)
  installerName: z.string().min(2, "Installer name is required"),
  installerEmail: z.string().email("Valid installer email required"),
  installerPhone: z.string().min(8, "Valid installer phone required"),

  // Company Information
  companyName: z.string().min(2, "Company name is required"),
  electricalLicence: z.string().min(4, "Electrical licence number is required"),

  // Installation Address
  installAddress: z.object({
    street: z.string().min(3, "Street address is required"),
    suburb: z.string().min(2, "Suburb is required"),
    state: z.literal("WA"),
    postcode: z.string().regex(/^\d{4}$/, "Valid WA postcode required"),
  }),

  // Homeowner Contact (if registering on behalf)
  homeownerContact: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    street: z.string().optional(),
    suburb: z.string().optional(),
    postcode: z.string().optional(),
  }).optional(),

  // System Information
  systemDetails: z.object({
    model: z.string().min(2, "System model is required"),
    phases: z.enum(["Single", "Three"]),
    gridStatus: z.enum(["on-grid", "off-grid"]).default("on-grid"),
    pvSystem: z.boolean().default(false),
    backupGenset: z.boolean().default(false),
    inverterBrand: z.string().optional(),
    inverterModel: z.string().optional(),
    inverterSerial: z.string().optional(),
  }),

  // Serial Numbers (multiple batteries)
  serialNumbers: z.array(z.string().min(3, "Valid serial number required")).min(1, "At least one serial number required"),

  // Dates
  installDate: z.date().refine((date) => date <= new Date(), "Installation date cannot be in the future"),
  commissioningDate: z.date().refine((date) => date <= new Date(), "Commissioning date cannot be in the future"),
  datesAreSame: z.boolean().default(false),

  // Place of Purchase (optional)
  purchaseInfo: z.object({
    retailer: z.string().optional(),
    purchaseDate: z.date().optional(),
    proofOfPurchase: z.any().optional(),
  }).optional(),

  // Installation Notes
  installationNotes: z.string().optional(),

  // Declarations
  installationDeclaration: z.literal(true, {
    errorMap: () => ({ message: "You must confirm proper installation according to manufacturer requirements" })
  }),
  marketingPermission: z.boolean().default(false),

  // Evidence Files
  evidenceFiles: z.array(z.any()).optional().default([]),
}).superRefine((data, ctx) => {
  // Homeowner contact validation when registering on behalf
  if (data.onBehalfOfHomeowner) {
    if (!data.homeownerContact?.firstName) {
      ctx.addIssue({
        path: ["homeownerContact", "firstName"],
        code: z.ZodIssueCode.custom,
        message: "First name is required when registering for homeowner",
      });
    }
    if (!data.homeownerContact?.lastName) {
      ctx.addIssue({
        path: ["homeownerContact", "lastName"],
        code: z.ZodIssueCode.custom,
        message: "Last name is required when registering for homeowner",
      });
    }
    if (!data.homeownerContact?.email) {
      ctx.addIssue({
        path: ["homeownerContact", "email"],
        code: z.ZodIssueCode.custom,
        message: "Email is required when registering for homeowner",
      });
    }
    if (!data.homeownerContact?.phone) {
      ctx.addIssue({
        path: ["homeownerContact", "phone"],
        code: z.ZodIssueCode.custom,
        message: "Phone is required when registering for homeowner",
      });
    }
    if (!data.homeownerContact?.street) {
      ctx.addIssue({
        path: ["homeownerContact", "street"],
        code: z.ZodIssueCode.custom,
        message: "Street address is required when registering for homeowner",
      });
    }
    if (!data.homeownerContact?.suburb) {
      ctx.addIssue({
        path: ["homeownerContact", "suburb"],
        code: z.ZodIssueCode.custom,
        message: "Suburb is required when registering for homeowner",
      });
    }
    if (!data.homeownerContact?.postcode) {
      ctx.addIssue({
        path: ["homeownerContact", "postcode"],
        code: z.ZodIssueCode.custom,
        message: "Postcode is required when registering for homeowner",
      });
    }
  }
});

type ComprehensiveWarrantyForm = z.infer<typeof comprehensiveWarrantySchema>;

export function WarrantyClient() {
  const [warrantyId] = useState<string>(() => generateWarrantyId());
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [csrf, setCsrf] = useState<string | null>(null);

  // Initialize Supabase upload hook
  const uploadProps = useSupabaseUpload({
    bucketName: 'warranty-uploads',
    path: 'warranty-files',
    warrantyId: warrantyId, // This will create folders like warranty-files/WR-20250822-abc123/
    allowedMimeTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    maxFiles: 5,
    maxFileSize: 10 * 1024 * 1024, // 10MB
  });

  // Initialize form with react-hook-form
  const form = useForm<ComprehensiveWarrantyForm>({
    resolver: zodResolver(comprehensiveWarrantySchema),
    defaultValues: {
      onBehalfOfHomeowner: false,
      installerName: "",
      installerEmail: "",
      installerPhone: "",
      companyName: "",
      electricalLicence: "",
      installAddress: {
        street: "",
        suburb: "",
        state: "WA",
        postcode: "",
      },
      homeownerContact: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        suburb: "",
        postcode: "",
      },
      systemDetails: {
        model: "",
        phases: "Single",
        gridStatus: "on-grid",
        pvSystem: false,
        backupGenset: false,
        inverterBrand: "",
        inverterModel: "",
        inverterSerial: "",
      },
      serialNumbers: [""],
      installDate: undefined,
      commissioningDate: undefined,
      datesAreSame: false,
      purchaseInfo: {
        retailer: "",
        purchaseDate: undefined,
        proofOfPurchase: undefined,
      },
      installationNotes: "",
      installationDeclaration: true,
      marketingPermission: false,
      evidenceFiles: [],
    },
  });

  // Get CSRF token
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/csrf", { method: "GET" });
        const data = await res.json();
        setCsrf(data?.csrfToken || null);
      } catch {}
    })();
  }, []);

    async function handleSubmit(data: ComprehensiveWarrantyForm) {
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      // Upload files first (if any are selected)
      if (uploadProps.files.length > 0) {
        await uploadProps.onUpload();

        // Check if upload failed
        if (uploadProps.errors.length > 0) {
          setError("File upload failed. Please try again.");
          setSubmitting(false);
          return;
        }
      }
      // Prepare payload for existing API
      const payload = {
        warrantyId,
        installer: {
          company: data.companyName,
          licence: data.electricalLicence,
          email: data.installerEmail,
          phone: data.installerPhone,
          technicianName: data.installerName,
        },
        customer: {
          name: data.onBehalfOfHomeowner && data.homeownerContact?.firstName
            ? `${data.homeownerContact.firstName} ${data.homeownerContact.lastName || ''}`.trim()
            : data.installerName,
          email: data.onBehalfOfHomeowner && data.homeownerContact?.email
            ? data.homeownerContact.email
            : data.installerEmail,
          phone: data.onBehalfOfHomeowner && data.homeownerContact?.phone
            ? data.homeownerContact.phone
            : data.installerPhone,
          address: data.onBehalfOfHomeowner && data.homeownerContact?.street
            ? {
                street: data.homeownerContact.street,
                suburb: data.homeownerContact.suburb,
                state: "WA",
                postcode: data.homeownerContact.postcode,
              }
            : data.installAddress,
        },
        system: {
          model: data.systemDetails.model,
          installDate: data.installDate?.toISOString().split('T')[0],
          commissioningDate: data.commissioningDate?.toISOString().split('T')[0],
          serials: data.serialNumbers,
          gridStatus: data.systemDetails.gridStatus,
          phases: data.systemDetails.phases,
          pvSystem: data.systemDetails.pvSystem,
          backupGenset: data.systemDetails.backupGenset,
          capacity: `${(data.serialNumbers.filter(s => s.trim()).length * 5.12).toFixed(2)} kWh nominal / ${(data.serialNumbers.filter(s => s.trim()).length * 5.12 * 0.9).toFixed(2)} kWh usable`,
          inverter: {
            brand: data.systemDetails.inverterBrand || "Not specified",
            model: data.systemDetails.inverterModel || "Not specified",
            serial: (data.systemDetails.inverterSerial && data.systemDetails.inverterSerial.trim()) ? data.systemDetails.inverterSerial.trim() : "Not specified",
          },
          retailer: data.purchaseInfo?.retailer || undefined,
          purchaseDate: data.purchaseInfo?.purchaseDate ? data.purchaseInfo.purchaseDate.toISOString().split('T')[0] : undefined,
        },
        compliance: {},
        notes: `Installation Notes: ${data.onBehalfOfHomeowner ? 'Registration on behalf of homeowner. ' : ''}System Details: ${data.systemDetails.model} - Nominal: ${(data.serialNumbers.filter(s => s.trim()).length * 5.12).toFixed(2)} kWh, Usable: ${(data.serialNumbers.filter(s => s.trim()).length * 5.12 * 0.9).toFixed(2)} kWh - ${data.systemDetails.phases} phase${data.systemDetails.pvSystem ? ' with PV system' : ''}${data.systemDetails.backupGenset ? ' with backup generator' : ''}. Purchase: ${data.purchaseInfo?.retailer || 'Not specified'}${data.purchaseInfo?.purchaseDate ? ` on ${data.purchaseInfo.purchaseDate.toLocaleDateString()}` : ''}`,
        installationNotes: data.installationNotes,
        declarations: {
          standards: true,
          privacy: true,
          terms: true,
          accuracy: true,
          installationDeclaration: data.installationDeclaration,
          marketingPermission: data.marketingPermission,
        },
        thumbnails: uploadProps.files
          .filter(file => uploadProps.successes.includes(file.name))
          .map((file) => {
            // Get the actual Supabase URL from the uploaded file
            const supabaseUrl = file.uploadedUrl || file.preview;
            return {
              name: file.name,
              type: file.type,
              size: file.size,
              dataUrl: supabaseUrl || `data:${file.type};base64,uploaded`,
              tag: undefined,
            };
          }),
        documents: [],
        originals: [],
      };

      const res = await fetch("/api/warranty/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(csrf ? { "X-CSRF-Token": csrf } : {})
        },
        body: JSON.stringify(payload),
      });

      const responseData = await res.json();

      if (!res.ok) throw new Error(responseData?.message || "Submit failed");

      setSuccess(`✅ Warranty registered successfully! Reference: ${warrantyId}`);
      form.reset();
      uploadProps.setFiles([]);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Registration failed";
      setError(`❌ ${errorMessage}. Please check your information and try again.`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative z-1 flex flex-col">
      <PremiumBackground
        backgroundImageSrc="/images/contact/contact-bg.webp"
        backgroundImageAlt="RENOZ warranty background"
        useDefaultOverlay
        zIndex="z-[-1]"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90vw]">
        <VisualConnector type="horizontal-dashed" color="primary" />
      </div>

      <PremiumSection
        id="warranty"
        variant="glass-about"
        shadow="xl"
        spacing="lg"
        maxWidth="4xl"
        textAlign="left"
        titleMaxWidth="full"
        descriptionMaxWidth="full"
        className="flex flex-col justify-center relative z-10 w-full lg:w-full mx-auto px-4 sm:px-6"
      >
        <div className="space-y-6 max-w-4xl mx-auto w-full px-4 sm:px-6">
          <header className="mb-6">
            <H1 className="mb-2 text-2xl md:text-3xl">Register Your Warranty</H1>
            <Text variant="muted" className="text-sm md:text-base">
              Get your RENOZ battery system warranty registered. Upload photos of your installation for faster approval.
            </Text>
            <div className="mt-2 text-xs text-muted-foreground">
              Your reference number: <span className="font-mono">{warrantyId}</span>
            </div>
          </header>

          {/* Benefits & Requirements */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <Text className="text-lg font-medium mb-3 text-blue-900">Why Register Your Warranty?</Text>
            <div className="space-y-2 text-sm text-blue-800">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span><strong>Confirmation of ownership</strong> - Get official documentation for your records</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span><strong>Faster warranty service</strong> - Streamlined support when you need assistance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span><strong>Email confirmation</strong> - This email serves as confirmation of your warranty submission</span>
              </div>
            </div>

            <Separator className="my-4" />

            <Text className="text-sm font-medium mb-2 text-blue-900">Before You Start:</Text>
            <div className="space-y-1 text-sm text-blue-800">
              <div>• Have your battery serial numbers ready</div>
              <div>• Keep proof of purchase for warranty claims</div>
              <div>• Take photos of your installation (optional but recommended)</div>
              <div>• Allow 2-3 business days for processing</div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">

              {/* On Behalf of Homeowner */}
              <CheckboxField
                name="onBehalfOfHomeowner"
                label="I am registering this warranty for a homeowner"
                description="Check this if you're an installer. Leave unchecked if you're the homeowner."
              />

              {/* Installer Contact Information */}
              <FormSection title="Contact Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    name="installerName"
                    label="Your Full Name"
                    placeholder="Enter your full name"
                    required

                  />
                  <TextField
                    name="installerEmail"
                    label="Email Address"
                    placeholder="your.email@example.com"
                    required
                    type="email"


                  />
                </div>
                <TextField
                  name="installerPhone"
                  label="Phone Number"
                  placeholder="04xx xxx xxx"
                  required
                  type="tel"


                />
              </FormSection>

              {/* Company Information (Optional) */}
              <FormSection title="Company Details">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    name="companyName"
                    label="Company Name"
                    placeholder="Enter company name"
                  />
                  <TextField
                    name="electricalLicence"
                    label="Electrical Licence Number"
                    placeholder="EC12345"
                  />
                </div>
                <Text variant="muted" className="text-sm">
                  Only fill this in if you&apos;re registering on behalf of a company
                </Text>
              </FormSection>

              <Separator />

              {/* Installation Address */}
              <FormSection title="Installation Location">
                <TextField
                  name="installAddress.street"
                  label="Street Address"
                  placeholder="123 Main Street"
                  required

                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    name="installAddress.suburb"
                    label="Suburb"
                    placeholder="Perth"
                    required

                  />
                  <TextField
                    name="installAddress.postcode"
                    label="Postcode"
                    placeholder="6000"
                    required
                    type="number"

                  />
                </div>
              </FormSection>

              {/* Homeowner Contact (Conditional) */}
              {form.watch("onBehalfOfHomeowner") && (
                <FormSection title="Homeowner Contact Details">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField
                      name="homeownerContact.firstName"
                      label="Homeowner's First Name"
                      placeholder="Enter first name"
                      required
                    />
                    <TextField
                      name="homeownerContact.lastName"
                      label="Homeowner's Last Name"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField
                      name="homeownerContact.email"
                      label="Homeowner's Email Address"
                      placeholder="homeowner@email.com"
                      type="email"


                      required
                    />
                    <TextField
                      name="homeownerContact.phone"
                      label="Homeowner's Phone Number"
                      placeholder="04xx xxx xxx"
                      type="tel"


                      required
                    />
                  </div>

                  <Text variant="muted" className="text-sm mt-3 mb-2 text-gray-600">
                    Homeowner&apos;s address (if different from installation address):
                  </Text>
                  <TextField
                    name="homeownerContact.street"
                    label="Street Address"
                    placeholder="123 Main Street"
                    required

                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField
                      name="homeownerContact.suburb"
                      label="Suburb"
                      placeholder="Perth"
                      required

                    />
                    <TextField
                      name="homeownerContact.postcode"
                      label="WA Postcode"
                      placeholder="6000"
                      required
                      type="number"


                    />
                  </div>
                </FormSection>
              )}

              <Separator />

              {/* Serial Numbers */}
              <FormSection title="Battery Information">
                <div className="space-y-3">
                  {form.watch("serialNumbers").map((_, index) => (
                    <div key={index} className="flex gap-3 items-end">
                      <TextField
                        name={`serialNumbers.${index}`}
                        label={`Battery ${index + 1} Serial Number`}
                        placeholder="e.g., LV51-2515000001"
                        required
                        className="flex-1"
                      />
                      {form.watch("serialNumbers").length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="h-9"
                          onClick={() => {
                            const serials = form.getValues("serialNumbers");
                            form.setValue("serialNumbers", serials.filter((_, i) => i !== index));
                          }}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                  <div className="flex gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const serials = form.getValues("serialNumbers");
                        form.setValue("serialNumbers", [...serials, ""]);
                      }}
                    >
                      + Add Battery
                    </Button>
                  </div>
                  <Text variant="muted" className="text-sm">
                    Enter the serial number from each battery. You can find this on the battery label or in the user manual.
                  </Text>
                </div>
              </FormSection>

              <Separator />

              {/* System Details */}
              <FormSection title="System Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    name="systemDetails.model"
                    label="Battery Model"
                    placeholder="LV-5KWH100AH"
                    required
                  />
                  <FormField
                    control={form.control}
                    name="systemDetails.phases"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Power Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select power type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Single">Single Phase</SelectItem>
                            <SelectItem value="Three">Three Phase</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="systemDetails.gridStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grid Connection *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select grid connection" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="on-grid">On-grid</SelectItem>
                            <SelectItem value="off-grid">Off-grid</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TextField
                    name="systemDetails.inverterBrand"
                    label="Inverter Brand"
                    placeholder="e.g., Deye, GoodWe, Selectronic "
                  />
                  <TextField
                    name="systemDetails.inverterModel"
                    label="Inverter Model"
                    placeholder="e.g., SUN-8K-SG05LP1-AU, etc."
                  />
                  <TextField
                    name="systemDetails.inverterSerial"
                    label="Inverter Serial"
                    placeholder="Serial number"
                  />
                </div>
                <div className="space-y-3">
                  <CheckboxField
                    name="systemDetails.pvSystem"
                    label="Solar panels connected"
                  />
                  <CheckboxField
                    name="systemDetails.backupGenset"
                    label="Backup generator connected"
                  />
                </div>

                {/* System Configuration Summary */}
                {(() => {
                  const model = form.watch("systemDetails.model");
                  const inverterBrand = form.watch("systemDetails.inverterBrand");
                  const inverterModel = form.watch("systemDetails.inverterModel");
                  const phases = form.watch("systemDetails.phases");
                  const numBatteries = form.watch("serialNumbers").filter(s => s.trim()).length;

                  // Calculate capacities based on battery count
                  const nominalCapacity = numBatteries * 5.12;
                  const usableCapacity = nominalCapacity * 0.9;
                  const nominalCapacityDisplay = `${nominalCapacity.toFixed(2)} kWh`;
                  const usableCapacityDisplay = `${usableCapacity.toFixed(2)} kWh`;

                  if (model || numBatteries > 0 || inverterBrand || inverterModel || phases) {
                    return (
                      <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          System Configuration Summary
                        </h4>
                        <div className="space-y-3 text-sm">
                          {model && (
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600 font-medium">Battery Model</span>
                              <span className="text-gray-900 font-semibold">{model}</span>
                            </div>
                          )}
                          {numBatteries > 0 && (
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600 font-medium">Battery Count</span>
                              <span className="text-green-600 font-semibold">{numBatteries} {numBatteries === 1 ? 'battery' : 'batteries'}</span>
                            </div>
                          )}
                          {numBatteries > 0 && (
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600 font-medium">Nominal Capacity</span>
                              <span className="text-gray-900 font-semibold">{nominalCapacityDisplay}</span>
                            </div>
                          )}
                          {numBatteries > 0 && (
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600 font-medium">Usable Capacity</span>
                              <span className="text-gray-900 font-semibold">{usableCapacityDisplay}</span>
                            </div>
                          )}
                          {phases && (
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600 font-medium">Power Type</span>
                              <span className="text-gray-900 font-semibold">{phases} Phase</span>
                            </div>
                          )}
                          {inverterBrand && (
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-600 font-medium">Inverter Brand</span>
                              <span className="text-gray-900 font-semibold">{inverterBrand}</span>
                            </div>
                          )}
                          {inverterModel && (
                            <div className="flex items-center justify-between py-2">
                              <span className="text-gray-600 font-medium">Inverter Model</span>
                              <span className="text-gray-900 font-semibold">{inverterModel}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}
              </FormSection>

              <Separator />

              {/* Installation Notes */}
              <FormSection title="Installation Notes">
                <FormField
                  control={form.control}
                  name="installationNotes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Installation Notes (Optional)</FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          placeholder="Add any specific installation details, system configuration details, or important notes about this installation..."
                          rows={4}
                          className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FormSection>

              <Separator />

              {/* Installation & Commissioning Dates */}
              <FormSection title="Installation Dates">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="installDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Installation Date *</FormLabel>
                        <FormControl>
                          <DatePicker
                            date={field.value}
                            onSelect={field.onChange}
                            placeholder="When was it installed?"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="commissioningDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Commissioning Date *</FormLabel>
                        <FormControl>
                          <DatePicker
                            date={field.value}
                            onSelect={field.onChange}
                            placeholder="When was it commissioned?"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <CheckboxField
                  name="datesAreSame"
                  label="Installation and commissioning happened on the same day"
                />
              </FormSection>

              <Separator />

              {/* Place of Purchase (Optional) */}
              <FormSection title="Purchase Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    name="purchaseInfo.retailer"
                    label="Where did you buy it?"
                    placeholder="Store or supplier name"
                  />
                  <FormField
                    control={form.control}
                    name="purchaseInfo.purchaseDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>When did you buy it?</FormLabel>
                        <FormControl>
                          <DatePicker
                            date={field.value}
                            onSelect={field.onChange}
                            placeholder="Select purchase date"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Text variant="muted" className="text-sm">
                  If you have a receipt or invoice, you can upload it in the evidence section below.
                </Text>
              </FormSection>

              <Separator />

              {/* Declarations */}
              <FormSection title="Terms & Conditions">
                <CheckboxField
                  name="installationDeclaration"
                  label="I confirm the batteries have been installed according to RENOZ Energy's installation requirements and user manual"
                />
                <CheckboxField
                  name="marketingPermission"
                  label="I agree to receive marketing communications from RENOZ Energy about my battery system"
                />
              </FormSection>

              <Separator />

              {/* Evidence Upload */}
              <FormSection title="Upload Evidence">
                <Text variant="muted" className="text-sm mb-2">Suggested photos (optional):</Text>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Wide installation context</li>
                  <li>Battery serial labels (if available)</li>
                  <li>Inverter label (if available)</li>
                  <li>Configuration/commissioning screen</li>
                  <li>Single Line Diagram (SLD), if available</li>
                </ul>
                <Dropzone {...uploadProps}>
                  <DropzoneEmptyState />
                  <DropzoneContent />
                </Dropzone>
              </FormSection>

              {/* Submit Button */}
              <div className="pt-4">
                <FormSubmitButton
                  type="submit"
                  className="w-full h-12 text-base"
                  isSubmitting={submitting}
                  loadingText={uploadProps.files.length > 0 ? "Uploading files and registering..." : "Registering..."}
                  onClick={() => {
                    // Form submission handled by onSubmit
                  }}
                >
                  {uploadProps.files.length > 0 ? "Upload files & Register Warranty" : "Register Warranty"}
                </FormSubmitButton>
              </div>

              {/* Success/Error Messages */}
              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Text className="text-green-800">{success}</Text>
                </div>
              )}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <Text className="text-red-800">{error}</Text>
                </div>
              )}
            </form>
          </Form>

          {/* Footer Information */}
          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <Text className="text-sm font-medium mb-2 text-gray-900">What happens next?</Text>
            <div className="space-y-1 text-sm text-gray-700">
              <div>• You&apos;ll receive an email confirmation shortly</div>
              <div>• This email serves as confirmation of your warranty submission</div>
              <div>• Keep your reference number for your records</div>
              <div>• Contact us at <strong>support@renoz.com.au</strong> if you have questions</div>
              <div>
                • For warranty terms and your Australian Consumer Law rights, visit
                {' '}<a className="underline" href="https://renoz.energy/resources" target="_blank" rel="noopener noreferrer">renoz.energy/resources</a>.
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90vw]">
        <VisualConnector type="horizontal-dashed" color="primary" />
      </div>
    </div>
  );
}


