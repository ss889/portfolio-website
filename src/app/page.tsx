import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Enhanced for Outlaw Archetype */}
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

      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto pt-8">
          <div className="inline-block mb-4 px-3 py-1 bg-accent-500/10 text-accent-700 rounded-full">
            <span className="font-mono text-sm">INNOVATIVE WEB EXPERIENCES</span>
          </div>
          <h1 className="font-mono tracking-tighter text-gradient-brand text-5xl md:text-6xl">
            Breaking Norms.<br />Creating User-Centered Solutions.
          </h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            I'm a developer passionate about challenging conventional approaches to create exceptional user experiences. I build innovative solutions that transform how people interact with technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="text-base bg-gradient-brand hover:opacity-90">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" className="text-base border-primary-600 text-primary-700 hover:bg-primary-50">
              Learn About Me
            </Button>
          </div>
        </div>

        {/* Authority Principle Section */}
        <div className="relative py-12 px-6 bg-gradient-to-r from-primary-900/10 to-accent-900/5 rounded-xl border border-primary-200 dark:border-primary-900">
          <div className="absolute -top-5 left-6">
            <span className="font-mono text-sm bg-background px-3 py-1 border border-primary-200 dark:border-primary-800 rounded-full text-primary-700">
              AUTHORITY
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-mono tracking-tighter text-3xl md:text-4xl mb-4">Backed by a Decade of <span className="text-gradient-brand">Disruption</span></h2>
              <p className="text-medium-contrast mb-6">
                With over 10 years challenging tech conventions and 50+ successful rebellions against outdated systems, I bring battle-tested expertise to every project.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Former Lead Architect at Fortune 500 tech disruptors</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Recognized industry speaker on revolutionary development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Published author on breaking technical paradigms</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-lg border border-primary-200 dark:border-primary-800 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-primary-600 mb-2">10+</span>
                <span className="text-sm text-medium-contrast">Years Breaking Conventions</span>
              </div>
              <div className="bg-background p-4 rounded-lg border border-primary-200 dark:border-primary-800 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-accent-600 mb-2">50+</span>
                <span className="text-sm text-medium-contrast">Digital Rebellions Led</span>
              </div>
              <div className="bg-background p-4 rounded-lg border border-primary-200 dark:border-primary-800 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-secondary-600 mb-2">95%</span>
                <span className="text-sm text-medium-contrast">Client Liberation Rate</span>
              </div>
              <div className="bg-background p-4 rounded-lg border border-primary-200 dark:border-primary-800 flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-primary-600 mb-2">3x</span>
                <span className="text-sm text-medium-contrast">ROI for Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles Section - Outlaw Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card className="border-l-4 border-l-primary-500 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-primary-700">Defiant Innovation</CardTitle>
              <CardDescription>Breaking free from digital chains</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                I don't follow the beaten path. Every project is an opportunity to challenge conventional wisdom and create something that liberates your business from outdated constraints.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary-500 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-secondary-700">Rebellious Execution</CardTitle>
              <CardDescription>Fearless implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                I thrive in the space between what's possible and what's conventional. My work isn't just about building—it's about revolutionizing your digital presence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent-500 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-accent-700">Authentic Impact</CardTitle>
              <CardDescription>Making waves that matter</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                Every line of code is a statement against the status quo. I create solutions that don't just work—they transform businesses and inspire new possibilities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof Section - Cialdini Principle */}
        <div className="relative py-12 px-6 bg-gradient-to-r from-accent-900/10 to-primary-900/5 rounded-xl border border-accent-200 dark:border-accent-900">
          <div className="absolute -top-5 left-6">
            <span className="font-mono text-sm bg-background px-3 py-1 border border-accent-200 dark:border-accent-800 rounded-full text-accent-700">
              SOCIAL PROOF
            </span>
          </div>
          <h2 className="font-mono tracking-tighter text-3xl md:text-4xl mb-8 text-center">Fellow <span className="text-gradient-brand">Rebels</span> Who Joined The Cause</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg border border-accent-200 dark:border-accent-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-primary-700">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">Jamie Diaz</h4>
                  <p className="text-sm text-medium-contrast">Fintech Disruptor</p>
                </div>
              </div>
              <p className="italic text-medium-contrast">"Working with this digital outlaw transformed our outdated systems into a revolutionary platform. Our competitors are still trying to catch up."</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-accent-200 dark:border-accent-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-secondary-700">SR</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Reynolds</h4>
                  <p className="text-sm text-medium-contrast">E-commerce Rebel</p>
                </div>
              </div>
              <p className="italic text-medium-contrast">"Our sales increased 215% after implementing the rebellious UX strategy. This isn't just development—it's digital liberation."</p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-accent-200 dark:border-accent-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-accent-700">MK</span>
                </div>
                <div>
                  <h4 className="font-bold">Marcus Kim</h4>
                  <p className="text-sm text-medium-contrast">SaaS Revolutionary</p>
                </div>
              </div>
              <p className="italic text-medium-contrast">"The conventional approach was killing our innovation. This outlaw developer broke us free from legacy thinking and outdated patterns."</p>
            </div>
          </div>
        </div>

        {/* Scarcity Section - Cialdini Principle */}
        <div className="relative py-12 px-6 bg-gradient-to-r from-secondary-900/10 to-primary-900/5 rounded-xl border border-secondary-200 dark:border-secondary-900">
          <div className="absolute -top-5 left-6">
            <span className="font-mono text-sm bg-background px-3 py-1 border border-secondary-200 dark:border-secondary-800 rounded-full text-secondary-700">
              SCARCITY
            </span>
          </div>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="font-mono tracking-tighter text-3xl md:text-4xl">Limited Rebellion Slots Available</h2>
            <p className="text-medium-contrast">
              I only take on <span className="font-bold text-secondary-700">3 major projects per quarter</span> to ensure each rebellion receives my full attention and revolutionary approach. Currently accepting projects for Q3 2025.
            </p>
            <div className="bg-background p-4 rounded-lg border border-secondary-200 dark:border-secondary-800 inline-block">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-secondary-700">2</span>
                  <span className="text-xs text-medium-contrast">SLOTS LEFT</span>
                </div>
                <div className="h-12 w-px bg-secondary-200 dark:bg-secondary-800"></div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-secondary-700">14</span>
                  <span className="text-xs text-medium-contrast">DAYS REMAINING</span>
                </div>
              </div>
            </div>
            <Button size="lg" className="text-base bg-gradient-innovation hover:opacity-90 mt-4">
              Claim Your Rebellion Slot
            </Button>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center space-y-8 py-16 bg-gradient-to-r from-primary-900/20 to-accent-900/20 rounded-xl px-6">
          <h2 className="font-mono tracking-tighter text-gradient-brand max-w-3xl mx-auto text-3xl md:text-4xl">
            Ready to Break Free from Digital Conformity?
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Let's create something that challenges the norm, breaks the chains of conventional development, and sets new standards in your digital world.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-base bg-gradient-brand hover:opacity-90">
              Start Your Rebellion
            </Button>
            <Button variant="outline" size="lg" className="text-base border-primary-600 text-primary-700 hover:bg-primary-50 hover:bg-opacity-20">
              View Past Rebellions
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
