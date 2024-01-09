import Header from "@/app/components/header";
import Tabs from "@/app/components/tabs";
import "./globals.css";

export const metadata = {
  title: "NetFilms - Watch Movie",
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <Header />
        <Tabs />
        {children}
      </body>
    </html>
  );
}
