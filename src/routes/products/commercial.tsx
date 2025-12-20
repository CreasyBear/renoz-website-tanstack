import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../../components/ui/Button'
import { Building, Download, ArrowRight, BarChart3, Lock, Server } from 'lucide-react'
import { motion } from 'framer-motion'

const baseUrl = 'https://renoz.energy'

export const Route = createFileRoute('/products/commercial')({
  head: () => ({
    meta: [
      { title: 'Commercial Batteries - RENOZ Energy' },
      { name: 'description', content: '200+ kWh industrial-scale energy storage. Peak shaving, UPS capability, and grid support for businesses. Containerised or cabinet-based solutions.' },
      { property: 'og:title', content: 'Commercial Batteries - RENOZ Energy' },
      { property: 'og:description', content: '200+ kWh industrial-scale energy storage. Peak shaving, UPS capability, and grid support for businesses.' },
      { property: 'og:url', content: `${baseUrl}/products/commercial` },
      { name: 'twitter:title', content: 'Commercial Batteries - RENOZ Energy' },
      { name: 'twitter:description', content: '200+ kWh industrial-scale energy storage. Peak shaving, UPS capability, and grid support for businesses.' },
    ],
  }),
  component: CommercialProductsPage,
})

function CommercialProductsPage() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      {/* Product Hero - Cool Blue/Slate Theme for "Corporate/Tech" feel */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#E8EEF2] rounded-b-[40px] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
                <Building className="w-3 h-3" />
                Commercial Series
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 text-[var(--black)] leading-tight tracking-tight">
                Turn Energy into a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Managed Asset.
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                The RENOZ Commercial Series (200kWh+) allows businesses to stabilise costs, peak-shave, and secure operations against costly grid failures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" to="/contact" className="rounded-full px-8 bg-blue-700 hover:bg-blue-800 shadow-blue-700/20">
                  Request Consultation
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 border-gray-300 text-[var(--black)] hover:bg-white">
                  <Download className="w-4 h-4 mr-2" />
                  Technical Brief
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white rounded-[40px] aspect-square overflow-hidden shadow-2xl ring-1 ring-black/5"
            >
              <img
                src="/images/stock/winery-bess-1.webp"
                alt="RENOZ Commercial Battery"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                 <div className="text-white">
                    <p className="font-bold text-lg">Winery BESS</p>
                    <p className="text-sm opacity-80">Industrial Energy Storage</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: BarChart3, title: "Peak Shaving", desc: "Automatically discharge during peak tariff periods to drastically reduce demand charges." },
               { icon: Lock, title: "UPS Capability", desc: "<10ms switchover time ensures critical IT infrastructure and machinery never stops." },
               { icon: Server, title: "EMS Integration", desc: "Seamlessly integrates with existing Building Management Systems (BMS) via Modbus TCP." }
             ].map((feat, i) => (
               <div key={i} className="bg-white p-8 rounded-[32px] shadow-soft border border-gray-100/50 hover:border-blue-200 transition-colors group">
                 <div className="w-12 h-12 bg-blue-50 rounded-[16px] flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                   <feat.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                 <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Industrial Grade</h2>
              <p className="text-slate-400 text-lg mb-12">
                Containerised or cabinet-based solutions designed for rapid deployment and minimal site disturbance.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Energy Capacity", value: "200 kWh - 5 MWh" },
                  { label: "Discharge Rate", value: "0.5C - 2C" },
                  { label: "Fire Suppression", value: "Integrated Aerosol" },
                  { label: "Connectivity", value: "Ethernet / 4G" },
                  { label: "Compliance", value: "AS 3000 / AS 5139" },
                  { label: "Service Life", value: "15+ Years" }
                ].map((spec, i) => (
                  <div key={i} className="border-b border-slate-700 pb-4">
                    <div className="text-slate-500 text-sm mb-1">{spec.label}</div>
                    <div className="text-xl font-medium text-white">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-[32px] p-8 md:p-12 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-white">System Tiers</h3>
              <div className="space-y-6">
                {[
                  { model: "RENOZ-C200", cap: "215 kWh", type: "Indoor Cabinet Cluster" },
                  { model: "RENOZ-C500", cap: "537 kWh", type: "10ft Container" },
                  { model: "RENOZ-C1000", cap: "1.07 MWh", type: "20ft Container" },
                ].map((conf, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-900 rounded-[20px] border border-slate-700 hover:border-blue-500 transition-colors cursor-default group">
            <div>
                      <div className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">{conf.model}</div>
                      <div className="text-slate-400 text-sm">{conf.type}</div>
                    </div>
                    <div className="text-xl font-bold text-white">{conf.cap}</div>
            </div>
                ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
         <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-6">Partner with Perth's OEM</h2>
           <p className="text-slate-600 mb-8">
             We offer full engineering support from sizing and simulation to commissioning and lifecycle maintenance.
           </p>
           <Button variant="primary" size="lg" to="/contact" className="rounded-full bg-blue-700 hover:bg-blue-800 shadow-lg shadow-blue-700/20">
             Contact Commercial Team <ArrowRight className="ml-2 w-4 h-4" />
           </Button>
      </div>
      </section>
    </div>
  )
}
