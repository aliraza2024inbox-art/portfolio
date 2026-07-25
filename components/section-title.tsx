export function SectionTitle({
  id,
  children,
}: {
  id?: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-8">
      <h2 id={id} className="text-foreground text-3xl font-semibold text-balance">
        {children}
      </h2>
      <div className="bg-primary mt-3 h-1 w-10 rounded-full" aria-hidden="true" />
    </div>
  )
}
