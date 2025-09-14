function Features() {
  return (
    <div className="min-h-screen bg-green-50 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-green-900 mb-12 drop-shadow-md">
        Features
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Feature Card 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Weather Forecast</h2>
          <p className="text-gray-700">
            Get accurate weather predictions for your crops and plan accordingly.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Disease Detection</h2>
          <p className="text-gray-700">
            Upload crop images and detect diseases automatically with AI.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Voice Assistant</h2>
          <p className="text-gray-700">
            Interact with the system using voice commands to manage your farm.
          </p>
        </div>

        {/* Feature Card 4 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Price Predictions</h2>
          <p className="text-gray-700">
            Predict crop market prices based on trends and historical data.
          </p>
        </div>

        {/* Feature Card 5 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Soil Analysis</h2>
          <p className="text-gray-700">
            Analyze soil quality and get recommendations for better crop yield.
          </p>
        </div>

        {/* Feature Card 6 */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Fertilizer Recommendations</h2>
          <p className="text-gray-700">
            Receive AI-powered fertilizer suggestions to optimize crop health.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
