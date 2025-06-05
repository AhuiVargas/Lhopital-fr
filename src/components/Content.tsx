'use client'

export default function Content() {
  return (
    <>
      <section id="about" className="bg-[#FAF9F6] text-[#172E6E] py-16 px-6">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="max-w-xl">
          Lhopital-FR is committed to providing top-tier emergency and rescue services with modern equipment and expert personnel.
        </p>
      </section>

      <section id="services" className="bg-white text-[#172E6E] py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Services</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: "🧯", title: "EPP", desc: "Protective equipment services and training." },
            { icon: "🪜", title: "Stabilization", desc: "Accident scene stabilization and recovery." },
            { icon: "🚑", title: "Emergency Vehicle", desc: "Vehicle extrication and rescue support." },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-lg shadow bg-[#FAF9F6] border border-gray-100"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h4 className="font-bold text-lg mb-2">{title}</h4>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
