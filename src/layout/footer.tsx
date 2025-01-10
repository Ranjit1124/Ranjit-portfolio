const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="copyright-text">
                                <p>
                                    Copyright @{new Date().getFullYear()}, <a href="#">Ranjit</a> All
                                    Rights Reserved.
                                </p>
                            </div>
                            <ul className="footer-bottom-nav">
                                {/* <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li> */}
                                <li><a href="https://www.instagram.com/ranjit_7750_/" target="_blank">Instagram</a></li>
                                <li><a  href="https://www.linkedin.com/in/ranjit08" target="_blank">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer