import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  title: string
  breadcrumbs: BreadcrumbItem[]
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <header className="relative bg-gray-950 text-white overflow-hidden">
      {/* Gradient accent line */}
      <div className="h-[2px] bg-gradient-to-r from-primary via-yellow-500 to-primary" />
      {/* Decorative orb */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide">{title}</h1>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-gray-600">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-yellow-400 font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </header>
  )
}
