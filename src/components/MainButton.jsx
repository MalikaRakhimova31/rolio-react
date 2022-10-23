import styles from './Styles.module.scss'


export default function MainButton({extraClass, text}) {
    return  (
       <button className={`${styles.btn} ${extraClass}`}>{text}</button>
    )
}





