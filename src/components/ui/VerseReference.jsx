/**
 * VerseReference Component
 * Small badge for Quran verse references
 */
export default function VerseReference({ children }) {
  return (
    <span className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs m-1">
      {children}
    </span>
  );
}
