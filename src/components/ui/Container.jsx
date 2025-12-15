/**
 * Container Component
 * Main content container with max-width and padding
 */
export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 py-8 ${className}`}>
      {children}
    </div>
  );
}
