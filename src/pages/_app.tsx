import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        title="Chloe Glassonbury"
        description="Hi, I'm Chloe Glassonbury. I build software solutions using React."
        openGraph={{ type: "website", url: "", site_name: "Chloe Glassonbury" }}
      />
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
