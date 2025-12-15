/**
 * SectionTitle Component
 * Styled section heading with bottom border
 */
export default function SectionTitle({ children, color = "primary" }) {
  const colors = {
    primary: "text-primary-500 border-accent-purple",
    red: "text-red-600 border-red-500",
    green: "text-green-600 border-green-500",
    blue: "text-blue-600 border-blue-500",
  };

  return (
    <h2 className={`${colors[color]} text-2xl font-bold mb-4 pb-2 border-b-2`}>
      {children}
    </h2>
  );
}
