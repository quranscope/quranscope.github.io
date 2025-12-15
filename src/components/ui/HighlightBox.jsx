/**
 * HighlightBox Component
 * Colored highlight boxes for facts, problems, or important info
 */
export default function HighlightBox({ title, children, variant = "success" }) {
  const variants = {
    success: {
      bg: "bg-green-50",
      border: "border-l-green-500",
      title: "text-green-900",
      text: "text-green-800"
    },
    danger: {
      bg: "bg-red-50",
      border: "border-l-red-500",
      title: "text-red-900",
      text: "text-red-800"
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-l-yellow-500",
      title: "text-yellow-900",
      text: "text-yellow-800"
    },
    info: {
      bg: "bg-blue-50",
      border: "border-l-blue-500",
      title: "text-blue-900",
      text: "text-blue-800"
    }
  };

  const style = variants[variant];

  return (
    <div className={`${style.bg} ${style.border} border-l-4 p-4 my-4 rounded-md`}>
      {title && (
        <h4 className={`${style.title} font-semibold mb-2`}>
          {title}
        </h4>
      )}
      <div className={style.text}>
        {children}
      </div>
    </div>
  );
}
