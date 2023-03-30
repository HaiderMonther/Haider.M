import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Monther</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#Career" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Design</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://t.me/Had566"
                className="footer__social-link" target="_blank">
                <i class="bx bxl-telegram"></i>
                </a>
                
                <a href="https://www.instagram.com/ha2000_23/"
                className="footer__social-link" target="_blank">
                <i class="bx bxl-instagram"></i>
                </a>
                
                <a href="https://twitter.com/@hai_m23"
                className="footer__social-link" target="_blank">
                <i class="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">
               &#169; Haider Monther. All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer