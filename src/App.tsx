import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
// Using React.lazy for ThemeToggler to avoid import issues
import { lazy, Suspense } from "react";
const ThemeToggler = lazy(() => import("./components/ui/ThemeToggler"));

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeToggler />
        </Suspense>
        <Header />

        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Blog />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
