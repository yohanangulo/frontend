const Footer = () => {
  return (
    <footer className="footer footer-type-1 bg-white">
      <div className="container">
        <div className="footer-widgets top-bottom-dividers pb-mdm-20">
          <div className="row">
            <div className="col-md-2 col-sm-4 col-xs-4 col-xxs-12">
              <div className="widget footer-links">
                <h5 className="widget-title uppercase">Information</h5>
                <ul className="list-no-dividers">
                  <li>
                    <a href="#">Our stores</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Business with us</a>
                  </li>
                  <li>
                    <a href="#">Delivery information</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-4 col-xxs-12">
              <div className="widget footer-links">
                <h5 className="widget-title uppercase">Help</h5>
                <ul className="list-no-dividers">
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Track order</a>
                  </li>
                  <li>
                    <a href="#">F.A.Q</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-4 col-xxs-12">
              <div className="widget footer-links">
                <h5 className="widget-title uppercase">Account</h5>
                <ul className="list-no-dividers">
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Order history</a>
                  </li>
                  <li>
                    <a href="#">Special gifts</a>
                  </li>
                  <li>
                    <a href="#">Track order</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="widget">
                <h5 className="widget-title uppercase">about us</h5>
                <p className="mb-0">
                  A-ha Shop is a very slick and clean e-commerce template with
                  endless possibilities. Creating an awesome clothes store with
                  this Theme is easy than you can imagine.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="widget footer-get-in-touch">
                <h5 className="widget-title uppercase">Contact</h5>
                <address className="footer-address">
                  <span>Address:</span> Philippines, PO Box 620067, Talay st.
                  66, A-ha inc.
                </address>
                <p>
                  Phone:{" "}
                  <a href="tel:+1-888-1554-456-123">+ 1-888-1554-456-123</a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:themesupport@gmail.com">
                    themesupport@gmail.com
                  </a>
                </p>
                <div className="social-icons rounded mt-20">
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-vimeo" />
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* end stay in touch */}
          </div>
        </div>
      </div>{" "}
      {/* end container */}
      <div className="bottom-footer bg-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 copyright sm-text-center">
              <span>
                © Aha Shop | Made by{" "}
                <a href="https://deothemes.com">DeoThemes</a>
              </span>
            </div>
            <div className="col-sm-4 text-center">
              <div id="back-to-top">
                <a href="#top">
                  <i className="fa fa-angle-up" />
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 footer-payment-systems text-right sm-text-center mt-sml-10">
              <i className="fa fa-cc-paypal" />
              <i className="fa fa-cc-visa" />
              <i className="fa fa-cc-mastercard" />
              <i className="fa fa-cc-discover" />
              <i className="fa fa-cc-amex" />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end bottom footer */}
    </footer>
  );
};
export default Footer;
