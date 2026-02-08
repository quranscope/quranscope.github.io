export default function TimelineCard({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg p-8 mb-8 shadow-md ${className}`}>
      {children}
    </div>
  );
}
