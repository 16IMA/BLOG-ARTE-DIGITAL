import styles from "../styles/Header.module.css";

const Header = () => {

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerLogoContainer}>
                <img src="/logo-IMA.png" alt="Logo IMA" className={styles.headerLogo} />
            </div>

            <div className={styles.headerMenuContainer}>
                <img src="/menu-hamburguesa.png" alt="Menú" className={styles.menuIcon} />
            </div>
        </header>
    );
};

export default Header;