import { Title } from "../../components/Title";
import styles from './styles.module.scss'

export function Footage() {
    return (
        <section className={styles.footage}>
            <Title title="In Game Footage" />
            <div className={styles.slider}>
                <button
                    aria-label="Back to slider"
                >back</button>
                <div className={styles.container}>
                    <div className={styles.slide}>
                        <h1>title</h1>
                    </div>
                </div>
                <button
                    aria-label="Next to slider"
                >next</button>
            </div>
            <p>These images do not necessarily represent the final product.</p>
        </section>
    )
}