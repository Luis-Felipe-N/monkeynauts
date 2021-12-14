import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'

export function Header() {
    const headerRef = useRef<HTMLHeadingElement>(null)

    function changeStyleHeader(scroll: number) {

        if ( headerRef.current ) {
            const headerIsActive: string | null =  headerRef.current.getAttribute('data-header')
            
            if ( !headerIsActive && scroll >= 200) {
                headerRef.current.setAttribute('data-header', 'active')
                return
            }

            if ( headerRef && scroll < 200 ) {
                headerRef.current.removeAttribute('data-header')
            }
        }
        // if ( scroll >= 200) {
        //     console.log('Header with style')
        // } else {

        // }
        // console.log('Current scrool is: ' + window.scrollY)
    }

    useEffect(() => {
        document.addEventListener('scroll',  () => {
            changeStyleHeader(window.scrollY)
        })
    }, [])

    return (
        <header ref={headerRef} className={styles.header}>
            <Image 
                src="/logo.png" 
                alt="A monkey holdling a banner"
                width={70}
                height={56}
            />
            <nav className={styles.header__menu}>
                <ul>
                    <li><a href="#" className={styles.active}>Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Game</a></li>
                    <li><a href="#">Play</a></li>
                    <li><a href="#">Tokenomics</a></li>
                    <li><a href="#">Core Team</a></li>
                </ul>
            </nav>
        </header>
    )
}