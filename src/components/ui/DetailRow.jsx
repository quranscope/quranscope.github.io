/**
 * DetailRow Component
 * Labeled detail row for displaying key-value pairs
 */
export default function DetailRow({ label, value, children }) {
  return (
    <div className="my-2 py-1">
      <span className="font-bold text-primary-500 inline">{label}:</span>{" "}
      {children || <span className="text-gray-600">{value}</span>}
    </div>
  );
}
