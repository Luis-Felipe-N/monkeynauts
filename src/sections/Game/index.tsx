import { Title } from "../../components/Title";
import styles from './styles.module.scss';
import {RiErrorWarningLine} from 'react-icons/ri'

export function Game() {
    return (
        <section className={styles.game}>
            <Title title="game"/>
            <div className={styles.container}>
                <div className={styles.game__modes}>
                    <h2>Game modes</h2>
                    <section className={styles.game__modes_container_card}>
                        <div className={styles.card}>
                            <header className={styles.card__header}>
                                <h1>pvp</h1>
                            </header>
                            <p className={styles.card__text}>
                                compete against other PLAYERS through a turn-based combat system based on skill cards.GET HIGHIER RANKS and more REWARDS
                            </p>
                        </div>
                        <div className={styles.card}>
                            <header className={styles.card__header}>
                                <h1>PVE</h1>
                            </header>
                            <p className={styles.card__text}>
                            The Monkeynauts also has several other activities, where the player competes against the AI and when he comes out victorious, receives valuable resources for building and maintaining his empire.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <header className={styles.card__header}>
                                <h1>Management</h1>
                            </header>
                            <p className={styles.card__text}>
                            With city building and administration mechanics, it will be possible to build and evolve a complete colony of Monkeynauts and raise your rewards
                            </p>
                        </div>
                    </section>
                </div>
                <div className={styles.game__play}>
                    <h2>Play</h2>
                    <section>
                        <p>Download the alpha version to test and learn more about the game.</p>
                        <h3>
                            <RiErrorWarningLine />
                            Import
                        </h3>
                        <ul>
                            <li>- This is an alpha version, may contain bugs and performance issues.</li>
                            <li>- Your progress is not saved in any way, the sole purpose of this build is to give early access to the development of the game, as a way of demonstrating the work being done.</li>
                        </ul>
                        <a>Comming soon</a>
                    </section>
                </div>
            </div>
        </section>
    )
}