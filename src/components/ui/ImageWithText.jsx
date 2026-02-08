/**
 * ImageWithText Component
 * Side-by-side image and text layout
 */
export default function ImageWithText({
  src,
  alt = "",
  imagePosition = "left",
  className = "",
  children
}) {
  const positionClass = imagePosition === "right" ? "qs-image-text--right" : "qs-image-text--left";
  const combinedClassName = ["qs-image-text", positionClass, className].filter(Boolean).join(" ");

  return (
    <div className={combinedClassName}>
      <div className="qs-image-text__image">
        <img src={src} alt={alt} />
      </div>
      <div className="qs-image-text__content">{children}</div>
    </div>
  );
}
