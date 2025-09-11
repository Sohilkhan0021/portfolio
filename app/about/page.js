import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
  
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link className="p-4 flex items-center space-x-2" href="/">
            <img
              src="/sohil-profile-pic.png"
              alt="Sohil Khan Profile Picture"
              className="w-10 h-10 rounded-full object-cover"
            />
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
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-20 lg:py-24 ml-12">
          <div className=" px-4 md:px-6 w-[85vw]">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 text-center md:text-left">
              <div className="flex-shrink-0">
                <img
                  src="/sohil-profile-pic2.png"
                  alt="Sohil Khan"
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover shadow-lg mx-auto md:mx-0"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-blue-600">
                  MERN STACK DEVELOPER
                </h1>
                <p className="mx-auto md:mx-0 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Hi, I'm <span className="font-semibold text-blue-600">SOHIL KHAN</span>, an aspiring MERN Stack Developer with a passion for
                  building robust, scalable, and user-friendly web applications.  
                  I thrive on creating dynamic and responsive solutions and am seeking opportunities to
                  leverage my expertise and grow within the web development industry.
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <Link href="https://github.com/Sohilkhan0021" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>

                  <Link href="https://www.linkedin.com/in/sohil-khan-14b071227/overlay/contact-info/" target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>

                  <Link href="mailto:sohil0021khan@gmail.com">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8 text-center">
            Education
          </h2>
          <div className="grid gap-6 md:grid-cols-2 mx-auto w-[85vw] flex">
        
            <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-blue-600">B.Tech in Computer Science Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300">Engineering College Bikaner | Bikaner Technical University (2021 - 2025)</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">CGPA: 8.3</p>
              <Link href="https://drive.google.com/file/d/11o3hk6WdN0LX0-9s_qHxjm9MSi-hb1kh/view?usp=sharing" target="_blank" className="text-primary underline mt-2 inline-block">View Certificate</Link>
            </div>
          
            <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-blue-600">Senior Secondary (12th)</h3>
              <p className="text-gray-600 dark:text-gray-300">Govt. Sr. Sec. School, Chandoli, Alwar (Rajasthan)</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Percentage: 84%</p>
            </div>
       
            <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-blue-600">Secondary (10th)</h3>
              <p className="text-gray-600 dark:text-gray-300">Govt. Sr. Sec. School, Chandoli, Alwar (Rajasthan)</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Percentage: 77.50%</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8 text-center">
            Certificates
          </h2>
          <div className="grid gap-6 md:grid-cols-2 mx-auto w-[85vw]">
            <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-blue-600">Full Stack Development Certificate</h3>
              <p className="text-gray-600 dark:text-gray-300">GeeksforGeeks</p>
              <Link href="https://drive.google.com/file/d/1KAyCmRA0eG0nEgoMKt4JPt-xFahpv2Ut/view?usp=sharing" target="_blank" className="text-primary underline mt-2 inline-block">View Certificate</Link>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-blue-600">DSA in C++ Certificate</h3>
              <p className="text-gray-600 dark:text-gray-300">APNA College</p>
              <Link href="https://drive.google.com/file/d/11o3hk6WdN0LX0-9s_qHxjm9MSi-hb1kh/view?usp=sharing" target="_blank" className="text-primary underline mt-2 inline-block">View Certificate</Link>
            </div>
          </div>
        </section>
      </main>

       <footer className="border-t bg-muted/40 mt-10 ">
        <div className="container flex flex-col gap-4 sm:flex-row py-8 w-full items-center px-4 md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 ">© 2024 SOHIL KHAN. All rights reserved.</p>
        </div>
      </footer>
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