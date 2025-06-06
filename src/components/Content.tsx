'use client'

import Partners from "./Partners";

export default function Content() {
  return (
    <>
      <section id="about" className="bg-[#FAF9F6] text-[#172E6E] py-16 px-6">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="max-w-xl">
          Lhopital-FR is committed to providing top-tier emergency and rescue services with modern equipment and expert personnel.
        </p>
      </section>

     <Partners />
    </>
  );
}
