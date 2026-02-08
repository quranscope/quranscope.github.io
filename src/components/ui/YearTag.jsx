export default function YearTag({ children, className = '' }) {
  return (
    <span className={`inline-block bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm mb-4 font-bold ${className}`}>
      {children}
    </span>
  );
}
