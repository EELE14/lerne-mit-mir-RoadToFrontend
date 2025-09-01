import Navbar from "../components/Navbar";
import Prism from "../components/Prism";

export default function Contact() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Prism animationType="rotate" timeScale={0.5} />
      </div>

      <main className="relative z-10 flex items-start justify-center pt-12 px-4">
        <section className="w-full max-w-2xl bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact me</h2>
          <p className="mb-4 text-sm text-gray-700">
            Use this form to reach out. This is a UI-only example — adapt the
            submit handler to integrate with your backend or email service.
          </p>

          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input className="w-full rounded-md border border-gray-300 p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input className="w-full rounded-md border border-gray-300 p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="w-full rounded-md border border-gray-300 p-2 h-32" />
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
