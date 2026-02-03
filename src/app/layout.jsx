import "./globals.css";

export const metadata = {
  title: "Edusity - Your University Partner",
  description: "Modern university website built with Next.js and Bun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Chivo:ital,wght@0,100..900;1,100..900&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Linden+Hill:ital@0;1&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&family=Outfit:wght@100..900&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
