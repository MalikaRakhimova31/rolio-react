import MainButton from './MainButton'
import styles from './ProductCard.module.scss'



export default function ProductCard({src, title, text1, text2, liter, price, color}) {
    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <div className={styles.productImg}>
                    <img src={src} />
                </div>
            </div>
            <div className={styles.bottomBox}>
                <div className={styles.textBox}>
                    <h3 className={`${color === 'red' ? 
                    styles.red : color === 'green' ? styles.green : color === 'orange' ? styles.orange : styles.defaultColor}`}>{title}</h3>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
                <div className={styles.collectProduct}>
                    <div className={styles.priceBox}>
                        <div>{liter}</div>
                        <div className={styles.priceText}>{price}</div>
                    </div>
                    <div className={styles.buttons}>
                        <MainButton 
                            extraClass={styles.extraClass} 
                            text='В КОРЗИНУ'
                        />
                        <MainButton extraClass={styles.extraClass} text='ЗАКАЗАТЬ В ТГ'/>
                    </div>
                </div>
            </div>

        </div>
    )
}