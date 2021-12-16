import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

export function Header() {
    const [ openMenu, setOpenMenu ] = useState(false)
    // const headerRef = useRef<HTMLHeadingElement>(null)

    // function changeStyleHeader(scroll: number) {

    //     if ( headerRef.current ) {
    //         const headerIsActive: string | null =  headerRef.current.getAttribute('data-header')
            
    //         if ( !headerIsActive && scroll >= 200) {
    //             headerRef.current.setAttribute('data-header', 'active')
    //             return
    //         }

    //         if ( headerRef && scroll < 200 ) {
    //             headerRef.current.removeAttribute('data-header')
    //             return
    //         }
    //     }
    // }

    // useEffect(() => {
    //     document.addEventListener('scroll',  () => {
    //         changeStyleHeader(window.scrollY)
    //     })
    // }, [])

    return (
        <header className={styles.header}>
            <Image 
                src="/logo.png" 
                alt="A monkey holdling a banner"
                width={70}
                height={56}
            />
            <nav className={openMenu ? `${styles.header__menu} ${styles.active}` : styles.header__menu}>
                <ul>
                    <li><a href="#" className={styles.active}>Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#game">Game</a></li>
                    <li><a href="#footage">Footage</a></li>
                    <li><a href="#tokenomics">Tokenomics</a></li>
                    <li><a href="#roadmap">Roadmap</a></li>
                    <li><a href="#team">Core Team</a></li>
                </ul>
            </nav>
            <button
                aria-label='Menu'
                className={styles.btnMenu}
                onClick={() => setOpenMenu(!openMenu)}
            >
                <span></span>
            </button>
        </header>
    )
}