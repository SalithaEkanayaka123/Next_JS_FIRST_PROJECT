import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header  */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results  */}
      <Results results={results} />


    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  console.log(genre)
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  //https://api.themoviedb.org/3/movie/550?api_key=4b1b3cd716a5a8a1f5d7650f4b9ac6ba
  return {
    props: {
      results: request
    }
  }
}
