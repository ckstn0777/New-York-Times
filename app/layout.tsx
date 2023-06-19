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
      <body className="">
        <Providers>
          {children}
          <div id="modal"></div>
        </Providers>
      </body>
    </html>
  );
}
