import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-5xl m-auto px-8">
          <header className=" flex flex-col items-center py-4">
            <h1 className="text-center text-2xl text-slate-600">Tienda de Café</h1>
          </header>
          <main className="flex flex-col items-center justify-between">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
