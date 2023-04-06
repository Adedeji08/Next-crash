/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 03/04/2023 - 08:17:43
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/04/2023
    * - Author          : 
    * - Modification    : 
**/
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}) {
  console.log(articles )
  return (
    <div>
      <Head>
                <title>
              Webdev news
                </title>
                <meta name="keyword" content="web development, programming" /> 
            </Head>
      <h1>Welcome to Next</h1>
    </div>
  )
}
export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const articles = await res.json()
    return{
      props: {
        articles
      }
    }
}