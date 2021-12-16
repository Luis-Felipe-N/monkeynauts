import { Title } from "../../components/Title"
import styles from './styles.module.scss'
import { BiCheck } from 'react-icons/bi'    

export function Roadmap() {
    return (
        <section id="roadmap" className={styles.roadmap}>
            <Title title="short term Roadmap"/>
            <div className={styles.roadmap__container}>
                <div className={styles.roadmap__timeline}>
                    <div className={styles.roadmap__timeline_container}>
                        <div>
                            <h3>q4/20</h3>
                            <span
                                
                                className={`${styles.circle} ${styles.complete}`}
                            >
                                <BiCheck size={30} />
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magni placeat expedita, corrupti adipisci ducimus doloremque repellat! 
                            </p>
                        </div>
                        <div>
                            <h3>q1/21</h3>
                            <span
                                
                                className={styles.circle}
                            ></span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magni placeat expedita, corrupti adipisci ducimus doloremque repellat! Expedita velit enim, eligendi beatae adipisci culpa ratione ea, dolore vero quae eius!
                            </p>
                        </div>
                        <div>
                            <h3>q2/21</h3>
                            <span
                                
                                className={styles.circle}
                            ></span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magni placeat expedita, corrupti adipisci ducimus doloremque repellat! Expedita velit enim, eligendi beatae adipisci culpa ratione ea, dolore vero quae eius!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}