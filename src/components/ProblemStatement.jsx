function ProblemStatement() {
  const problems = [
    "Falls are often detected too late",
    "Wandering can go unnoticed for hours",
    "Health deterioration happens silently",
    "Smartphones are not reliable for seniors"
  ]

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p className="text-gray-700 text-center text-sm sm:text-base font-medium">{problem}</p>
            </div>
          ))}
        </div>
        <div className="text-center animate-fade-in-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 px-4">
            Families need visibility. Seniors need independence.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement