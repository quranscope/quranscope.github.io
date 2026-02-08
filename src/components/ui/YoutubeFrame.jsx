/**
 * YoutubeFrame Component
 * Responsive YouTube embed
 */
export default function YoutubeFrame({
  videoId,
  src,
  title = "YouTube video",
  className = "",
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  allowFullScreen = true
}) {
  const resolvedSrc = src || (videoId ? `https://www.youtube.com/embed/${videoId}` : "");

  if (!resolvedSrc) {
    return null;
  }

  return (
    <div className={["qs-youtube", className].filter(Boolean).join(" ")}>
      <iframe
        src={resolvedSrc}
        title={title}
        allow={allow}
        allowFullScreen={allowFullScreen}
      />
    </div>
  );
}
