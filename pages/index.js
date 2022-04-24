import Head from 'next/head'
import Header from '../components/Header';
import Feed from '../components/Feed';
import Modal from '../components/Modal';

function Home(){
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Feed/>
      <Modal/>
    </div>
  )
}

export default Home;