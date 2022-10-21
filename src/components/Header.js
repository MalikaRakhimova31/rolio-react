import styles from './Styles.module.scss'
import { CartIcon, RolioLogo } from './Icons'
import MainButton from './MainButton'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoCircle}>
                <RolioLogo />
            </div>
            <div className={styles.navbar}>
                <nav>
                    <ul>
                        <li>Масло</li>
                        <li>Масло</li>
                        <li>Масло</li>
                        <li>Масло</li>
                        <li>Масло</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.cartIcon}>
                <CartIcon />
                <span className={styles.badge}>1</span>
            </div>
        </header>
    )
}