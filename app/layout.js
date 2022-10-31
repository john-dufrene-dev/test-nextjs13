export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Title layout</title>
        <meta name="description" content="Generated by layout" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
