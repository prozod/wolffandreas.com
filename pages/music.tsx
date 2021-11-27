import Head from 'next/head'
import Footer from "@/components/footer/footer"
import Navigation from "@/components/navigation/navigation"
import { Wrapper100 } from "@/constants/basic.styles"

const Music = () => {

  return (
    <Wrapper100>
      <Head>
        <title>Music | TOUX.io</title>
        <meta name="description" content="Personal portfolio, Frontend Development, Blogging, Tech & Life, Music Production" />
      </Head>
      <Navigation />
      <h1>MUSIC - NOT DONE</h1>
      <Footer />
    </Wrapper100>
  )
}

export default Music
