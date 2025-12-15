/**
 * StatsGrid Component
 * Grid layout for displaying statistics with numbers and labels
 */
export default function StatsGrid({ stats, title, subtitle }) {
  return (
    <div className="bg-white rounded-lg p-8 mb-8 shadow-md text-center">
      {title && (
        <h2 className="text-primary-500 text-2xl font-bold mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-gray-600 mb-6">{subtitle}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-md border-l-4 border-primary-500"
          >
            <div className="text-3xl font-bold text-accent-purple mb-1">
              {stat.number}
            </div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
