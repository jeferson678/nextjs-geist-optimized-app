import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dona Te El Yepe - Ayuda a Alimentar Sueños",
  description: "Ayuda a cambiar vidas a través de donaciones que alimentan sueños. Cada contribución hace la diferencia en la vida de un niño.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${outfit.className} antialiased bg-white`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
