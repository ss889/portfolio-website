import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-xl tracking-tighter flex items-center gap-2">
            <span className="text-primary-600 font-bold">SABER</span>
          </Link>
          <div className="flex gap-6">
            <Link href="/projects" className="font-mono hover:text-primary-600 transition-colors">
              Projects
            </Link>
            <Link href="/about" className="font-mono hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="font-mono hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto space-y-12 pt-28 px-6">
        {/* Personal Story Section */}
        <section className="space-y-6">
          <div className="inline-block mb-2 px-3 py-1 bg-primary-500/10 text-primary-700 rounded-full">
            <span className="font-mono text-sm">MY STORY</span>
          </div>
          <h1 className="font-mono text-4xl md:text-5xl text-gradient-brand font-bold">Breaking Norms With<br />User-Centered Design</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-4">
            <div className="md:col-span-2 space-y-4">
              <p className="text-lg text-medium-contrast">
                I'm Saber, a developer passionate about challenging conventional approaches to create exceptional user experiences. My journey in web development began with a simple question: <span className="italic">"Why do so many digital experiences feel frustrating?"</span>
              </p>
              <p className="text-medium-contrast">
                This curiosity led me to focus on user-centered design principles that break away from traditional development patterns. I believe technology should adapt to people, not the other way around.
              </p>
              <p className="text-medium-contrast">
                As a first-generation college student, I'm driven to create a better future not only for myself but for others like me. This motivation pushes me to develop solutions that are accessible, inclusive, and truly impactful.
              </p>
              <p className="text-medium-contrast">
                Through my projects and research, I've developed a keen understanding of how to transform complex requirements into intuitive interfaces that users genuinely enjoy. I'm dedicated to creating digital experiences that feel natural, accessible, and even delightful.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary-900/10 to-accent-900/5 rounded-xl border border-primary-200 dark:border-primary-900 p-6 space-y-4">
              <h3 className="font-mono text-xl font-semibold">My Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span>Challenge assumptions about how interfaces "should" work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span>Conduct thorough user research to understand real needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span>Create solutions that prioritize clarity and simplicity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span>Continuously test and refine based on user feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <Card className="border border-primary-200 dark:border-primary-900 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-950/30 dark:to-transparent">
            <CardTitle className="font-mono tracking-tight text-primary-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div className="font-semibold text-lg">NEW JERSEY INSTITUTE OF TECHNOLOGY</div>
                <div className="text-sm text-primary-600 font-medium">Newark, NJ</div>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div>B.S. | Web and Information Systems</div>
                <div className="text-sm font-medium">GPA: 3.1</div>
              </div>
              <div className="text-sm text-medium-contrast">Graduation: Fall 2025</div>
              <div className="mt-4 pt-4 border-t border-primary-100 dark:border-primary-800">
                <div className="font-semibold mb-2">Relevant Coursework:</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 text-sm">•</span>
                    <span>Discovering User Needs for UX</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 text-sm">•</span>
                    <span>Intro to Information Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 text-sm">•</span>
                    <span>Advanced Website Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 text-sm">•</span>
                    <span>Database Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section Preview */}
        <section className="space-y-6">
          <h2 className="font-mono text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-primary-200 dark:border-primary-900 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">MyWebClass.org Marketing Site</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-contrast text-sm mb-4">Designed and developed a responsive marketing website using HTML, CSS, React, and JavaScript, enhancing user engagement.</p>
                <div className="flex justify-end">
                  <Link href="https://ss889.github.io/Accidents-Car-Insurance/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-sm">View Project</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-primary-200 dark:border-primary-900 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Alchemist Chatbot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-contrast text-sm mb-4">Developed an interactive AI chatbot that provides personalized responses and assistance. The chatbot features a user-friendly interface designed for intuitive conversations.</p>
                <div className="flex justify-end">
                  <Link href="https://ss889.github.io/alchemist-chatbot/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-sm">View Project</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-primary-200 dark:border-primary-900 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">App Design Prototype</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-contrast text-sm mb-4">Created a high-fidelity UI/UX prototype in Figma, showcasing my design skills and attention to user experience principles.</p>
                <div className="flex justify-end">
                  <Link href="https://www.figma.com/design/xiTeGWxeMepc4sPhVHCy8g/GROUP-2?node-id=0-1&p=f&t=JDS8o5KgTHvZ0L6m-0" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-sm">View Prototype</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center pt-4">
            <Link href="/projects">
              <Button className="bg-gradient-brand hover:opacity-90">View All Projects</Button>
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <Card className="border border-primary-200 dark:border-primary-900 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-secondary-50 to-transparent dark:from-secondary-950/30 dark:to-transparent">
            <CardTitle className="font-mono tracking-tight text-secondary-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z"/><path d="M22 12h-8v10h8V12Z"/><path d="M12 12H2v10h10V12Z"/><path d="M22 2h-8v8h8V2Z"/></svg>
              Skills & Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold">DevOps & Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>Docker</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>Git, GitHub</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>CI/CD Pipelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>Agile</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold">Programming & Design</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>HTML, CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>React, JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>Figma</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>Canva</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold">Productivity</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>Microsoft Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>Visio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>Excel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary-600 text-sm">•</span>
                    <span>Notepad++</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values/Mission Statement */}
        <Card className="border border-accent-200 dark:border-accent-900 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-accent-50 to-transparent dark:from-accent-950/30 dark:to-transparent">
            <CardTitle className="font-mono tracking-tight text-accent-700 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              Values & Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-medium-contrast">
                My mission is to create digital experiences that challenge conventional design patterns while remaining intuitive and accessible to all users. I believe that the best technology adapts to human needs rather than forcing humans to adapt to technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="bg-accent-50/50 dark:bg-accent-950/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-accent-700">What I Value</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 font-bold mt-1">•</span>
                      <span>User-centered design that prioritizes real human needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 font-bold mt-1">•</span>
                      <span>Innovative approaches that question established patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 font-bold mt-1">•</span>
                      <span>Accessibility and inclusivity in all digital experiences</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-accent-50/50 dark:bg-accent-950/20 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-accent-700">My Commitment</h3>
                  <p className="text-medium-contrast">
                    I'm committed to continuous learning and growth, always seeking to expand my skills and understanding of user needs. I approach each project with curiosity, empathy, and a determination to create solutions that truly make a difference in how people interact with technology.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}