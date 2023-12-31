import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sabor Espresso',
  description: 'Calidad del café y la importancia del aroma y la frescura de los granos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="">
          <header className="flex flex-col items-center py-4 sticky top-0 z-50 bg-amber-600">
            
            <h1 className="text-center text-2xl text-slate-950">SABOR ESPRESSO</h1>
            <h3 className="text-center text-2xl text-slate-200">Tienda de Café</h3>
            <nav className="flex flex-row justify-around space-x-6">
                <a href="/products" className="text-slate-950 hover:text-sky-500 border-b-2 border-gray-100 hover:border-b-2 hover:border-sky-500">
                    Inicio
                </a>
                <a href="/products/continue" className="text-slate-950 hover:text-sky-500">
                    Continuar pedido
                </a>
                <a href="/orders" className="text-slate-950 hover:text-sky-500">
                    Mis pedidos
                </a>
                <a href="/stock" className="text-slate-950 hover:text-sky-500">
                    Manejar stock
                </a>
            </nav>
          </header>
          <main className="max-w-5xl m-auto px-8 flex flex-col items-center justify-between pt-4">
            {children}
          </main>
        </div>     
      </body>
      <footer className="flex flex-col items-center py-4 sticky top-0 z-50 bg-amber-600">
          Calidad del café, la importancia del aroma y la frescura de los granos
      </footer> 
    </html>
  )
}
