import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#fff7f1] py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src="/SheCan.png"
                alt="She Can Foundation logo"
                fill
                className="object-cover"
                sizes="48px"
              />
            </span>
            <p className="text-lg font-semibold text-stone-900">
              She Can Foundation
            </p>
          </div>
          <p className="max-w-sm text-sm text-stone-600">
            Empowering women and communities through awareness, opportunities,
            advocacy, and social impact initiatives.
          </p>
          <a
            href="mailto:president@shecanfoundation.org"
            className="text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            president@shecanfoundation.org
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-stone-800">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li>
                <a className="hover:text-stone-900" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-stone-900" href="#programs">
                  Programs
                </a>
              </li>
              <li>
                <a className="hover:text-stone-900" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-800">Social</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li>
                <a
                  className="hover:text-stone-900"
                  href="https://www.instagram.com/_shecanfoundation_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="hover:text-stone-900"
                  href="https://www.linkedin.com/company/shecanfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl px-5 text-xs text-stone-500 md:px-8">
        &copy; {new Date().getFullYear()} She Can Foundation. All rights reserved.
      </div>
    </footer>
  );
}
