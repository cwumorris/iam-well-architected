import { Phone, MessageCircle, MapPin, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-base font-semibold">Morrison Identity & Cloud Security</h3>
            <p className="text-sm text-muted-foreground">Remote & In-Person Consulting | Global Clients</p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>425 520 0880</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <a
                  href="https://wa.me/6147027069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp: 614 702 7069
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:advisory@emidentity.com" className="hover:text-foreground transition-colors">
                  advisory@emidentity.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Seattle, WA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Identity & Access Review</li>
              <li>Zero Trust Architecture</li>
              <li>Fractional Security</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold">Connect</h3>
            <a
              href="https://www.linkedin.com/in/emmanuel-m-0aa89916b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© Morrison Identity & Cloud Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
