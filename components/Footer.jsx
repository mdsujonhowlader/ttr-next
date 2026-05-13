import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Send,
  ArrowRight
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Web Development", href: "/services" },
  { name: "Digital Marketing", href: "/digitalmarketing" },
  { name: "SEO Services", href: "/services" },
  { name: "Mobile Apps", href: "/services" },
  { name: "UI/UX Design", href: "/services" },
  { name: "E-commerce", href: "/services" },
];

const socialLinks = [
  { icon: Facebook,  href:"https://facebook.com/thetechresolver", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t  border-gray-600 text-black dark:text-gray-400">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold">The Tech Resolver</span>
            </Link>
            <p className="text-black dark:text-gray-400 text-sm mb-6 leading-relaxed">
              We are a professional software company dedicated to delivering 
              innovative digital solutions that help businesses grow and succeed 
              in the modern world.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-black dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-black dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 text-black dark:text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-sm leading-relaxed">
                 Badda, Dhaka, Bangladesh, 1207<br />
                 
                </p>
              </div>
              <div className="flex items-center gap-3 text-black dark:text-gray-400">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:info@techresolver.com" className="hover:text-primary transition-colors">
                  info@techresolver.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-black dark:text-gray-400">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:+8801234567890" className="hover:text-primary transition-colors">
                  +880 1797-125469
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-medium mb-3">Newsletter</h4>
              <p className="text-black dark:text-gray-400 text-sm mb-3">Subscribe for latest updates.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 outline-0 border dark:bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-primary rounded-r-lg hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} The Tech Resolver. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}