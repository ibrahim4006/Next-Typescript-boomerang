import { Navbar } from '@/components/common'
import './globals.css'



export const metadata = {
  title: 'Boomerang',
  description: 'Best Education Program in the Turkey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
