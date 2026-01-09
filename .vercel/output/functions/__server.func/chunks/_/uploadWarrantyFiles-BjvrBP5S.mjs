import { A as createServerRpc, B as createServerFn } from "./server.mjs";
import { c as createClient } from "./index-BHtk7koP.mjs";
import { o as objectType, s as stringType } from "./types-CBhy9KzI.mjs";
import "node:async_hooks";
import "node:stream";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream/web";
const uploadFileSchema = objectType({
  warrantyId: stringType(),
  file: objectType({
    name: stringType(),
    type: stringType(),
    data: stringType()
    // base64 encoded file data
  })
});
const uploadWarrantyFile_createServerFn_handler = createServerRpc("1bc93234ddbb124568de1b8b4782a5e1fc4f1d462f61652737d640217f0fc80a", (opts, signal) => uploadWarrantyFile.__executeServer(opts, signal));
const uploadWarrantyFile = createServerFn({
  method: "POST"
}).inputValidator(uploadFileSchema).handler(uploadWarrantyFile_createServerFn_handler, async ({
  data
}) => {
  const {
    warrantyId,
    file
  } = data;
  if (!warrantyId || !file || !file.data) {
    return {
      success: false,
      error: "Missing required fields"
    };
  }
  try {
    const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://tcrpfwxfsbkrwqielhfg.supabase.co";
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_y8Vro117yYqQIMCBHvffVA_rDCXg4Sz";
    if (!supabaseUrl || !supabaseAnonKey) ;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const base64Data = file.data.replace(/^data:.*,/, "");
    const buffer = Buffer.from(base64Data, "base64");
    const timestamp = Date.now();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filePath = `warranty-files/${warrantyId}/${timestamp}-${sanitizedName}`;
    const {
      error: uploadError
    } = await supabase.storage.from("warranty-uploads").upload(filePath, buffer, {
      contentType: file.type,
      upsert: false
    });
    if (uploadError) {
      console.error("Supabase upload error:", uploadError);
      if (uploadError.message?.includes("size")) {
        return {
          success: false,
          error: "File size exceeds limit"
        };
      } else if (uploadError.message?.includes("type")) {
        return {
          success: false,
          error: "File type not allowed"
        };
      } else if (uploadError.message?.includes("exists")) {
        return {
          success: false,
          error: "File already exists"
        };
      } else {
        return {
          success: false,
          error: "Upload failed due to server error"
        };
      }
    }
    const {
      data: urlData
    } = supabase.storage.from("warranty-uploads").getPublicUrl(filePath);
    return {
      success: true,
      url: urlData.publicUrl,
      path: filePath,
      name: file.name
    };
  } catch (error) {
    console.error("File upload error:", error);
    return {
      success: false,
      error: "Failed to upload file"
    };
  }
});
export {
  uploadWarrantyFile_createServerFn_handler
};
