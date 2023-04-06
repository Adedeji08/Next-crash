/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 03/04/2023 - 08:46:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/04/2023
    * - Author          : 
    * - Modification    : 
**/
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
 <Component {...pageProps} />
  </Layout>
  )
}
