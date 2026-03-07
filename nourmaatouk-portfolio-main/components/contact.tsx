"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=nourmaatouk88@gmail.com'
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">CONTACT</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Two Cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {/* Left Card - Profile */}
          <Card className="border-2 border-gray-900 rounded-2xl p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Nour Maatouk</h3>
              <p className="text-sm text-gray-600 mb-8">Computer Science Engineering Student | AI & ML Enthusiast</p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/nourmaatouk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nour--maatouk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <button
                  onClick={handleEmailClick}
                  className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Right Card - Contact Info */}
          <Card className="border-2 border-gray-900 rounded-2xl p-8">
            <CardContent className="p-0 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sousse, Tunisia</p>
                  <p className="text-sm text-gray-600">École Polytechnique de Sousse</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <button 
                    onClick={handleEmailClick}
                    className="font-semibold text-gray-900 hover:text-blue-600 transition-colors text-left"
                  >
                    nourmaatouk88@gmail.com
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <a 
                    href="tel:+21694281444"
                    className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    (+216) 94 281 444
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-300 pt-8 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm text-gray-900 mb-1">
            © Copyright <strong>Nour Maatouk</strong>. All Rights Reserved
          </p>
          <p className="text-xs text-gray-600">
            Designed by <a href="#" className="text-blue-600 hover:underline">Nour Maatouk</a>
          </p>
        </div>
      </footer>
    </section>
  )
}
