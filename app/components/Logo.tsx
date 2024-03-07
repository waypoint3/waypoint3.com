import styles from "./Logo.module.css";

interface LogoProps {
    containerClassName?: string
    topClassName?: string
    bottomClassName?: string
}

export default function Logo(props: LogoProps) {
    return (
        <div className={`${styles.logo} ${props.containerClassName ? props.containerClassName : ''} flex flex-col uppercase font-display text-center select-none`}>
            <span className={`${styles.top} ${props.topClassName ? props.topClassName : ''} font-bold text-2xl`}>Willow Tree</span>
            <span className={`${styles.bottom} ${props.bottomClassName ? props.bottomClassName : ''} text-base`}>Technical Services</span>
        </div>
    )
}