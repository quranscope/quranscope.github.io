export default function PageHeader({ title, subtitle, gradient }) {
  return (
    <div 
      className="text-white py-12 px-4 text-center shadow-lg mb-8"
      style={{ background: gradient }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl opacity-95">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
