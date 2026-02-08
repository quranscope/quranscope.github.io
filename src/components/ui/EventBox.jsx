export default function EventBox({ title, children, variant = 'event', className = '' }) {
  const variantStyles = {
    event: 'bg-gray-50 border-l-purple-500',
    stats: 'bg-green-50 border-l-green-600',
    war: 'bg-red-50 border-l-red-600'
  };

  const titleColors = {
    event: 'text-purple-600',
    stats: 'text-green-700',
    war: 'text-red-700'
  };

  return (
    <div className={`border-l-4 p-4 my-4 ${variantStyles[variant]} ${className}`}>
      {title && <h4 className={`${titleColors[variant]} font-semibold mb-2`}>{title}</h4>}
      {children}
    </div>
  );
}
