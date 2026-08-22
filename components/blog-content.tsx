function getHeadingLevel(line: string) {
  if (line.startsWith("### ")) return 3
  if (line.startsWith("## ")) return 2
  return 0
}

function parseFormattedText(text: string): React.ReactNode {
  const regex = /(\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s<]+|\*\*[^*]+\*\*)/g
  const parts = text.split(regex)

  return parts.map((part, index) => {
    if (!part) return null

    if (part.startsWith("[") && part.includes("](")) {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      if (match) {
        const [, linkText, href] = match
        const isExternal = href.startsWith("http://") || href.startsWith("https://")
        return (
          <a
            key={index}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-mask underline font-medium hover:brightness-125 transition-all"
          >
            {linkText}
          </a>
        )
      }
    }

    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-mask underline font-medium hover:brightness-125 transition-all"
        >
          {part}
        </a>
      )
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      )
    }

    return part
  })
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
          <li key={`${item}-${index}`}>{parseFormattedText(item)}</li>
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
          {parseFormattedText(line.slice(3).trim())}
        </h2>
      )
      return
    }

    if (headingLevel === 3) {
      blocks.push(
        <h3 key={`h3-${blocks.length}`} className="mt-8 text-2xl font-serif font-bold text-mask">
          {parseFormattedText(line.slice(4).trim())}
        </h3>
      )
      return
    }

    blocks.push(
      <p key={`p-${blocks.length}`} className="text-lg leading-8 text-gray-300">
        {parseFormattedText(line)}
      </p>
    )
  })

  flushList()

  return <div className="mx-auto max-w-3xl space-y-6">{blocks}</div>
}
