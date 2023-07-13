import "#/_styles/globals.scss";
import { Footer } from "#/_components/footer";
import { Header } from "#/_components/header";

export const metadata = {
  title: "Tzoob",
  description: "The assignment for Boozt company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
