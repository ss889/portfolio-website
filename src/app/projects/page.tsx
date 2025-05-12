import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Project Sandbox",
  description: "A collection of my projects and experiments",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <h1 className="font-mono tracking-tighter text-gradient-brand">
            Project Sandbox
          </h1>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            A collection of innovative projects and experiments that push the boundaries of what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          <Card className="border-l-4 border-l-primary-500 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-primary-700">Accidents Car Insurance</CardTitle>
              <CardDescription>Data visualization project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast mb-2">
                An interactive data visualization project exploring car insurance accident data. Features dynamic charts and user-friendly interface for data exploration.
              </p>
              <a
                href="https://ss889.github.io/Accidents-Car-Insurance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline hover:text-primary-900 font-mono"
              >
                View Project
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-secondary-500 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-secondary-700">Alchemist Chatbot</CardTitle>
              <CardDescription>Interactive AI assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast mb-2">
                Developed an interactive AI chatbot that provides personalized responses and assistance. Features a user-friendly interface designed for intuitive conversations.
              </p>
              <a
                href="https://ss889.github.io/alchemist-chatbot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-700 underline hover:text-secondary-900 font-mono"
              >
                View Project
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-accent-500 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="font-mono tracking-tight text-accent-700">App Design Prototype</CardTitle>
              <CardDescription>Figma UI/UX design</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast mb-2">
                Created a high-fidelity UI/UX prototype in Figma, showcasing my design skills and attention to user experience principles.
              </p>
              <a
                href="https://www.figma.com/design/xiTeGWxeMepc4sPhVHCy8g/GROUP-2?node-id=0-1&p=f&t=JDS8o5KgTHvZ0L6m-0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-700 underline hover:text-accent-900 font-mono"
              >
                View Prototype
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}