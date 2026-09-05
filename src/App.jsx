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
  Flame,
  Wrench,
  Construction,
  ShieldAlert
} from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Estimate Calculator State
  const [roofType, setRoofType] = useState("tpo");
  const [squareFootage, setSquareFootage] = useState(35000);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    propertyName: "",
    contactName: "",
    phone: "",
    email: "",
    serviceNeeded: "Commercial Roof Replacement",
  });

  const ratePerSqFt = roofType === "tpo" ? 7.2 : roofType === "metal" ? 11.5 : 8.8;
  const estimatedCost = Math.round(squareFootage * ratePerSqFt);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const services = [
    {
      title: "Commercial Roof Replacement",
      desc: "TPO, PVC, and EPDM single-ply industrial membranes built for zero operational downtime and 25-year NDL warranties.",
      icon: <Building2 size={28} className="text-[#f97316]" />,
      features: ["25-Year NDL Full Material Warranty", "Zero Business Interruption Protocol", "FM Global Hail & Storm Ratings"],
    },
    {
      title: "Architectural Standing Seam Metal",
      desc: "Heavy-gauge 22-gauge steel standing seam roofs with custom on-site roll forming for industrial complexes.",
      icon: <Construction size={28} className="text-[#f97316]" />,
      features: ["Class 4 Wind & Impact Resistance", "Custom Field Roll-Forming Unit", "50+ Year Lifecycle Rating"],
    },
    {
      title: "Infrared Leak Audits & Coatings",
      desc: "Thermal FLIR imaging, sub-surface moisture scans, and silicone roof restoring coatings eliminating total replacement.",
      icon: <Ruler size={28} className="text-[#f97316]" />,
      features: ["24/7 Rapid Emergency Response", "FLIR Thermal Moisture Mapping", "100% Tax Deductible Maintenance"],
    },
    {
      title: "Industrial General Contracting & MEP",
      desc: "Full prime contracting for warehouse expansion, crane rail alignment, structural retrofits, and MEP engineering.",
      icon: <Wrench size={28} className="text-[#f97316]" />,
      features: ["Single-Point Prime Accountability", "OSHA 30 Safety Certified Supervisors", "$25 Million Project Bonding Capacity"],
    },
  ];

  const projects = [
    { name: "Pflugerville Logistics Hub", size: "145,000 Sq Ft", system: "TPO 80-Mil Membrane", val: "$1,150,000", tag: "Industrial Warehouse" },
    { name: "Austin Tech Ridge Center", size: "85,000 Sq Ft", system: "Standing Seam 22GA Steel", val: "$890,000", tag: "Corporate Office Park" },
    { name: "Round Rock Industrial Complex", size: "260,000 Sq Ft", system: "Fluid-Applied Restoration", val: "$1,450,000", tag: "Manufacturing Plant" },
  ];

  const faqs = [
    {
      q: "How fast can Titan complete a 3D drone measurement and itemized bid?",
      a: "Our commercial estimating team deploys thermal 3D drone mapping to deliver an itemized fixed-price proposal within 24 hours of on-site inspection.",
    },
    {
      q: "What bonding and safety qualifications does Titan hold?",
      a: "Titan holds an OSHA 30 safety compliance rating, $25M single-project bonding limits, and comprehensive General Liability & Workers' Compensation insurance.",
    },
    {
      q: "Can roofing work take place while tenants are inside the building?",
      a: "Yes. Over 95% of our commercial roofing projects are performed while facilities remain fully operational with zero disruption to daily business.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0f14] text-[#f8fafc] font-sans antialiased selection:bg-[#f97316] selection:text-black">
      {/* Industrial Warning Bar */}
      <div className="bg-[#181b22] border-b border-[#f97316]/30 py-2.5 px-4 text-center text-xs text-[#d1d5db] flex justify-center items-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-[#f97316] font-extrabold tracking-wider uppercase text-[11px]">
          <ShieldAlert size={14} /> 24/7 Commercial Emergency Dispatch Desk
        </span>
        <span className="hidden sm:inline text-[#374151]">|</span>
        <span className="hidden sm:inline text-[#9ca3af]">Immediate On-Site Response: </span>
        <a href="tel:8005550166" className="text-[#f97316] font-extrabold hover:underline tracking-wide">
          (800) 555-0166
        </a>
      </div>

      {/* Industrial Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0d0f14]/95 border-b border-[#f97316]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center text-black shadow-lg shadow-[#f97316]/25 border-2 border-[#fb923c]">
              <HardHat size={26} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="font-industrial text-3xl font-bold tracking-wider text-white block leading-none">
                TITAN COMMERCIAL
              </span>
              <span className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-[#f97316] block mt-0.5">
                Roofing & Heavy Construction
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-industrial text-lg tracking-widest text-[#9ca3af]">
            <a href="#services" className="hover:text-[#f97316] transition-colors">Services</a>
            <a href="#calculator" className="hover:text-[#f97316] transition-colors">Estimate Tool</a>
            <a href="#projects" className="hover:text-[#f97316] transition-colors">Projects</a>
            <a href="#faq" className="hover:text-[#f97316] transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#f97316] hover:bg-[#ea580c] text-black font-industrial text-lg px-6 py-2.5 tracking-wider transition-all shadow-lg shadow-[#f97316]/25 border border-[#fb923c] flex items-center gap-2"
            >
              <span>REQUEST COMMERCIAL BID</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 border-b border-[#232733] overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#24180d] via-[#0d0f14] to-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-sm bg-[#f97316]/10 border border-[#f97316]/40 text-[#f97316] font-industrial text-sm tracking-widest">
                <Award size={16} />
                <span>OSHA 30 CERTIFIED & $25M BONDED PRIME CONTRACTOR</span>
              </div>

              <h1 className="font-industrial text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none tracking-wide">
                HEAVY INDUSTRIAL COMMERCIAL ROOFING & CONSTRUCTION.
              </h1>

              <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed max-w-2xl font-medium">
                Titan Commercial Construction executes high-volume TPO/PVC replacements, 22-gauge architectural metal systems, and general contracting for logistics parks, manufacturing plants, and retail centers.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#f97316] hover:bg-[#ea580c] text-black font-industrial text-xl px-8 py-3.5 tracking-widest transition-all shadow-xl shadow-[#f97316]/30 border border-[#fb923c] flex items-center gap-3"
                >
                  <span>SCHEDULE DRONE LASER SCAN</span>
                  <ArrowRight size={18} />
                </button>
                <a
                  href="tel:8005550166"
                  className="bg-[#181b22] hover:bg-[#232733] text-white border border-[#f97316]/40 px-6 py-3.5 font-industrial text-lg tracking-widest transition-all flex items-center gap-2"
                >
                  <PhoneCall size={18} className="text-[#f97316]" />
                  <span>CALL (800) 555-0166</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#232733]">
                <div>
                  <div className="font-industrial text-4xl text-white">4.5M+ SQ FT</div>
                  <div className="text-xs text-[#9ca3af] font-bold uppercase tracking-wider">Installed & Covered</div>
                </div>
                <div>
                  <div className="font-industrial text-4xl text-[#f97316]">25-YEAR NDL</div>
                  <div className="text-xs text-[#9ca3af] font-bold uppercase tracking-wider">Full Material Warranty</div>
                </div>
                <div>
                  <div className="font-industrial text-4xl text-white">$25M BONDED</div>
                  <div className="text-xs text-[#9ca3af] font-bold uppercase tracking-wider">Single Project Limit</div>
                </div>
              </div>
            </div>

            {/* Commercial Bid Intake Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#14171f] border-2 border-[#f97316]/40 rounded-xl p-7 sm:p-9 shadow-2xl relative">
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#232733]">
                  <div className="w-12 h-12 bg-[#f97316]/10 border border-[#f97316]/40 flex items-center justify-center text-[#f97316]">
                    <Calculator size={24} />
                  </div>
                  <div>
                    <h3 className="font-industrial text-2xl text-white tracking-wider">COMMERCIAL BID REQUEST</h3>
                    <p className="text-xs text-[#9ca3af] font-bold">24-Hour Laser Scope Guarantee</p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold text-[#f97316] uppercase tracking-wider mb-1.5">
                      Project Scope / Service Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full bg-[#0d0f14] border border-[#232733] rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f97316]"
                    >
                      <option value="Commercial Roof Replacement">Commercial Roof Replacement (TPO/PVC)</option>
                      <option value="Architectural Metal Roofing">Architectural Standing Seam Steel</option>
                      <option value="Infrared Moisture Audit">FLIR Infrared Audit & Leak Repair</option>
                      <option value="Industrial Contracting">Industrial General Contracting & MEP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#f97316] uppercase tracking-wider mb-1.5">
                      Property / Facility Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Metro Logistics Park"
                      required
                      value={formData.propertyName}
                      onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                      className="w-full bg-[#0d0f14] border border-[#232733] rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f97316]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#f97316] uppercase tracking-wider mb-1.5">
                      Facility Contact Name & Title
                    </label>
                    <input
                      type="text"
                      placeholder="David Miller, VP Facilities"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-[#0d0f14] border border-[#232733] rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f97316]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#f97316] uppercase tracking-wider mb-1.5">
                      Direct Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0d0f14] border border-[#232733] rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#f97316]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f97316] hover:bg-[#ea580c] text-black font-industrial text-xl py-3.5 tracking-widest transition-all shadow-md shadow-[#f97316]/20 flex items-center justify-center gap-2 mt-2"
                  >
                    <span>SUBMIT COMMERCIAL BID TICKET</span>
                    <ArrowRight size={18} />
                  </button>
                </form>

                {formSubmitted && (
                  <div className="absolute inset-0 bg-[#14171f] rounded-xl p-8 flex flex-col items-center justify-center text-center z-20 border-2 border-[#f97316]">
                    <div className="w-14 h-14 bg-[#f97316]/20 border border-[#f97316] flex items-center justify-center text-[#f97316] mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="font-industrial text-3xl text-white mb-2">BID TICKET DISPATCHED!</h4>
                    <p className="text-sm text-[#9ca3af] mb-6 font-medium">
                      A Senior Estimator will contact your facility management within 1 hour.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#f97316] font-bold uppercase tracking-wider hover:underline"
                    >
                      Submit Another Facility Request
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-b border-[#232733] bg-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] font-industrial text-sm tracking-widest">
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-industrial text-4xl sm:text-5xl font-bold text-white tracking-wide">
              COMMERCIAL CONTRACTING SPECIFICATIONS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-[#14171f] border border-[#232733] rounded-xl p-7 flex flex-col justify-between hover:border-[#f97316]/60 transition-all">
                <div>
                  <div className="w-12 h-12 bg-[#f97316]/10 border border-[#f97316]/30 flex items-center justify-center mb-6">
                    {s.icon}
                  </div>
                  <h3 className="font-industrial text-2xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-[#9ca3af] leading-relaxed mb-6 font-medium">{s.desc}</p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-[#232733]">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#d1d5db] font-semibold">
                      <CheckCircle2 size={14} className="text-[#f97316] shrink-0" />
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
      <section id="calculator" className="py-24 border-b border-[#232733] bg-[#14171f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] font-industrial text-sm tracking-widest">
                <span>ESTIMATION CALCULATOR</span>
              </div>
              <h2 className="font-industrial text-4xl sm:text-5xl font-bold text-white tracking-wide">
                COMMERCIAL ROOF INVESTMENT ESTIMATOR
              </h2>

              <div className="space-y-6 bg-[#0d0f14] p-7 rounded-xl border border-[#232733]">
                <div>
                  <label className="block text-xs font-extrabold text-[#f97316] uppercase tracking-wider mb-3">Roofing System</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setRoofType("tpo")}
                      className={`py-3 px-3 rounded-lg font-industrial text-lg tracking-wider border transition-all ${
                        roofType === "tpo" ? "bg-[#f97316] text-black border-[#f97316]" : "bg-[#14171f] text-[#9ca3af] border-[#232733]"
                      }`}
                    >
                      TPO / PVC Membrane
                    </button>
                    <button
                      onClick={() => setRoofType("metal")}
                      className={`py-3 px-3 rounded-lg font-industrial text-lg tracking-wider border transition-all ${
                        roofType === "metal" ? "bg-[#f97316] text-black border-[#f97316]" : "bg-[#14171f] text-[#9ca3af] border-[#232733]"
                      }`}
                    >
                      22GA Steel Metal
                    </button>
                    <button
                      onClick={() => setRoofType("coating")}
                      className={`py-3 px-3 rounded-lg font-industrial text-lg tracking-wider border transition-all ${
                        roofType === "coating" ? "bg-[#f97316] text-black border-[#f97316]" : "bg-[#14171f] text-[#9ca3af] border-[#232733]"
                      }`}
                    >
                      Silicone Coating
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-extrabold text-[#f97316] uppercase tracking-wider">Square Feet Area</label>
                    <span className="font-industrial text-2xl text-white">{squareFootage.toLocaleString()} SQ FT</span>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="200000"
                    step="5000"
                    value={squareFootage}
                    onChange={(e) => setSquareFootage(Number(e.target.value))}
                    className="w-full h-2.5 bg-[#232733] rounded-lg appearance-none cursor-pointer accent-[#f97316]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0d0f14] border-2 border-[#f97316]/50 rounded-xl p-9 text-center space-y-6 shadow-2xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#f97316]">Estimated Commercial Budget</span>
                <div className="font-industrial text-6xl text-white">${estimatedCost.toLocaleString()}</div>
                <p className="text-xs text-[#9ca3af] font-medium">Includes labor, safety rigging, trash disposal, and 25-year NDL material warranty.</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#f97316] hover:bg-[#ea580c] text-black font-industrial text-xl py-4 tracking-widest shadow-lg shadow-[#f97316]/20 flex items-center justify-center gap-2"
                >
                  <span>REQUEST ITEMIZED WRITTEN PROPOSAL</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section id="projects" className="py-24 border-b border-[#232733] bg-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-industrial text-4xl sm:text-5xl font-bold text-white tracking-wide">
              FEATURED INDUSTRIAL PROJECTS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="bg-[#14171f] border border-[#232733] rounded-xl p-7 space-y-4">
                <span className="text-[11px] font-extrabold px-3 py-1 bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316] uppercase tracking-wider">{p.tag}</span>
                <h3 className="font-industrial text-2xl text-white">{p.name}</h3>
                <div className="flex justify-between items-center text-xs text-[#9ca3af] pt-3 border-t border-[#232733] font-bold">
                  <span>Scope: {p.size}</span>
                  <span className="font-industrial text-xl text-[#f97316]">{p.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d0f14] border-t border-[#232733] py-12 text-[#9ca3af] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#f97316] flex items-center justify-center text-black font-bold">
              <HardHat size={16} className="stroke-[2.5]" />
            </div>
            <span className="font-industrial text-xl text-white">TITAN COMMERCIAL CONSTRUCTION</span>
          </div>
          <div>© 2026 Titan Commercial Construction Inc. OSHA 30 & Bonded. All rights reserved.</div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#14171f] border-2 border-[#f97316] rounded-xl p-8 max-w-lg w-full relative shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-[#9ca3af] hover:text-white">
              <X size={20} />
            </button>
            <h3 className="font-industrial text-3xl text-white mb-2 tracking-wider">DRONE LASER INSPECTION REQUEST</h3>
            <p className="text-xs text-[#9ca3af] mb-6 font-bold">24-Hour Itemized Commercial Scope</p>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" required placeholder="Facility Address / Location" className="w-full bg-[#0d0f14] border border-[#232733] rounded-lg px-4 py-3.5 text-sm text-white focus:border-[#f97316]" />
              <input type="tel" required placeholder="Direct Phone Number" className="w-full bg-[#0d0f14] border border-[#232733] rounded-lg px-4 py-3.5 text-sm text-white focus:border-[#f97316]" />
              <button type="submit" className="w-full bg-[#f97316] text-black font-industrial text-xl py-3.5 tracking-widest">
                DISPATCH ESTIMATING CREW
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
