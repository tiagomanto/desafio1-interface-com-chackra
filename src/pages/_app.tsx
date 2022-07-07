import { ChakraProvider } from '@chakra-ui/react'
import { AppProps} from 'next/app'
import { theme } from '../styles/theme'

import '../styles/slider.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
