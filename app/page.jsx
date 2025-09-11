import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import BlogCard from "./components/blog-card"
import TechStack from "./components/tech-stack"
import MobileMenu from "./components/mobile-menu"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="p-4 flex items-center space-x-2" href="/">
            <img src="/sohil-profile-pic.png" alt="Sohil Khan Profile Picture" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-bold text-xl text-blue-600">SOHIL KHAN</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/about" className="transition-colors hover:text-primary">About</Link>
            <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
            <Link href="#experience" className="transition-colors hover:text-primary">Experience</Link>
            <Link href="#tech" className="transition-colors hover:text-primary">Tech Stack</Link>
            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="hidden md:inline-flex">
              <a
                href="https://drive.google.com/file/d/1EA_OG_VBrYy4O-RS4r5VejTK7Npm6WOh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        {/* About */}
        <section id="about" className="py-3 md:py-6 lg:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-blue-600">MERN STACK DEVELOPER</h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Hi, I'm SOHIL KHAN, an aspiring MERN Stack Developer with a passion for building robust, scalable, and user-friendly web applications. 
                  I thrive on creating dynamic and responsive solutions and am seeking opportunities to leverage my expertise and grow within the web development industry.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link href="https://github.com/Sohilkhan0021" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/sohil-khan-14b071227/overlay/contact-info/" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:sohil0021khan@gmail.com">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-3 md:py-6 lg:py-12">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard title="Marriage Counselor Gurgaon Website" description="A fully responsive and SEO-optimized WordPress website developed for a professional marriage counseling service. The site includes custom layouts, optimized performance, and on-page SEO with a 100/100 score in Lighthouse audits." image="/projectimg/marriage.jpg" link="https://www.marriagecounselorgurgaon.com/" tags={["WordPress", "Responsive Design", "On-Page SEO", "Custom Theme"]}/>
              <ProjectCard title="MindSoulBridge Website" description="A responsive and SEO-friendly WordPress website created for a mental health and therapy services provider. Built with user-focused UI/UX, optimized loading performance, and strong on-page SEO implementation." image="/projectimg/mind.jpg" link="https://www.mindsoulbridge.com/" tags={["WordPress", "Responsive Design", "SEO", "UI/UX"]}/>
              <ProjectCard title="RENcomm Corporate Website" description="Developed a professional WordPress website for RENcomm, showcasing their business services with mobile responsiveness, modern layout, and on-page SEO best practices for visibility and performance." image="/projectimg/rencom.jpg" link="https://rencomm.net/" tags={["WordPress", "Corporate Website", "Responsive Design", "SEO"]}/>
              <ProjectCard title="LiveCure24 Healthcare Website" description="Developed a responsive healthcare service platform using Laravel PHP. Integrated appointment booking, dynamic service management, and implemented on-page SEO to boost online visibility." image="/projectimg/livecure.jpg" link="https://www.livecure24.com/" tags={["Laravel", "PHP", "Healthcare", "Responsive Design", "SEO"]}/>
              <ProjectCard title="CorpPlace Business Solutions Website" description="Designed and developed a corporate solutions platform using Laravel PHP and Tailwind CSS. Delivered a clean, fully responsive UI with SEO optimization and modular architecture." image="/projectimg/corpplace.jpg" link="https://corpplace.com/" tags={["Laravel", "PHP", "Tailwind CSS", "Corporate", "Responsive Design"]}/>
              <ProjectCard title="Arabius Language Learning Platform" description="Built a responsive Arabic language learning website using WordPress. Integrated live tutoring features, placement tests, and ensured fast loading speeds with an intuitive user experience." image="/projectimg/arabius.jpg" link="https://arabius.com/" tags={["WordPress", "EdTech", "Live Tutoring", "Responsive Design", "Performance"]}/>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-3 md:py-6 lg:py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-600 mb-12">Work Experience</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 text-center">
                <h3 className="text-xl font-semibold text-blue-600">Frontend Developer Intern</h3>
                <p className="text-gray-600 dark:text-gray-300">AMITKK Digital Solutions | May 2025 – Present</p>
                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  Working as a Frontend Developer focusing on building dynamic, scalable, and responsive web applications.  
                  The projects I have contributed to are listed in the Projects section above.
                </p>
              </div>

            
              <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 text-center">
                <h3 className="text-xl font-semibold text-blue-600">UI/UX Intern</h3>
                <p className="text-gray-600 dark:text-gray-300">Oasis Infobyte | Nov 2024 – Dec 2024</p>
                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  Worked on creating user-friendly UI/UX designs and implemented responsive layouts.  
                  Focused on enhancing usability and improving visual design for multiple web projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="py-6 md:py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-blue-600">Latest Blog Posts</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <BlogCard title="The Future of Web Development: WASM and Beyond" excerpt="Exploring how WebAssembly is changing the landscape of web development and what it means for the future of the industry." date="2024-03-01" slug="future-of-web-development" />
              <BlogCard title="Mastering React Hooks: Advanced Patterns" excerpt="Dive deep into advanced React Hook patterns and learn how to write more efficient and maintainable React components." date="2024-02-15" slug="mastering-react-hooks" />
              <BlogCard title="Building Scalable Microservices with Node.js" excerpt="A comprehensive guide to designing and implementing scalable microservices architecture using Node.js and Docker." date="2024-01-30" slug="scalable-microservices-nodejs" />
              <BlogCard title="The Rise of JAMstack: Revolutionizing Web Development" excerpt="Discover how JAMstack architecture is changing the way we build and deploy web applications for better performance and security." date="2024-01-15" slug="rise-of-jamstack" />
            </div>
          </div>
        </section>

        
        <section id="tech" className="py-3 md:py-6 lg:py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-12 text-center text-blue-600">Tech Stack</h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-3 md:py-6">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-12 text-center text-blue-600">Get in Touch</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

    
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-4 sm:flex-row py-8 w-full items-center px-4 md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 SOHIL KHAN. All rights reserved.</p>
        </div>
      </footer>

      <BackToTopButton />
    </div>
  )
}

function BackToTopButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <a
        href="#"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Back to top</span>
      </a>
    </div>
  )
}
