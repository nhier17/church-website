import { footerLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const { quickLinks, socialLinks, contactLinks } = footerLinks;
    return (
        <footer className="bg-green-100 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/images/nbbc.png" alt="Logo" width={40} height={40} className="rounded-full" />
              <span className="font-bold text-xl">Noonkopir Bible Baptist Church</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
            A place where faith, hope, and love come together. Join us as we grow in Christ and serve our community.
            </p>
            <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                    return (
                        <a href={link.href} key={index} className="text-gray-300 hover:text-blue-400 transition-colors">
                            <Icon className="h-6 w-6" />
                        </a>
                    )
                })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className="text-primary-foreground/80 hover:text-accent transition-color">
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                    return (
                    <div key={index} className="flex items-start space-x-3">
                        <Icon className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                        <span className="text-primary-foreground/80">
                            {link.title}
                        </span>
                    </div>
                    )
                })}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="ext-primary-foreground/60">
              © {new Date().getFullYear()} Noonkopir Bible Baptist Church. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-light-100">
              <Link href="/privacy" className="hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
        </footer>
    )
}