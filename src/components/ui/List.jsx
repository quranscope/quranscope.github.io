/**
 * List Components - Semantic list components with title/description support
 * 
 * Usage:
 * <List variant="disc">
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 * 
 * Or with ListSection:
 * <ListSection title="Heading" description="Optional description" variant="numbered">
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </ListSection>
 */

// List - Base ul component with variant support
export default function List({ variant = 'disc', children, className = '' }) {
  const variantClasses = {
    disc: 'list-disc',
    numbered: 'list-decimal',
    none: 'list-none',
    check: 'list-none'
  };

  return (
    <ul className={`ml-6 mt-2 space-y-2 ${variantClasses[variant]} ${className}`}>
      {children}
    </ul>
  );
}

// ListItem - Individual list item wrapper
export function ListItem({ children, className = '' }) {
  return (
    <li className={`text-gray-700 ${className}`}>
      {children}
    </li>
  );
}

// ListSection - Full section with optional title + description + list
export function ListSection({ 
  title, 
  description, 
  variant = 'disc', 
  children,
  className = '' 
}) {
  return (
    <div className={className}>
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
