/**
 * IntroBox Component
 * Warning/Info box with yellow background used at the top of pages
 */
export default function IntroBox({ title = "⚠️ Important Note", children, variant = "warning" }) {
  const variants = {
    warning: "bg-amber-50 border-l-amber-400 border-l-4",
    info: "bg-blue-50 border-l-blue-400 border-l-4",
    success: "bg-green-50 border-l-green-400 border-l-4",
    danger: "bg-red-50 border-l-red-400 border-l-4"
  };

  const textColors = {
    warning: "text-amber-800",
    info: "text-blue-800",
    success: "text-green-800",
    danger: "text-red-800"
  };

  return (
    <div className={`${variants[variant]} p-6 mb-8 rounded-md`}>
      <h3 className={`${textColors[variant]} font-semibold mb-2 text-lg`}>
        {title}
      </h3>
      <div className={`${textColors[variant]} space-y-2`}>
        {children}
      </div>
    </div>
  );
}
