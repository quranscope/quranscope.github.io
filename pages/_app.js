import '../src/index.css'
import '../src/App.css'
import '../src/components/Layout.css'
import '../src/components/Header.css'
import '../src/components/Footer.css'
import '../src/components/LanguageBar.css'
import '../src/pages/Home.css'
import '../src/pages/PageContent.css'

// Google Analytics
import Script from 'next/script'

import Layout from '../src/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N7VHK2SC81"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N7VHK2SC81', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
