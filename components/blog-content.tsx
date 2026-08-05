function getHeadingLevel(line: string) {
  if (line.startsWith("### ")) return 3
  if (line.startsWith("## ")) return 2
  return 0
}

export function BlogContent({ content }: { content: string }) {
  const blocks: React.ReactNode[] = []
  const lines = content.split(/\r?\n/)
  let listItems: string[] = []

  const flushList = () => {
    if (listItems.length === 0) return

    blocks.push(
      <ul key={`list-${blocks.length}`} className="my-6 list-disc space-y-2 pl-6 text-gray-300">
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    )
    listItems = []
  }

  lines.forEach((rawLine) => {
    const line = rawLine.trim()

    if (!line) {
      flushList()
      return
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      listItems.push(line.slice(2).trim())
      return
    }

    flushList()

    const headingLevel = getHeadingLevel(line)

    if (headingLevel === 2) {
      blocks.push(
        <h2 key={`h2-${blocks.length}`} className="mt-12 text-3xl font-serif font-bold text-white">
          {line.slice(3).trim()}
        </h2>
      )
      return
    }

    if (headingLevel === 3) {
      blocks.push(
        <h3 key={`h3-${blocks.length}`} className="mt-8 text-2xl font-serif font-bold text-mask">
          {line.slice(4).trim()}
        </h3>
      )
      return
    }

    blocks.push(
      <p key={`p-${blocks.length}`} className="text-lg leading-8 text-gray-300">
        {line}
      </p>
    )
  })

  flushList()

  return <div className="mx-auto max-w-3xl space-y-6">{blocks}</div>
}
