import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
<footer className="footer-container">
    <div className="footer-menu">
        <a href="#">Inicio</a>
        <a href="#">About Us</a>
        <a href="#">Contacto</a>
    </div>

    <div className="footer-rrss">
        <a href="https://www.instagram.com/arte.digital.blog/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
        </a>
        <a href="https://www.tiktok.com/@arte.digital.blog" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={24} />
        </a>
    </div>

    <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Arte Digital Blog. Todos los derechos reservados.</p>
    </div>
</footer>
};

export default Footer;