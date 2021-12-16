import { useEffect, useRef, useState } from "react";
import { Title } from "../../components/Title";
import styles from './styles.module.scss'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {RiErrorWarningLine} from 'react-icons/ri'

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
    const [currentSliderActive, setCurrentSliderActive] = useState(0)
    const containerSliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if ( containerSliderRef.current ) {
            containerSliderRef.current.style.transform = `translateX(-${currentSliderActive * 100}%)`
        }
    }, [currentSliderActive])

    function handleNextSlider() {
        if (currentSliderActive < (countSlider - 1)) {
            setCurrentSliderActive(currentSliderActive + 1)   
        }
    }

    function handleBackSlider() {
        if (currentSliderActive > 0) {
            setCurrentSliderActive(currentSliderActive - 1)
        }
    }

    function handleMoveSliderByLabels(index: number) {
        setCurrentSliderActive(index)
    }

    return (
        <section id="footage" className={styles.footage}>
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
                            <button 
                                onClick={() => handleMoveSliderByLabels(index)} 
                                className={index === currentSliderActive ? styles.active : ''}
                                aria-current={currentSliderActive === index}
                                aria-label={currentSliderActive === index ? `Current item, item ${index + 1} of carrossel` : `Item ${index + 1} of carrossel`}
                            >

                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <p className={styles.footage__message}>
                <RiErrorWarningLine size={25}/>
                These images do not necessarily represent the final product.
            </p>
        </section>
    )
}