import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../../components/ui/Button'
import { Download, Zap, Shield, Thermometer, ArrowRight, ChevronDown, Plus } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { supabase } from '../../lib/supabase'
import { useState, useRef } from 'react'
import { cn } from '../../lib/utils'

const baseUrl = 'https://renoz.energy'

type ProductSpec = {
  capacity: string
  voltage: string
  chemistry: string
  scalability: string
  cycle_life: string
  warranty: string
  dimensions: string
  weight: string
  features: string[]
}

type Product = {
  id: string
  name: string
  description: string
  specs: ProductSpec
  images: string[]
}

export const Route = createFileRoute('/products/residential')({
  loader: async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('name', 'RENOZ LV-5KWH100AH')
      .single()

    if (error) {
      console.error('Error fetching product:', error)
      return { product: null }
    }

    return { product: data as Product }
  },
  head: () => ({
    meta: [
      { title: 'Residential Batteries - RENOZ Energy' },
      { name: 'description', content: '10-50kWh home energy storage systems. Power your entire home with genuine security. Engineered for Australian conditions with 10-year warranty.' },
      { property: 'og:title', content: 'Residential Batteries - RENOZ Energy' },
      { property: 'og:description', content: '10-50kWh home energy storage systems. Power your entire home with genuine security. Engineered for Australian conditions.' },
      { property: 'og:url', content: `${baseUrl}/products/residential` },
      { name: 'twitter:title', content: 'Residential Batteries - RENOZ Energy' },
      { name: 'twitter:description', content: '10-50kWh home energy storage systems. Power your entire home with genuine security.' },
    ],
  }),
  component: ResidentialProductsPage,
})

