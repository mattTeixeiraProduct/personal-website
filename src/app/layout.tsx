import "@/app/globals.css";

import { cn } from "@/lib/utils";
import { Footer, Header, Providers } from "@/components";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { PageTransitionWrapper } from "@/components/PageTransitionWrapper";
import { baseURL, fonts, home } from "@/resources";
import { generateMetadata as genMeta } from "@/lib/metadata";

export async function generateMetadata() {
  return genMeta({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <body className="flex min-h-screen flex-col font-[family-name:var(--font-body)] text-foreground antialiased">
        <Providers>
          <BackgroundEffects />
          <div className="hidden sm:block h-4" />
          <Header />
          <div className="hidden sm:block h-8" />
          <main className="flex flex-1 justify-center px-4 sm:px-6 lg:px-8 h-full overflow-x-hidden">
            <div className="flex w-full max-w-[960px] justify-center h-full">
              <PageTransitionWrapper>
                {children}
              </PageTransitionWrapper>
            </div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
