export default function DataTable({ headers, children, className = '' }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className={`w-full border-collapse bg-white ${className}`}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index}
                className="border border-gray-300 px-3 py-2 text-left bg-purple-600 text-white font-bold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}

export function TableRow({ children, striped = false }) {
  return (
    <tr className={striped ? 'bg-gray-50' : ''}>
      {children}
    </tr>
  );
}

export function TableCell({ children, className = '' }) {
  return (
    <td className={`border border-gray-300 px-3 py-2 ${className}`}>
      {children}
    </td>
  );
}
