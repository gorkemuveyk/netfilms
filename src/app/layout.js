import "./globals.css";

export const metadata = {
  title: "Netfilms - Watch Movie",
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
