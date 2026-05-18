import { Fragment } from 'react'
import { NEWS_ITEMS } from '@/content/news'

export default function NewsPage() {
  return (
    <main className="max-w-content px-10 pt-6 pb-section">
      <h1 className="text-h1 font-bold font-serif mb-10">News</h1>

      {/*
        Single grid for all rows — auto column is sized to the widest date
        across every item, so all text columns start at exactly the same position.
      */}
      <div className="grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10">
        {NEWS_ITEMS.map((item, i) => (
          <Fragment key={i}>
            <span
              className={`text-body text-[#6B6B6B] dark:text-gray-400 whitespace-nowrap py-4 ${
                i > 0 ? 'border-t border-gray-100 dark:border-gray-800' : ''
              }`}
            >
              {item.date}
            </span>
            <p
              className={`text-body text-[#6B6B6B] dark:text-gray-400 min-w-0 py-4 ${
                i > 0 ? 'border-t border-gray-100 dark:border-gray-800' : ''
              }`}
            >
              {item.text}
            </p>
          </Fragment>
        ))}
      </div>
    </main>
  )
}
