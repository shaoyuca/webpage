// ================================================================
//  NEWS PAGE CONTENT
//  Edit this file to update everything on the News page.
//  No other files need to be changed.
// ================================================================

import InlineLink from '@/components/ui/InlineLink'
import Strong from '@/components/ui/Strong'

export type NewsItem = {
  date: string          // e.g. "May 2024" — keep concise so it fits on one line
  text: React.ReactNode // plain text, or use <Strong> / <InlineLink> for rich content
}

/**
 * News items are displayed in the order listed here (newest first recommended).
 *
 * Plain text:  'Some news description.'
 * Bold text:   <>Our paper <Strong>Title</Strong> was accepted.</>
 * With link:   <>Read more at <InlineLink href="…" external>link text</InlineLink>.</>
 */
export const NEWS_ITEMS: NewsItem[] = [
  {
    date: 'May 2024',
    text: <>Our paper <Strong>RoboSkin</Strong> received a <Strong>Best Paper Award</Strong> at <InlineLink href="https://chi2024.acm.org" external>CHI 2024</InlineLink> in Honolulu, Hawaii.</>,
  },
  {
    date: 'Apr 2024',
    text: <>Three papers accepted to <InlineLink href="https://chi2024.acm.org" external>CHI 2024</InlineLink>. Congratulations to all co-authors!</>,
  },
  {
    date: 'Jan 2024',
    text: <>We welcome two new PhD students, [Name] and [Name], joining the lab this semester.</>,
  },
  {
    date: 'Nov 2023',
    text: <><Strong>KnitSense</Strong> was featured in <InlineLink href="https://example.com" external>MIT Technology Review</InlineLink> as one of ten emerging technologies in wearable computing.</>,
  },
  {
    date: 'Aug 2023',
    text: <>Our lab received a new research grant from [Funding Agency] to explore shape-changing materials for prosthetics.</>,
  },
  {
    date: 'May 2023',
    text: <>Two papers accepted to <InlineLink href="https://uist.acm.org" external>UIST 2023</InlineLink>. Full details on the <InlineLink href="/publications">Publications</InlineLink> page.</>,
  },
  {
    date: 'Jan 2023',
    text: 'Dr. [Name] delivered an invited keynote at the International Symposium on Tangible Computing, Vienna.',
  },
]
