import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Payment Method Icons */}
        <div className="footer-payments">
          <div className="payment-icons">
            <img
              src="https://www.takealot.com/b245eaf03bdcf749830177d9d525bfaf08b264f9/static/media/src/images/payment-providers/visa.svg-af3e99c35d73e394b54d.svg"
              alt="Visa"
              loading="lazy"
            />
            <img
              src="https://www.takealot.com/b245eaf03bdcf749830177d9d525bfaf08b264f9/static/media/src/images/payment-providers/mastercard.svg-23a3ce15866685c8506f.svg"
              alt="Mastercard"
              loading="lazy"
            />
            <img
              src="https://www.takealot.com/b245eaf03bdcf749830177d9d525bfaf08b264f9/static/media/src/images/payment-providers/american-express.svg-c015bac32018ca240301.svg"
              alt="American Express"
              loading="lazy"
            />
            <img
              src="https://www.takealot.com/b245eaf03bdcf749830177d9d525bfaf08b264f9/static/media/src/images/payment-providers/diners-club-international.svg-1fbac96b68e4b755fc49.svg"
              alt="Diners Club International"
              loading="lazy"
            />
            <img
              src="https://www.takealot.com/b245eaf03bdcf749830177d9d525bfaf08b264f9/static/media/src/images/payment-providers/payfast.svg-d10895e3af0dedb31817.svg"
              alt="PayFast"
              loading="lazy"
            />
            <img
              src="https://www.takealot.com/b245eaf03bdcf749830177d9d525bfaf08b264f9/static/media/src/images/payment-providers/ebucks.svg-56934a5cf17963365d09.svg"
              alt="eBucks"
              loading="lazy"
            />
            <img
              src="https://www.takealot.com/b245eaf03bdcf749830177d9d525bfaf08b264f9/static/media/src/images/payment-providers/mobicred.svg-bda9a4b182e4dd57d514.svg"
              alt="Mobicred"
              loading="lazy"
            />
            <img
              src="https://www.takealot.com/b245eaf03bdcf749830177d9d525bfaf08b264f9/static/media/src/images/payment-providers/Discovery-Miles-web-icon.png-96dc92f96edcb8d82f52.png"
              alt="Discovery Miles"
              loading="lazy"
            />
            <img
              src="https://www.takealot.com/b245eaf03bdcf749830177d9d525bfaf08b264f9/static/media/src/images/payment-providers/payflex.svg-8961bc011a0bea670239.svg"
              alt="Payflex"
              loading="lazy"
            />
          </div>
        </div>

        {/* Website Credits */}
        <div className="footer-credits">
          <p>
            Website by{" "}
            <a
              href="https://github.com/Zu3ty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chante' Schnetler
            </a>
          </p>
        </div>

        {/* Link to Original Site */}
        <div className="footer-link-to-original">
          <p>
            Visit the original website:{" "}
            <a
              href="https://www.takealot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Takealot
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          <p>&copy; 2025 Lumina Candles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
