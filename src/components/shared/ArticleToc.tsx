
export interface TocItem {
  id: string
  label: string
}

/**
 * "On this page" navigation for guides.
 * Wide screens: a sticky list beside the article. Smaller screens: a collapsible box above it.
 * Rendered on the server, so the links are in the page HTML.
 */
export function ArticleToc({ items }: { items: TocItem[] }) {
  const list = (
    <ol className="m-0 p-0 list-none flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="block text-[15px] leading-snug text-muted-foreground hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <aside className="max-w-3xl mx-auto mb-14 xl:mb-0 xl:mx-0 xl:max-w-none">
      <details className="xl:hidden rounded-xl border border-border bg-card px-5 py-4">
        <summary className="cursor-pointer text-[13px] font-semibold uppercase tracking-[0.08em] text-foreground">
          On this page
        </summary>
        <nav aria-label="On this page" className="pt-4">
          {list}
        </nav>
      </details>
      <nav
        aria-label="On this page"
        className="hidden xl:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8"
      >
        <span className="block mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          On this page
        </span>
        <div className="border-l-2 border-border pl-4">{list}</div>
      </nav>
    </aside>
  )
}
