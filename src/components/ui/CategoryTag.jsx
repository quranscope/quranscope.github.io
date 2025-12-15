/**
 * CategoryTag Component
 * Colored badge/tag for categorizing content
 */
export default function CategoryTag({ children, color = "purple" }) {
  const colors = {
    purple: "bg-accent-purple",
    green: "bg-green-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
    pink: "bg-pink-500",
  };

  return (
    <span className={`inline-block ${colors[color]} text-white px-3 py-1 rounded-full text-sm font-bold mb-4`}>
      {children}
    </span>
  );
}
