import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <NextSeo
      title="The monkeynauts"
      description="This example uses more of the available config options."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: '/logo.png',
            width: 800,
            height: 600,
            alt: 'Monkey holding a banner',
            type: 'image/png',
          },
          {
            url: '/logo.png',
            width: 900,
            height: 800,
            alt: 'Monkey holding a banner',
            type: 'image/png',
          },
          { url: '/logo.png'},
          { url: '/logo.png'},
        ],
        site_name: 'TheMonkeynauts',
      }}
      // twitter={{
      //   handle: '@handle',
      //   site: '@site',
      //   cardType: 'summary_large_image',
      // }}
    />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
