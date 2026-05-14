export default function LivingHopeSocietyWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-emerald-700">
              THE LIVING HOPE SOCIETY
            </h1>
            <p className="text-sm text-slate-500 tracking-wide mt-1">
              HOPE • COMPASSION • CARE • SERVICE
            </p>
            <div className="mt-2 text-xs text-slate-500 space-y-1">
              <p>Established : __________</p>
              <p>Registration No. : __________</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-emerald-600">Home</a>
            <a href="#about" className="hover:text-emerald-600">About Society</a>
            <a href="#services" className="hover:text-emerald-600">Services</a>
            <a href="#administrator" className="hover:text-emerald-600">Administrator</a>
            <a href="#projects" className="hover:text-emerald-600">Upcoming Projects</a>
            <a href="#gallery" className="hover:text-emerald-600">Gallery</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-r from-emerald-700 via-emerald-600 to-cyan-600 text-white"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <p className="uppercase tracking-[4px] text-sm mb-4 text-emerald-100">
              Welcome to The Living Hope Society
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building a Better Tomorrow Together We Can
            </h2>

            <p className="text-lg text-emerald-50 leading-relaxed max-w-xl">
              To build a compassionate and progressive society through quality education,
              healthcare, and humanitarian service.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                Learn More
              </button>

              <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition">
                Contact Us
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-[40px] p-6 shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop"
                alt="Hope Tree"
                className="rounded-[30px] w-full max-w-md object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[90px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44C197.81,89.17,0,120,0,120H1200V0S1058,79.31,863,72.05C668,64.79,567.89-6.67,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-emerald-600 font-semibold uppercase tracking-[3px] mb-3">
              About Society
            </p>

            <h3 className="text-4xl font-bold text-slate-800 mb-6">
              Serving Humanity Through Education, Healing & Hope
            </h3>

            <p className="text-slate-600 leading-relaxed text-lg">
              The Living Hope Society is committed to building a compassionate and progressive
              society through quality education, healthcare, and humanitarian service.
            </p>

            <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-3xl p-6 shadow-sm">
              <h4 className="font-semibold text-emerald-700 mb-4">Official Information</h4>

              <div className="space-y-2 text-slate-600">
                <p>Society Registration No. : __________________</p>
                <p>Established On : ____ / ____ / ______</p>
                <p>Registered Under : __________________</p>
                <p>Registered By : __________________</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-emerald-700 to-cyan-700 text-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

              <p className="text-3xl leading-relaxed font-light italic relative z-10">
                “Hope is not just a word for us — it is a commitment to heal,
                educate, support, and transform lives.”
              </p>

              <div className="mt-8 relative z-10">
                <p className="font-bold text-xl">Kishor M. Naik</p>
                <p className="text-emerald-100">Founder</p>

                <div className="mt-4 border-t border-white/20 pt-4">
                  <p className="font-bold text-xl">Prafullata K. Naik</p>
                  <p className="text-emerald-100">Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administrator Section */}
      <section id="administrator" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-emerald-600 uppercase tracking-[3px] font-semibold mb-3">
            Administrator
          </p>

          <h3 className="text-4xl font-bold text-slate-800 mb-6">
            Leadership & Administration
          </h3>

          <div className="bg-gradient-to-r from-emerald-700 to-cyan-700 rounded-[35px] p-10 text-white shadow-2xl">
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Administrator, Founder, President, Vice President and member details can be updated later through the admin panel.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/20 mb-4"></div>
                <h4 className="font-semibold text-lg">Founder</h4>
                <p className="text-emerald-100 text-sm mt-2">Details can be added later</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/20 mb-4"></div>
                <h4 className="font-semibold text-lg">President</h4>
                <p className="text-emerald-100 text-sm mt-2">Details can be added later</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/20 mb-4"></div>
                <h4 className="font-semibold text-lg">Vice President</h4>
                <p className="text-emerald-100 text-sm mt-2">Details can be added later</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-10">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold text-emerald-400 mb-4">
              THE LIVING HOPE SOCIETY
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Building hope through education, healthcare, compassion, and service.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-4">Quick Links</h5>
            $1

            <div className="mt-6 bg-slate-800 rounded-2xl p-4 border border-slate-700">
              <h6 className="text-emerald-400 font-semibold mb-2">Administrator</h6>
              <p className="text-slate-400 text-sm">Administrator details can be added later from the admin panel.</p>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-4">Contact</h5>
            <div className="space-y-2 text-slate-300">
              <p>Solapur, Maharashtra, India</p>
              <p>+91 76200 07250</p>
              <p>info@livinghopesociety.org</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-5 text-center text-slate-400 text-sm">
          © The Living Hope Society. All Rights Reserved.
        </div>
      </footer>

      {/* Privacy Policy */}
      <section id="privacy-policy" className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-xl p-10 md:p-14 border border-slate-100">
          <p className="text-emerald-600 uppercase tracking-[3px] font-semibold mb-3">
            Privacy Policy
          </p>

          <h3 className="text-4xl font-bold text-slate-800 mb-8">
            Privacy & Information Policy
          </h3>

          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              The Living Hope Society respects and protects the privacy of all visitors,
              volunteers, donors, and members associated with our organization.
            </p>

            <p>
              Information submitted through contact forms, donation forms, or inquiries
              may include name, phone number, email address, and message details.
            </p>

            <p>
              This information is used only for communication, support services,
              updates, and organizational activities.
            </p>

            <p>
              The website may use basic cookies and analytics tools to improve
              website performance and visitor experience.
            </p>

            <p>
              Personal information will not be sold or shared with unauthorized third parties.
            </p>

            <p>
              Future online donations and payment services will use secure payment gateways.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200 text-slate-500 text-sm">
            For any privacy related queries, please contact The Living Hope Society.
          </div>
        </div>
      </section>
    </div>
  );
}
