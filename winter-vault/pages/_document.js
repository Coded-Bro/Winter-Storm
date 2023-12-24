import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Stake & Hold Storm" />
        <meta
          name="description"
          content="Reward Dashboard for STORM Stakers and Holders."
        />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vault.winterstorm.finance" />
        <meta property="og:title" content="Stake & Hold Storm" />
        <meta
          property="og:description"
          content="Reward Dashboard for STORM Stakers and Holders."
        />
        <meta
          property="og:image"
          content="https://vault.winterstorm.finance/static/images/logo_with_words.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://vault.winterstorm.finance"
        />
        <meta property="twitter:title" content="Stake Storm" />
        <meta
          property="twitter:description"
          content="Winter is here, the Storm is upon us."
        />
        <meta
          property="twitter:image"
          content="https://vault.winterstorm.finance/static/images/logo_with_words.png"
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap"
        />
        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/custom.js" strategy="afterInteractive" />
      </body>
    </Html>
  );
}
