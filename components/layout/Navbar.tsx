"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navlinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 20);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            scrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-lg' 
              : 'bg-transparent'
          )}>
            <div className="container-custom">
              <div className="flex items-center justify-between h-20">
                <Link href="/" className="flex items-center space-x-3">
                  <Image
                    src="/images/nbbc.png"
                    alt="Noonkopir Bible Baptist Church Logo"
                    width={50}
                    height={50}
                    className="object-cover rounded-lg"
                  />
                </Link>
      
                <div className="hidden lg:flex items-center space-x-8">
                  {navlinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'text-base font-medium transition-colors hover:text-green-100',
                        pathname === item.href
                          ? 'text-green-100'
                          : scrolled
                          ? 'text-foreground'
                          : 'text-white hover:text-accent'
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
      
                <button
                  onClick={toggleMenu}
                  className="lg:hidden p-2 rounded-lg hover:bg-green-100/10 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className={cn('h-6 w-6', scrolled ? 'text-foreground' : 'text-white')} />
                  ) : (
                    <Menu className={cn('h-6 w-6', scrolled ? 'text-foreground' : 'text-white')} />
                  )}
                </button>
              </div>
      
              {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
                  <div className="py-4">
                    {navlinks.map((item) => (
                      <Link 
                        key={item.href}
                        href={item.href}
                        onClick={toggleMenu}
                        className={cn(
                          'block px-6 py-3 text-base font-medium transition-colors hover:bg-green-100/5 hover:text-green-100',
                          pathname === item.href
                            ? 'text-green-100 bg-green-100/5'
                            : 'text-foreground'
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
    );
}