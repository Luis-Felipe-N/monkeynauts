import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { About } from '../sections/About'
import { Footage } from '../sections/Footage'
import { Game } from '../sections/Game'
import { Opening } from '../sections/Opening'
import { Roadmap } from '../sections/Roadmap'
import { Tokenomics } from '../sections/Tokenomics'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <main className={styles.home}>
      <Opening/>
      <About/>
      <Game/>
      <Footage/>
      <Tokenomics />
      <Roadmap/>
    </main>
    </>
  )
}

export default Home
