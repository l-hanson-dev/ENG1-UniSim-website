import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Outlet } from "react-router-dom";

function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? children : null;
}

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}

export default function Root() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <ClientOnly>
        <div>
          <ThemeToggle />
          
          <section className="max-w-4xl mx-auto px-4 py-8">
            {/* Logo placeholder
          <div className="mb-8">
            <img 
              id="projectBanner" 
              src="/images/projectBanner.png" 
              alt="Project Banner" 
              className="w-full max-w-2xl mx-auto hidden"
            />
          </div>
          */}

          <h1 className="text-4xl font-bold mb-8">UniSim</h1>

<section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
  
  <ul className="list-disc pl-6 mb-6 space-y-2">
    <li>
      <a href="https://github.com/l-hanson-dev/ENG1-UniSim" 
         className="text-blue-600 dark:text-blue-400 hover:underline">
        Version control repository
      </a>
    </li>
    <li>
      <a href="https://github.com/l-hanson-dev/ENG1-UniSim-website"
         className="text-blue-600 dark:text-blue-400 hover:underline">
        (Website) version control repository
      </a>
    </li>
    <li>
      PDF's
      <ul className="list-disc pl-6 mt-2">
        <li>
          <a href="/media/deliverables/Architecture_notes_EXAMPLE_DRAFTpdf.pdf"
             className="text-blue-600 dark:text-blue-400 hover:underline">
            Architecture_notes_EXAMPLE_DRAFT
          </a>
        </li>
      </ul>
    </li>
  </ul>

  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-800">
          <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Deliverable</th>
          <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Max. mark</th>
          <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Page limit</th>
          <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">File name and format</th>
        </tr>
      </thead>
      <tbody>
        <tr className="dark:bg-gray-900">
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1. Website (submit only the URL)</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">3</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">—</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">url1.txt</td>
        </tr>
        <tr className="bg-gray-50 dark:bg-gray-800">
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2. Requirements</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">20</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1 + 3</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Req1.pdf</td>
        </tr>
        <tr className="dark:bg-gray-900">
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">3. Architecture</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">22</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">6</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Arch1.pdf</td>
        </tr>
        <tr className="bg-gray-50 dark:bg-gray-800">
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">4. Method selection and planning</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">10</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2 + 1</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Plan1.pdf</td>
        </tr>
        <tr className="dark:bg-gray-900">
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">5. Risk assessment and mitigation</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">10</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1 + 3</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Risk1.pdf</td>
        </tr>
        <tr className="bg-gray-50 dark:bg-gray-800">
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">6. Implementation</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">25</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1</td>
          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Impl1.pdf + Code + Executable JAR</td>
        </tr>
        </tbody>
    </table>
  </div>
</section>

<section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">
    Website requirements <span className="text-gray-600 dark:text-gray-400">[3 marks]</span>
  </h2>
  <ol className="list-decimal pl-6 space-y-2">
    <li>The submitted URL must link to the website that is the "public face" of your team's project, and will be updated as you proceed.</li>
    <li>The website must include links to all the PDF documents listed in Table 1, to the executable JAR of your game, and to the version control repository of your team's code in a clear and accessible way.</li>
    <li>The "management" and other teams can use the website at any time after the submission deadline to access the material above.</li>
    <li>In this deliverable, it is the website structure that is marked. You will be penalised if material is not easily locatable and accessible.</li>
  </ol>
</section>
          </section>

          <footer className="mt-16 pb-8 flex justify-center items-center space-x-2">
            <a 
              href="https://github.com/l-hanson-dev/ENG1-UniSim"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
              aria-label="View source on GitHub"
            >
              <img 
                src="/icons/GitHub-Mark-32px.png" 
                alt="GitHub" 
                className="w-8 h-8 dark:invert"
              />
              <span>View source on GitHub</span>
            </a>
          </footer>

          <Outlet />
        </div>
      </ClientOnly>
    </div>
  );
}
