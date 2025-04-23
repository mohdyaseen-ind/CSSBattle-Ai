const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 shadow-lg transition-transform transform hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );

export default FeatureCard;