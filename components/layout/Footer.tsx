import { Heart } from "lucide-react";
import Link from "next/link";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto pt-8 md:pt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About This Site</h3>
            <p className="text-sm text-muted-foreground">
              A personal website showcasing my journey, dreams, and the
              wonderful family that supports me every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/#family"
                  className="hover:text-foreground transition-colors"
                >
                  Family Tree
                </Link>
              </li>
              <li>
                <Link
                  href="/#dreams"
                  className="hover:text-foreground transition-colors"
                >
                  My Dreams
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="hover:text-foreground transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Humorous Status */}
          <div>
            <h3 className="text-lg font-semibold mb-3">System Status</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Brain Capacity: Loading...</li>
              <li>Gaming Skills: 110%</li>
              <li>Homework: Error 404</li>
              <li>Motivation: Powered by Chicken meat</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 py-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Mahadi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by
            <Link
              href="https://github.com/Abubokkor98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              Nana
              <GithubIcon className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
