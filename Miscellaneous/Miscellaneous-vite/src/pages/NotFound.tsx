import Prism from "../components/Prism";
import { HomeIcon } from "lucide-react";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Prism animationType="rotate" timeScale={0.5} />
        </div>
        <div className="text-center space-y-8 max-w-2xl mx-auto mb-290">
          <div className="text-8xl md:text-9xl font-black text-transparent ">
            404
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into
              the digital void. Don't worry, it happens to the best of us.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              ← Go Back
            </button>

            <a
              href="/"
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-lg transition-colors duration-200"
            >
              <HomeIcon className="inline-block mr-2" />
              Home
            </a>
          </div>
          <div className="mt-12">
            <div className="text-6xl opacity-50">🔍💭</div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Error Code: 404 • Page Not Found
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
