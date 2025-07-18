import { Geist, Geist_Mono, Mochiy_Pop_P_One } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const mochiy = Mochiy_Pop_P_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "El cabrit del Roc",
  description: "Carn de cabrit de pastura natural al Bages",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca">
      <body className={`${geistSans.variable} ${geistMono.variable} ${mochiy.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
