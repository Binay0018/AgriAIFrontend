function Explore() {
  return (
    <div className="min-h-screen bg-green-50 p-10 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-5xl font-bold text-green-900 mb-12 drop-shadow-md">
        Explore
      </h1>

      {/* Grid of Explore Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Crop Recommendations */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Crop Recommendations</h2>
          <p className="text-gray-700">
            Discover the best crops to plant based on season, soil type, and region.
          </p>
        </div>

        {/* Market Prices */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Market Prices & Trends</h2>
          <p className="text-gray-700">
            Check current and historical crop prices with trend visualizations.
          </p>
        </div>

        {/* Tutorials */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Tutorials & Guides</h2>
          <p className="text-gray-700">
            Step-by-step guides on planting, harvesting, pest control, and fertilizers.
          </p>
        </div>

        {/* Agricultural News */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Agricultural News</h2>
          <p className="text-gray-700">
            Stay updated with the latest news, schemes, and farming tips.
          </p>
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">AI Insights</h2>
          <p className="text-gray-700">
            Get predictive insights on planting schedules, yield, and disease alerts.
          </p>
        </div>

        {/* Farm Tools */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Farm Tools & Equipment</h2>
          <p className="text-gray-700">
            Explore recommended tools and equipment for efficient farming.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Explore;
