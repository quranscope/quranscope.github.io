/**
 * BackLink Component
 * Reusable back navigation link with hover effects
 */
export default function BackLink({ href = "/", children = "← Back to Home" }) {
  return (
    <a
      href={href}
      className="inline-block text-primary-500 hover:text-primary-700 no-underline mb-4 font-medium transition-all duration-300 hover:translate-x-[-5px] px-4 py-2 rounded-md hover:bg-gray-100"
    >
      {children}
    </a>
  );
}
