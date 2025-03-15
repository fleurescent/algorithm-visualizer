const swap = 'swap 5 and 1' + '\n'
const log = 'original array = [1, 3, 5]\n' + swap.repeat(50)

export function Logger() {
  return (
    <div className="flex flex-1 flex-col self-stretch items-stretch">
      <div className="p-6 whitespace-pre-wrap text-sm leading-relaxed font-[family-name:var(--font-geist-mono)]" dangerouslySetInnerHTML={{__html: log }}/>
    </div>
  )
}