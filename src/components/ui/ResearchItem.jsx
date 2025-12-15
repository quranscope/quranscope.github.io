/**
 * ResearchItem Component
 * Container for comparative research items with bordered style
 */
export default function ResearchItem({ title, children }) {
  return (
    <div className="bg-gray-50 border-l-4 border-primary-500 p-6 my-6 rounded-md">
      {title && (
        <h3 className="text-gray-800 text-xl font-semibold mb-3">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
