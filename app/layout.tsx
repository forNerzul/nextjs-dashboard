import '@/app/ui/global.css'
// Importamos la fuente inter desde nuestro archivo de fuentes
import {inter} from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* interpolamos de esta forma el className para aplicar la fuente a este elemento, al ser el body vamos a aplicar a todo nuestro body html en general */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
