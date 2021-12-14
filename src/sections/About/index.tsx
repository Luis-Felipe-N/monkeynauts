import { Title } from "../../components/Title";
import styles from './styles.module.scss';
import Image from 'next/image';

export function About() {
    return (
        <section id='about' className={styles.about}>
            <Title title="About"/>
            <div className={styles.about__content}>
                <Image 
                    src="/logo.png" 
                    alt="" 
                    height={397}
                    width={485.65}
                />
                <div>
                    <p>The Monkeynauts is a space management, exploration, mining and combat game that adopts the Play to Earn system.</p>
                    <p>In a universe where monkeys have become the dominant species, the player will start controlling a small crew of Monkeynauts and will aim to establish a colony and expand their empire.</p>
                    <p>This new game model allows players to earn recurring income while having fun through the following activities:</p>
                    <ul>
                        <li>Player vs Player Combat in Turns</li>
                        <li>Mining for resources</li>
                        <li>Bounty Hunter</li>
                        <li>Space exploration</li>
                        <li>Colony Construction and Management</li>
                        <li>Trading of items on the marketplace</li>
                    </ul>
                </div>
            </div>
            <a href="https://heitor-sampaio.gitbook.io/the-monkeynauts-whitepaper/" target="_blank" rel="noopener noreferrer">read more in our whitepaper</a>
        </section>
    )
}