function ResidentialProductsPage() {
  const { product } = Route.useLoaderData()
  const [activeTab, setActiveTab] = useState<'specs' | 'docs'>('specs')

  // Fallback defaults if DB fetch fails or data is missing
  const specs = product?.specs || {
    capacity: "5.12 kWh",
    voltage: "51.2V (Nominal)",
    chemistry: "LiFePO4 (LFP)",
    cycle_life: ">6000 Cycles @ 80% DoD",
    warranty: "10 Years",
    scalability: "Up to 32 Units",
    dimensions: "640mm x 450mm x 177mm",
    weight: "53 kg",
    features: []
  }

  // Parallax ref
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <div className="min-h-screen bg-[var(--white-warm)] font-sans text-[var(--black)]" ref={targetRef}>

      {/* 1. Immersive Hero Section */}
      <section className="relative h-screen min-h-[800px] flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Layer */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <img
            src="/images/stock/garage-renoz-1.webp"
            alt="RENOZ Battery in Garage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white" />
        </motion.div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-5xl px-4 mt-[-10vh]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[var(--black)] drop-shadow-sm"
          >
            Power Everything.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-[var(--black-soft)] max-w-2xl mx-auto font-medium"
          >
            Energy storage engineered for the Australian climate. <br className="hidden md:block"/>
            Store solar. Power through blackouts. Save daily.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" to="/contact?type=homeowner" className="rounded-full px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Order Now
            </Button>
            <Button variant="outline" size="lg" to="/resources" className="rounded-full px-12 py-6 text-lg bg-white/80 backdrop-blur-md border-white/50 hover:bg-white">
              Specs
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-[var(--black-soft)]/50" />
        </motion.div>
      </section>

      {/* 2. Key Benefit: Design / Stackable */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[600px] bg-gray-50 rounded-[40px] overflow-hidden flex items-center justify-center p-10">
             <motion.img
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               src="/images/products/RENOZ Energy LV Render.png"
               alt="Stackable Design"
               className="max-h-full w-auto object-contain drop-shadow-2xl"
             />
          </div>
          <div>
            <span className="text-[var(--renoz-green)] font-bold tracking-widest uppercase text-sm mb-4 block">Modular Design</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed to Scale.</h2>
            <p className="text-xl text-[var(--text-muted)] mb-8 leading-relaxed">
              Start with what you need, expand when you want. The RENOZ LV system is fully modular.
              Begin with a single 5kWh module and stack up to 40kWh in a single tower as your energy needs grow.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <Plus className="w-6 h-6 text-[var(--black)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Plug & Play Expansion</h3>
                  <p className="text-[var(--text-muted)]">Add modules without rewiring your entire house.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[var(--black)]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">High Power Output</h3>
                  <p className="text-[var(--text-muted)]">Each stack delivers massive power for pumps, A/C, and EVs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The "Tesla" Grid Specs */}
      <section className="py-20 bg-[var(--black)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">10<span className="text-2xl text-[var(--renoz-green)]">yr</span></div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Warranty</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">5<span className="text-2xl text-[var(--renoz-green)]">kWh</span></div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Per Module</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">100<span className="text-2xl text-[var(--renoz-green)]">%</span></div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Depth of Discharge</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">45<span className="text-2xl text-[var(--renoz-green)]">°C</span></div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Heat Rated</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Durability Feature */}
      <section className="py-32 bg-[var(--cream)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[120px] pointer-events-none -mr-40 -mt-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Built for the Heat.</h2>
            <p className="text-xl text-[var(--text-muted)]">
              Most batteries derate (slow down) when it gets hot. Ours don't.
              Engineered specifically for Western Australian summers, keeping your home powered when grid transformers fail in the heat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: Thermometer, title: "Active Cooling", desc: "Advanced thermal management keeps cells in their optimal range." },
               { icon: Shield, title: "LFP Chemistry", desc: "Lithium Iron Phosphate is the safest, most stable chemistry available." },
               { icon: Zap, title: "Surge Proof", desc: "Handles high startup currents for air conditioners and pumps." }
             ].map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white p-8 rounded-[32px] shadow-soft"
               >
                 <item.icon className="w-10 h-10 text-[var(--renoz-green)] mb-6" strokeWidth={1.5} />
                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                 <p className="text-[var(--text-muted)]">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Specs Section */}
      <section className="py-24 bg-[var(--white-warm)] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-8 mb-12">
            <button
              onClick={() => setActiveTab('specs')}
              className={cn(
                "pb-4 text-lg font-medium transition-all relative",
                activeTab === 'specs' ? "text-[var(--black)]" : "text-gray-400 hover:text-gray-600"
              )}
            >
              Specifications
              {activeTab === 'specs' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--black)]" />}
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className={cn(
                "pb-4 text-lg font-medium transition-all relative",
                activeTab === 'docs' ? "text-[var(--black)]" : "text-gray-400 hover:text-gray-600"
              )}
            >
              Documentation
              {activeTab === 'docs' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--black)]" />}
            </button>
          </div>

          {activeTab === 'specs' ? (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="grid md:grid-cols-2 gap-x-12 gap-y-6"
             >
               {[
                 { label: "Energy Capacity", value: specs.capacity },
                 { label: "Power Rating", value: "5kW Cont. / 10kW Peak" },
                 { label: "Round Trip Efficiency", value: "95%" },
                 { label: "Warranty", value: specs.warranty },
                 { label: "Scalability", value: specs.scalability },
                 { label: "Dimensions", value: specs.dimensions },
                 { label: "Weight", value: specs.weight },
                 { label: "Installation", value: "Floor or Wall Mount" },
               ].map((spec, i) => (
                 <div key={i} className="flex justify-between py-4 border-b border-gray-100">
                   <span className="text-gray-500">{spec.label}</span>
                   <span className="font-semibold text-[var(--black)]">{spec.value}</span>
                 </div>
               ))}
             </motion.div>
          ) : (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="space-y-4"
             >
               {[
                 { name: "Datasheet", size: "2.4 MB" },
                 { name: "Warranty Terms", size: "1.1 MB" },
                 { name: "Installation Guide", size: "4.8 MB" },
               ].map((doc, i) => (
                 <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer group">
                   <div className="flex items-center gap-4">
                     <Download className="w-5 h-5 text-[var(--renoz-green)]" />
                     <span className="font-medium text-[var(--black)]">{doc.name}</span>
                   </div>
                   <div className="flex items-center gap-4 text-gray-400">
                     <span className="text-sm">{doc.size}</span>
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </div>
                 </div>
               ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* 6. Footer CTA - "Order" Style */}
      <section className="py-32 bg-[var(--black)] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Secure your home today.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" to="/contact" className="rounded-full px-12 py-6 text-lg">
              Get a Quote
            </Button>
            <Button variant="outline" size="lg" to="/installers" className="rounded-full px-12 py-6 text-lg border-white/20 hover:bg-white hover:text-black hover:border-white text-white">
              Find Installer
            </Button>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Installation available across Perth Metro and Regional WA.
          </p>
        </div>
      </section>

    </div>
  )
}
