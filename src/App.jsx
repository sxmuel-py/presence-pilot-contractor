import React, { useState } from "react";
import {
  HardHat,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Calculator,
  PhoneCall,
  Award,
  ArrowRight,
  Clock,
  X,
  ChevronDown,
  Zap,
  Ruler,
  MapPin,
  Check
} from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Estimate Calculator State
  const [roofType, setRoofType] = useState("tpo");
  const [squareFootage, setSquareFootage] = useState(25000);
  const [warrantyYears, setWarrantyYears] = useState(20);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    propertyName: "",
    contactName: "",
    phone: "",
    email: "",
    serviceNeeded: "Commercial Roof Replacement",
  });

  const ratePerSqFt = roofType === "tpo" ? 6.5 : roofType === "metal" ? 9.5 : 8.0;
  const estimatedCost = Math.round(squareFootage * ratePerSqFt);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const services = [
    {
      title: "Commercial Roof Replacement",
      desc: "TPO, PVC, and EPDM single-ply membrane roofing systems engineered for industrial facilities and retail complexes.",
      icon: <Building2 size={24} color="#3b82f6" />,
      features: ["25-Year NDL Material Warranties", "Zero Business Interruption", "Thermal Efficiency Ratings"],
    },
    {
      title: "Architectural Standing Seam Metal",
      desc: "Heavy-gauge structural metal roofing systems built for extreme storm endurance and architectural aesthetics.",
      icon: <HardHat size={24} color="#3b82f6" />,
      features: ["Class 4 Impact Resistance", "Custom On-Site Fabrication", "50+ Year Life Expectancy"],
    },
    {
      title: "Preventative Maintenance & Repairs",
      desc: "Infrared leak detection, storm damage restorations, and scheduled roof lifecycle extension programs.",
      icon: <Ruler size={24} color="#3b82f6" />,
      features: ["24/7 Emergency Leak Response", "Thermal Imaging Audits", "FM Global Compliant"],
    },
    {
      title: "General Contracting & MEP",
      desc: "Full-scale commercial building renovations, tenant fit-outs, and heavy MEP mechanical installations.",
      icon: <Zap size={24} color="#3b82f6" />,
      features: ["Single-Point Accountability", "OSHA 30 Certified Crews", "Bonded up to $25 Million"],
    },
  ];

  const projects = [
    { name: "Pflugerville Logistics Center", size: "120,000 Sq Ft", system: "TPO 60-Mil Membrane", val: "$850,000" },
    { name: "Austin Tech Ridge Office Tower", size: "65,000 Sq Ft", system: "Standing Seam Metal", val: "$540,000" },
    { name: "Round Rock Industrial Park", size: "210,000 Sq Ft", system: "Fluid-Applied Coating", val: "$1,200,000" },
  ];

  const faqs = [
    {
      q: "How fast can Titan provide an on-site commercial estimate?",
      a: "Our commercial estimating team utilizes drone 3D laser mapping to deliver a comprehensive scope and itemized bid within 24 to 48 hours of on-site inspection.",
    },
    {
      q: "What bonding limits and insurance coverage does Titan maintain?",
      a: "Titan Commercial Construction carries $25M in General Liability insurance, full workers' compensation coverage, and single-project bonding capacity up to $25 Million.",
    },
    {
      q: "Can roofing operations occur without interrupting tenant operations?",
      a: "Yes. 95% of our commercial roof replacements take place while the facility remains fully operational, utilizing low-noise equipment and phased sectioning.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#f8fafc] font-sans antialiased">
      {/* Top Banner */}
      <div className="bg-[#1e293b] border-b border-[#334155] py-2 px-4 text-center text-xs text-[#94a3b8] flex justify-center items-center gap-2">
        <ShieldCheck size={12} className="text-[#60a5fa]" />
        <span>24/7 Commercial Emergency Response Hotline: </span>
        <a href="tel:8005550166" className="text-[#60a5fa] font-bold hover:underline">
          (800) 555-0166
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0b0f19]/90 border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] flex items-center justify-center text-white shadow-lg shadow-[#3b82f6]/20">
              <HardHat size={22} className="fill-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white block leading-none">
                Titan Commercial
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#60a5fa] block mt-1">
                Roofing & Prime Construction
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#94a3b8]">
            <a href="#services" className="hover:text-white transition-colors">Commercial Services</a>
            <a href="#calculator" className="hover:text-white transition-colors">Estimate Tool</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-[#3b82f6]/25 hover:shadow-lg flex items-center gap-2"
            >
              <span>Request Commercial Bid</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 pb-24 border-b border-[#1e293b] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3b82f6]/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#60a5fa] text-xs font-bold uppercase tracking-wider">
                <Award size={14} />
                <span>OSHA 30 Certified & $25M Bonded Contractor</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Industrial Commercial Roofing & Construction.
              </h1>

              <p className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl">
                Titan Commercial Construction delivers heavy-duty roofing, standing seam metal systems, and general contracting for high-value industrial and commercial real estate assets.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-[#3b82f6]/30 flex items-center gap-3"
                >
                  <span>Schedule On-Site Drone Inspection</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="tel:8005550166"
                  className="bg-[#111827] hover:bg-[#1e293b] text-white border border-[#334155] px-6 py-4 rounded-xl font-bold text-base transition-all flex items-center gap-2"
                >
                  <PhoneCall size={18} className="text-[#60a5fa]" />
                  <span>Call (800) 555-0166</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1e293b]">
                <div>
                  <div className="text-2xl font-extrabold text-white">4.5M+</div>
                  <div className="text-xs text-[#94a3b8] font-medium">Sq Ft Roofed & Installed</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#60a5fa]">25-Year</div>
                  <div className="text-xs text-[#94a3b8] font-medium">NDL Manufacturer Warranty</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">$25M</div>
                  <div className="text-xs text-[#94a3b8] font-medium">Single-Project Bond Limits</div>
                </div>
              </div>
            </div>

            {/* Quick Bid Request Form */}
            <div className="lg:col-span-5">
              <div className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center text-[#60a5fa]">
                    <Calculator size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Commercial Bid Request</h3>
                    <p className="text-xs text-[#94a3b8]">24-Hour Itemized Scope Guarantee</p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase mb-1">
                      Project Service Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                    >
                      <option value="Commercial Roof Replacement">Commercial Roof Replacement (TPO/PVC)</option>
                      <option value="Metal Roofing System">Architectural Metal Roof System</option>
                      <option value="Roof Repair & Inspection">Preventative Repair & Infrared Audit</option>
                      <option value="General Contracting">General Contracting & Fit-Out</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase mb-1">
                      Property / Building Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Metro Commerce Center"
                      required
                      value={formData.propertyName}
                      onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                      className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase mb-1">
                      Contact Name & Title
                    </label>
                    <input
                      type="text"
                      placeholder="David Miller, Facilities Director"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#94a3b8] uppercase mb-1">
                      Direct Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3b82f6]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-[#3b82f6]/20 flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Submit Bid Request</span>
                    <ArrowRight size={16} />
                  </button>
                </form>

                {formSubmitted && (
                  <div className="absolute inset-0 bg-[#111827] rounded-2xl p-6 flex flex-col items-center justify-center text-center z-20">
                    <div className="w-12 h-12 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] mb-4">
                      <CheckCircle2 size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Bid Ticket Issued!</h4>
                    <p className="text-sm text-[#94a3b8] mb-6">
                      A Senior Commercial Estimator will contact your property manager within 1 hour.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#60a5fa] font-bold hover:underline"
                    >
                      Submit Another Property
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 border-b border-[#1e293b] bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Commercial Roofing & Construction Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 flex flex-col justify-between hover:border-[#3b82f6]/50 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center mb-5">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">{s.desc}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#1e293b]">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#94a3b8]">
                      <CheckCircle2 size={14} className="text-[#3b82f6] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate Calculator */}
      <section id="calculator" className="py-20 border-b border-[#1e293b] bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#60a5fa] text-xs font-bold uppercase tracking-wider">
                <span>Instant Budgeting Tool</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Commercial Roof Cost Estimator
              </h2>

              <div className="space-y-6 bg-[#0b0f19] p-6 rounded-2xl border border-[#1e293b]">
                <div>
                  <label className="block text-xs font-bold text-[#94a3b8] uppercase mb-3">Roof System</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setRoofType("tpo")}
                      className={`py-3 px-3 rounded-xl text-xs font-bold border ${roofType === "tpo" ? "bg-[#3b82f6] text-white border-[#3b82f6]" : "bg-[#111827] text-[#94a3b8] border-[#1e293b]"}`}
                    >
                      TPO / PVC
                    </button>
                    <button
                      onClick={() => setRoofType("metal")}
                      className={`py-3 px-3 rounded-xl text-xs font-bold border ${roofType === "metal" ? "bg-[#3b82f6] text-white border-[#3b82f6]" : "bg-[#111827] text-[#94a3b8] border-[#1e293b]"}`}
                    >
                      Standing Metal
                    </button>
                    <button
                      onClick={() => setRoofType("coating")}
                      className={`py-3 px-3 rounded-xl text-xs font-bold border ${roofType === "coating" ? "bg-[#3b82f6] text-white border-[#3b82f6]" : "bg-[#111827] text-[#94a3b8] border-[#1e293b]"}`}
                    >
                      Silicone Coating
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-[#94a3b8] uppercase">Total Square Feet</label>
                    <span className="text-sm font-extrabold text-[#60a5fa]">{squareFootage.toLocaleString()} Sq Ft</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="150000"
                    step="5000"
                    value={squareFootage}
                    onChange={(e) => setSquareFootage(Number(e.target.value))}
                    className="w-full h-2 bg-[#1e293b] rounded-lg appearance-none cursor-pointer accent-[#3b82f6]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-gradient-to-b from-[#1e293b] to-[#0b0f19] border border-[#334155] rounded-3xl p-8 text-center space-y-6">
                <span className="text-xs font-extrabold uppercase text-[#60a5fa] tracking-wider">Estimated Project Investment</span>
                <div className="text-5xl font-extrabold text-white">${estimatedCost.toLocaleString()}</div>
                <p className="text-xs text-[#94a3b8]">Based on preliminary parameters. Complete itemized proposal supplied following on-site drone laser scan.</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#3b82f6]/25 flex items-center justify-center gap-2"
                >
                  <span>Request Written Proposal</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-b border-[#1e293b] bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Recent Industrial Portfolio</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="bg-[#111827] border border-[#1e293b] rounded-2xl p-6 space-y-3">
                <div className="text-xs text-[#60a5fa] font-bold uppercase">{p.system}</div>
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <div className="flex justify-between items-center text-xs text-[#94a3b8] pt-2 border-t border-[#1e293b]">
                  <span>Scope: {p.size}</span>
                  <span className="font-extrabold text-white">{p.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0f19] border-t border-[#1e293b] py-12 text-[#94a3b8] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#3b82f6] flex items-center justify-center text-white font-bold">
              <HardHat size={16} className="fill-white" />
            </div>
            <span className="text-white font-bold text-base">Titan Commercial Roofing</span>
          </div>
          <div>© 2026 Titan Commercial Construction Inc. All rights reserved.</div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111827] border border-[#1e293b] rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-[#94a3b8] hover:text-white">
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-white mb-4">Request Commercial Drone Inspection</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" required placeholder="Property Address / City" className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white" />
              <input type="tel" required placeholder="Phone Number" className="w-full bg-[#0b0f19] border border-[#1e293b] rounded-xl px-4 py-3 text-sm text-white" />
              <button type="submit" className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-3.5 rounded-xl font-bold text-sm">
                Schedule Inspection
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
