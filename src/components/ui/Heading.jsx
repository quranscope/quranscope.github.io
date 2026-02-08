/**
 * Heading Component
 * Consistent heading styles with variants
 */
export default function Heading({ level = 2, variant = "section", className = "", children }) {
  const safeLevel = Math.min(6, Math.max(1, level));
  const Tag = `h${safeLevel}`;
  const variantClass = variant ? `qs-heading qs-heading--${variant}` : "qs-heading";
  const combinedClassName = [variantClass, className].filter(Boolean).join(" ");

  return <Tag className={combinedClassName}>{children}</Tag>;
}
