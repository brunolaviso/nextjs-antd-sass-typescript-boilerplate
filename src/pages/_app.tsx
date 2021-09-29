import type { AppProps } from 'next/app'

import '../styles/antd-custom.less';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}
