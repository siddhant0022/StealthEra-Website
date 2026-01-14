import { useState } from 'react'

function KeyFeatures() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      number: '01',
      title: 'Simple wearable for everyday safety',
      description: 'Comfortable, dignified, and easy to wear. No apps. No learning curve.',
    },
    {
      number: '02',
      title: 'Always connected. Always monitoring.',
      description: 'Description for tab 2',
    },
    {
      number: '03',
      title: 'Peace of mind for families & caregivers',
      description: 'Description for tab 3',
    },
  ]

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center animate-fade-in">
          THIS IS THE MOST IMPORTANT SECTION
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start lg:items-center">
          {/* Tabs */}
          <div className="w-full lg:w-1/3 space-y-4">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer pb-4 transition-all duration-300 ${
                  activeTab === index
                    ? 'border-b-2 border-blue-600'
                    : 'border-b-2 border-transparent hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl font-bold text-gray-400">{tab.number}</span>
                  <div className="flex-1">
                    <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                      activeTab === index ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {tab.title}
                    </h3>
                    {activeTab === index && (
                      <p className="text-gray-600 mt-2 text-sm sm:text-base animate-fade-in">{tab.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-2/3">
            <img
              src="/images/impsection.png"
              alt="Key Features"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            {activeTab === 0 && (
              <div className="mt-4 animate-fade-in">
                <p className="text-blue-600 font-semibold text-base sm:text-lg">
                  Simple wearable for everyday safety
                </p>
                <p className="text-gray-700 mt-2 text-sm sm:text-base">
                  Comfortable, dignified, and easy to wear. No apps. No learning curve.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures