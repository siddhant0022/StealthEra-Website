function PartnerLogos() {
  const logos = [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
    '/images/logo6.png',
    '/images/logo7.png',
    '/images/logo8.png'
  ]

  return (
    <section className="bg-slate-900 py-6 sm:py-8 border-t border-b border-gray-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-around items-center flex-wrap gap-4 sm:gap-8 opacity-60">
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Partner ${index + 1}`} 
              className="h-8 sm:h-10 md:h-12 object-contain  transition-all duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerLogos