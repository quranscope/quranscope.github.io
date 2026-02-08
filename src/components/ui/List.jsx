export default function List({ 
  children, 
  variant = 'disc', 
  className = '' 
}) {
  const variants = {
    disc: 'list-disc',
    numbered: 'list-decimal',
    none: 'list-none',
    check: 'list-none'
  };

  return (
    <ul className={`ml-6 mt-2 space-y-2 ${variants[variant] || variants.disc} ${className}`}>
      {children}
    </ul>
  );
}

export function ListItem({ children, className = '' }) {
  return (
    <li className={`text-gray-700 ${className}`}>
      {children}
    </li>
  );
}

export function ListSection({ title, description, children, variant = 'disc', className = '' }) {
  return (
    <div className={`mb-6 ${className}`}>
      {title && (
        <h4 className="font-bold text-lg text-gray-900 mb-2">{title}</h4>
      )}
      {description && (
        <p className="text-gray-700 mb-3">{description}</p>
      )}
      <List variant={variant}>
        {children}
      </List>
    </div>
  );
}
