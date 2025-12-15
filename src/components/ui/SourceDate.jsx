/**
 * SourceDate Component
 * Badge for displaying source dates
 */
export default function SourceDate({ children }) {
  return (
    <span className="inline-block bg-orange-50 text-orange-700 px-2 py-1 rounded text-xs font-bold">
      {children}
    </span>
  );
}
