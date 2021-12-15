import { useEffect, useRef, useState } from "react";
import { Title } from "../../components/Title";
import styles from './styles.module.scss'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
// import { url } from "inspector";
// import { URL } from "url";

interface IImage {
    url: string;
    title: string;
    alt: string;
}

const imgs: IImage[] = [
    {
        url: '/carrossel/img1.png',
        title: 'In game',
        alt: 'Space image with planets and ships'
    },
    {
        url: '/carrossel/img2.png',
        title: 'About planet',
        alt: 'Explanation about planet earth'
    },
    {
        url: '/carrossel/img3.png',
        title: 'In game',
        alt: 'Space image with planets and ships'
    },
    {
        url: '/carrossel/img4.png',
        title: 'In game',
        alt: 'Space image with planets and ships'
    },
    {
        url: '/carrossel/img5.png',
        title: 'In game',
        alt: 'Space image with planets and ships'
    }
]


export function Footage() {
    const countSlider = imgs.length
    const [active, setActive] = useState(0)
    const containerSliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if ( containerSliderRef.current ) {
            containerSliderRef.current.style.transform = `translateX(-${active * 100}%)`
        }
    }, [active])

    function handleNextSlider() {
        if (active < (countSlider - 1)) {
            setActive(active + 1)   
        }
    }

    function handleBackSlider() {
        if (active > 0) {
            setActive(active - 1)
        }
    }

    function handleMoveSliderByLabels(index: number) {
        setActive(index)
    }

    return (
        <section className={styles.footage}>
            <Title title="In Game Footage" />
            <div className={styles.slider}>
                <button
                    className={`${styles.slider__btn} ${styles.slider__btn_back}`}
                    aria-label="Back to slider"
                    onClick={handleBackSlider}
                >
                    <IoIosArrowBack size={25}/>
                    </button>
                <div ref={containerSliderRef} className={styles.slider__container}>
                    {imgs.map(img => (
                        <>
                        <div style={{backgroundImage:` url(${img.url})`}} className={styles.slide}>
                            <img src={img.url} alt={img.alt} title={img.title} />
                        </div>
                        </>
                    ))}
                </div>
                <button
                    className={`${styles.slider__btn} ${styles.slider__btn_next}`}
                    aria-label="Next to slider"
                    onClick={handleNextSlider}
                >
                    <IoIosArrowForward size={25}/>
                </button>
                <ul className={styles.slider__labels} role="navigation">
                    {imgs.map((img, index) => (
                        <li key={index}>
                            <button onClick={() => handleMoveSliderByLabels(index)} aria-label={``}>

                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <p className={styles.footage__message}>These images do not necessarily represent the final product.</p>
        </section>
    )
}