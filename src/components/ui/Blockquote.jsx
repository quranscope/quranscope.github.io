/**
 * Blockquote Component
 * Styled quote box with variants
 */
export default function Blockquote({ variant = "neutral", className = "", children }) {
  const variantClass = `qs-blockquote qs-blockquote--${variant}`;
  const combinedClassName = [variantClass, className].filter(Boolean).join(" ");

  return <blockquote className={combinedClassName}>{children}</blockquote>;
}
