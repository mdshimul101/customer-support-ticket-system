import bgPattern from "../assets/vector1.png";

const StatusCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* In Progress Card */}
        <div
          className="relative flex justify-between items-center rounded-2xl overflow-hidden 
  text-white p-10 bg-gradient-to-r from-purple-600 to-indigo-500"
        >
          {/* Left Background Pattern */}
          <img
            src={bgPattern}
            alt="pattern"
            className="absolute left-0 top-0 h-full opacity-60"
          />

          {/* Right Background Pattern */}
          <img
            src={bgPattern}
            alt="pattern"
            className="absolute right-0 top-0 h-full opacity-60 scale-x-[-1]"
          />

          {/* Content */}
          <div className="relative z-10 text-center w-full">
            <h3 className="text-lg font-medium mb-2">In-Progress</h3>
            <h1 className="text-6xl font-bold">0</h1>
          </div>
        </div>

        {/* Resolved Card */}
        <div
          className="relative flex justify-between items-center rounded-2xl overflow-hidden 
  text-white p-10 bg-gradient-to-r from-green-500 to-teal-600"
        >
          {/* Left Background Pattern */}
          <img
            src={bgPattern}
            alt="pattern"
            className="absolute left-0 top-0 h-full opacity-60"
          />

          {/* Content */}
          <div className="relative z-10 text-center w-full">
            <h3 className="text-lg font-medium mb-2">Resolved</h3>
            <h1 className="text-6xl font-bold">0</h1>
          </div>

          {/* Right Background Pattern */}
          <img
            src={bgPattern}
            alt="pattern"
            className="absolute right-0 top-0 h-full opacity-60 scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default StatusCards;
