/**
 * ContentCard Component
 * White card container with shadow for main content sections
 */
export default function ContentCard({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg p-8 mb-8 shadow-md ${className}`}>
      {children}
    </div>
  );
}
