import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank" rel="noreferrer">
                            <img src="/images/facebook.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank" rel="noreferrer">
                            <img src="/images/twitter.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank" rel="noreferrer">
                            <img src="/images/instagram.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Logo Organo" />
            </section>
            <section>
                <p>
                    Developed by Alura.
                </p>
            </section>
        </footer>
    );
};

export default Footer;
