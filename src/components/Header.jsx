import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/bg.png)' }}
      ></div>
      
      {/* Content with overlay */}
      <div className="relative z-10">
        {/* Navigation Bar with Light Gray Background */}
        <nav className="bg-gray-100 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src="/images/StealthEra.png" alt="StealthEra" className="h-8 sm:h-10 transition-transform hover:scale-105" />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex gap-8">
                <a href="#home" className="text-gray-800 hover:text-blue-600 text-base transition-colors duration-200">Home</a>
                <a href="#how-it-works" className="text-gray-800 hover:text-blue-600 text-base transition-colors duration-200">How It Works</a>
                <a href="#testimonials" className="text-gray-800 hover:text-blue-600 text-base transition-colors duration-200">Testimonials</a>
                <a href="#contact" className="text-gray-800 hover:text-blue-600 text-base transition-colors duration-200">Contact</a>
              </div>

              {/* Hamburger Menu Button (Mobile & Tablet) */}
              <button
                onClick={toggleMenu}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-50 relative"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </button>
            </div>

            {/* Mobile/Tablet Menu */}
            <div
              className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? 'max-h-96 opacity-100 mt-4'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                <div className="px-4 space-y-1">
                  <a
                    href="#home"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-800 hover:text-blue-600 hover:bg-gray-50 py-3 px-4 text-base font-medium rounded-md transition-all duration-200"
                  >
                    Home
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-800 hover:text-blue-600 hover:bg-gray-50 py-3 px-4 text-base font-medium rounded-md transition-all duration-200"
                  >
                    How It Works
                  </a>
                  <a
                    href="#testimonials"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-800 hover:text-blue-600 hover:bg-gray-50 py-3 px-4 text-base font-medium rounded-md transition-all duration-200"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-800 hover:text-blue-600 hover:bg-gray-50 py-3 px-4 text-base font-medium rounded-md transition-all duration-200"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Title Section */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-8 sm:mb-12 max-w-4xl mx-auto animate-fade-in">
            Hospital-grade safety & health monitoring for seniors - on the wrist
          </h1>

          {/* Product Images */}
          <div className="flex justify-center items-center gap-0 sm:gap-0 lg:gap-0 mb-8 sm:mb-12 relative py-4 sm:py-8">
            <img 
              src="/images/watch1.png" 
              alt="Watch 1" 
              className="h-32 sm:h-40 md:h-48 lg:h-64 object-contain animate-slide-in-left hover:scale-105 transition-transform duration-300" 
            />
            <img 
              src="/images/watch2.png" 
              alt="Watch 2" 
              className="h-32 sm:h-40 md:h-48 lg:h-64 object-contain animate-slide-in-up hover:scale-110 transition-transform duration-300 z-10" 
            />
            <img 
              src="/images/watch3.png" 
              alt="Watch 3" 
              className="h-32 sm:h-40 md:h-48 lg:h-64 object-contain animate-slide-in-right hover:scale-105 transition-transform duration-300" 
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-16 px-4 animate-fade-in-up">
            <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-blue-700 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
              </svg>
              Order Now
            </button>
            <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-gray-50 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
