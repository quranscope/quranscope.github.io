/**
 * Description Component
 * Standard description text block
 */
export default function Description({ as: Tag = "p", className = "", children }) {
  const combinedClassName = ["qs-description", className].filter(Boolean).join(" ");
  return <Tag className={combinedClassName}>{children}</Tag>;
}
