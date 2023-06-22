import Head from "next/head";
import Providers from "@/components/Provider";
import "./globals.css";

export const metadata = {
  title: "NEW YORK TIMES",
  description: "NEW YORK TIMES 웹 애플리케이션",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body className="">
        <Providers>
          {children}
          <div id="modal"></div>
        </Providers>
      </body>
    </html>
  );
}
