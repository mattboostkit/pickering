"use client"

import { Mail, Phone, MapPin, Globe, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white py-12 no-print">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              JJL <span className="text-brand-orange">Media</span>
            </h3>
            <p className="text-white/70 mb-4">
              Transforming digital presence for charities and purpose-driven organisations.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 text-white/70">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={16} />
                  <span className="font-medium text-white">Email:</span>
                </div>
                <div className="ml-6 space-y-1">
                  <a
                    href="mailto:nick@jjlmedia.co.uk"
                    className="block hover:text-white transition-colors"
                  >
                    nick@jjlmedia.co.uk
                  </a>
                  <a
                    href="mailto:matt@jjlmedia.co.uk"
                    className="block hover:text-white transition-colors"
                  >
                    matt@jjlmedia.co.uk
                  </a>
                  <a
                    href="mailto:sophie@jjlmedia.co.uk"
                    className="block hover:text-white transition-colors"
                  >
                    sophie@jjlmedia.co.uk
                  </a>
                </div>
              </div>
              <a
                href="tel:+447975876376"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>07975 876376</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Tunbridge Wells, UK</span>
              </div>
              <a
                href="https://jjlmedia.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Globe size={16} />
                <span>jjlmedia.co.uk</span>
              </a>
            </div>
          </div>

          {/* Social & Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://linkedin.com/company/jjlmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/jjlmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-brand-orange font-medium">
              Proposal expires: 30 days from delivery
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} JJL Media. All rights reserved.
            </p>
            <p>
              Prepared with care for Pickering Cancer Drop In Centre | October 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
