import { FaInstagram, FaTiktok } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {

    return(
        <footer className={styles.footerContainer}>
            <div className={styles.footerMenu}>
                <a href="#">Inicio</a>
                <a href="#">About Us</a>
                <a href="#">Contacto</a>
            </div>

            <div className={styles.footerRRSS}>
                <a href="https://www.instagram.com/arte.digital.blog/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                </a>
                <a href="https://www.tiktok.com/@arte.digital.blog" target="_blank" rel="noopener noreferrer">
                    <FaTiktok size={24} />
                </a>
            </div>

            <div className={styles.footerCopyright}>
                <p>&copy; {new Date().getFullYear()} Arte Digital Blog. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;