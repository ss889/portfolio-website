import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ContactPage() {
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

      <div className="max-w-4xl mx-auto pt-28 px-6 pb-16">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block mb-2 px-3 py-1 bg-primary-500/10 text-primary-700 rounded-full">
            <span className="font-mono text-sm">GET IN TOUCH</span>
          </div>
          <h1 className="font-mono text-4xl md:text-5xl text-gradient-brand font-bold">Let's Create Something<br />Exceptional Together</h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="border border-primary-200 dark:border-primary-900 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-950/30 dark:to-transparent">
                <CardTitle className="font-mono tracking-tight text-primary-700">Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border border-primary-200 dark:border-primary-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-primary-200 dark:border-primary-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-3 py-2 border border-primary-200 dark:border-primary-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-primary-200 dark:border-primary-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-background resize-none"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <div>
                    <Button className="w-full bg-gradient-brand hover:opacity-90">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Professional Information */}
          <div className="space-y-6">
            <Card className="border border-primary-200 dark:border-primary-900 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-accent-50 to-transparent dark:from-accent-950/30 dark:to-transparent">
                <CardTitle className="font-mono tracking-tight text-accent-700">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground">Email</h3>
                  <a 
                    href="mailto:saberahmed7058@gmail.com" 
                    className="flex items-center gap-2 text-primary-700 hover:text-primary-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <span className="text-sm break-all">saberahmed7058@gmail.com</span>
                  </a>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/sadikul-saber/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-primary-700 hover:text-primary-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="text-sm">linkedin.com/in/sadikul-saber</span>
                  </a>
                </div>
                <div className="pt-4 border-t border-primary-100 dark:border-primary-800">
                  <p className="text-sm text-medium-contrast">
                    Based in Newark, New Jersey. Available for remote work and local opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Response Time Card */}
            <Card className="border border-secondary-200 dark:border-secondary-900 shadow-sm bg-gradient-to-r from-secondary-50/50 to-transparent dark:from-secondary-950/30 dark:to-transparent">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary-700"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Quick Response</h3>
                    <p className="text-sm text-medium-contrast">Usually within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary-900/10 to-accent-900/5 rounded-xl border border-primary-200 dark:border-primary-900 p-6 space-y-4">
              <h3 className="font-mono text-xl font-semibold">Ready to Start?</h3>
              <p className="text-sm text-medium-contrast">
                Let's discuss how we can work together to create user-centered experiences that break conventional patterns.
              </p>
              <Button className="w-full bg-gradient-brand hover:opacity-90 mt-2">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
