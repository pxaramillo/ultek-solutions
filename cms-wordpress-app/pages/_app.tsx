import { AppProps } from 'next/app'
import '../styles/index.css'
import Transition from '../components/transition'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  )
}

export default MyApp
