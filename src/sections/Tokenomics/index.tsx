import { Title } from "../../components/Title";
import Image from "next/image";
import styles from './styles.module.scss'

export function Tokenomics() {
    return (
        <section id="tokenomics" className={styles.tokenomics}>
            <Title title="Tokenomics" />
            <div className={styles.tokenomics__container}>
                <div className={styles.tokenomics__container_content}>
                    <p>A token, a universe of possibilities.</p>
                    <p>SPC is the symbol that represents our governance token, Space Credits.</p>
                    <p>With a total supply of 300,000,000 and locked contract, the SPC TOKEN will be one of the rewards that the player will receive in the various activities that The Monkeynauts provides IN OUR PLAY TO EARN SYSTEM.</p>
                </div>
                <div className={styles.tokenomics__container_img}>
                    <h3>token distribution</h3>
                    <Image 
                        src="/tokenomics.svg"
                        width={450}
                        height={337}
                    />
                </div>
            </div>
            <a href="http://" target="_blank" rel="noopener noreferrer">READ MORE IN OUR WHITEPAPER</a>
        </section>
    )
}