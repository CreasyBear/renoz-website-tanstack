-- RENOZ Energy Website - Supabase Database Schema

-- Products CMS
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT CHECK (category IN ('residential', 'rural', 'commercial')) NOT NULL,
  description TEXT,
  specs JSONB,
  images TEXT[],
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Blog/Resources CMS
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Contact Form Submissions
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  inquiry_type TEXT CHECK (inquiry_type IN ('general', 'homeowner', 'installer', 'commercial')) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Policies for products (public read, admin write)
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (true);

CREATE POLICY "Products are insertable by authenticated users only" ON products
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policies for posts (public read published, admin write)
CREATE POLICY "Published posts are viewable by everyone" ON posts
  FOR SELECT USING (published = true);

CREATE POLICY "Posts are insertable by authenticated users only" ON posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policies for inquiries (public insert, admin read)
CREATE POLICY "Inquiries are insertable by everyone" ON inquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Inquiries are viewable by authenticated users only" ON inquiries
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at);

-- Warranty Registrations
CREATE TABLE IF NOT EXISTS warranty_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  warranty_id TEXT UNIQUE NOT NULL,

  -- Installer
  installer_name TEXT NOT NULL,
  installer_email TEXT NOT NULL,
  installer_phone TEXT NOT NULL,
  company_name TEXT,
  electrical_licence TEXT,

  -- Installation Address
  install_street TEXT NOT NULL,
  install_suburb TEXT NOT NULL,
  install_postcode TEXT NOT NULL,

  -- Homeowner (optional)
  on_behalf_of_homeowner BOOLEAN DEFAULT false,
  homeowner_name TEXT,
  homeowner_email TEXT,
  homeowner_phone TEXT,
  homeowner_address TEXT,

  -- System
  battery_model TEXT NOT NULL,
  serial_numbers TEXT[] NOT NULL,
  phases TEXT NOT NULL,
  grid_status TEXT NOT NULL,
  pv_system BOOLEAN DEFAULT false,
  backup_genset BOOLEAN DEFAULT false,
  inverter_brand TEXT,
  inverter_model TEXT,
  inverter_serial TEXT,

  -- Dates
  install_date DATE NOT NULL,
  commissioning_date DATE NOT NULL,

  -- Purchase Info
  retailer TEXT,
  purchase_date DATE,

  -- Notes
  installation_notes TEXT,

  -- Files (stored as Supabase Storage URLs)
  evidence_files JSONB DEFAULT '[]',

  -- Declarations
  installation_declaration BOOLEAN NOT NULL,
  marketing_permission BOOLEAN DEFAULT false,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT now(),
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security for warranty registrations
ALTER TABLE warranty_registrations ENABLE ROW LEVEL SECURITY;

-- Policies for warranty registrations (public insert, admin read)
CREATE POLICY "Warranty registrations are insertable by everyone" ON warranty_registrations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Warranty registrations are viewable by authenticated users only" ON warranty_registrations
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_warranty_registrations_warranty_id ON warranty_registrations(warranty_id);
CREATE INDEX IF NOT EXISTS idx_warranty_registrations_created_at ON warranty_registrations(created_at);
CREATE INDEX IF NOT EXISTS idx_warranty_registrations_status ON warranty_registrations(status);



-- Storage Bucket for Warranty Files
INSERT INTO storage.buckets (id, name, public)
VALUES ('warranty-uploads', 'warranty-uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies
CREATE POLICY "Warranty uploads are insertable by everyone"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'warranty-uploads' );

CREATE POLICY "Warranty uploads are viewable by everyone"
ON storage.objects FOR SELECT
USING ( bucket_id = 'warranty-uploads' );
