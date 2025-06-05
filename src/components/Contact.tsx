'use client'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#172E6E] text-white py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-[#B2202C]">Contact</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded bg-white text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-white text-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 rounded bg-white text-black"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 rounded bg-white text-black"
          />
          <button
            type="submit"
            className="bg-[#B2202C] text-white px-6 py-3 rounded hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
