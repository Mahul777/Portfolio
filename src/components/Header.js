"use client"

import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const sections = ["about", "experience", "projects", "skills", "certificates", "contact"]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#" onClick={() => scrollToSection("home")} className="text-2xl font-bold text-indigo-600">
              AS
            </a>
          </div>
          <div className="hidden lg:flex ml-10 space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-base font-medium text-gray-500 hover:text-gray-900 capitalize"
              >
                {section}
              </button>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full text-left capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

