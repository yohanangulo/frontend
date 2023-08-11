'use client'
export default function Home() {
  return (
  <main className="content-wrapper oh">
    {/* Navigation */}
    <header className="nav-type-1">
      <div className="top-bar hidden-sm hidden-xs">
        <div className="container">
          <div className="top-bar-line">
            <div className="row">
              <div className="top-bar-links">
                <ul className="col-sm-6 top-bar-acc">
                  <li className="top-bar-link">
                    <a href="#">My Account</a>
                  </li>
                  <li className="top-bar-link">
                    <a href="#">My Wishlist</a>
                  </li>
                  <li className="top-bar-link">
                    <a href="#">Newsletter</a>
                  </li>
                  <li className="top-bar-link">
                    <a href="#">Login</a>
                  </li>
                  <li className="top-bar-link">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
                <ul className="col-sm-6 text-right top-bar-currency-language">
                  <li>
                    Currency:{" "}
                    <a href="#">
                      USD
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="currency-dropdown">
                      <ul>
                        <li>
                          <a href="#">USD</a>
                        </li>
                        <li>
                          <a href="#">EUR</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="language">
                    Language:{" "}
                    <a href="#">
                      ENG
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="language-dropdown">
                      <ul>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                        <li>
                          <a href="#">German</a>
                        </li>
                        <li>
                          <a href="#">Chinese</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="social-icons">
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end top bar */}
      <nav className="navbar navbar-static-top">
        <div className="navigation" id="sticky-nav">
          <div className="container relative">
            <div className="row">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                {/* Mobile cart */}
                <div className="nav-cart mobile-cart hidden-lg hidden-md">
                  <div className="nav-cart-outer">
                    <div className="nav-cart-inner">
                      <a href="#" className="nav-cart-icon">
                        2
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end navbar-header */}
              <div className="header-wrap">
                <div className="header-wrap-holder">
                  {/* Search */}
                  <div className="nav-search hidden-sm hidden-xs">
                    <form method="get">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button type="submit" className="search-button">
                        <i className="icon icon_search" />
                      </button>
                    </form>
                  </div>
                  {/* Logo */}
                  <div className="logo-container">
                    <div className="logo-wrap text-center">
                      <a href="index.html">
                        <img
                          className="logo"
                          src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/logo_dark.png"
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                  {/* Cart */}
                  <div className="nav-cart-wrap hidden-sm hidden-xs">
                    <div className="nav-cart right">
                      <div className="nav-cart-outer">
                        <div className="nav-cart-inner">
                          <a href="#" className="nav-cart-icon">
                            2
                          </a>
                        </div>
                      </div>
                      <div className="nav-cart-container">
                        <div className="nav-cart-items">
                          <div className="nav-cart-item clearfix">
                            <div className="nav-cart-img">
                              <a href="#">
                                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/cart_small_1.jpg" alt="" />
                              </a>
                            </div>
                            <div className="nav-cart-title">
                              <a href="#">Ladies Bag</a>
                              <div className="nav-cart-price">
                                <span>1 x</span>
                                <span>1250.00</span>
                              </div>
                            </div>
                            <div className="nav-cart-remove">
                              <a href="#">
                                <i className="icon icon_close" />
                              </a>
                            </div>
                          </div>
                          <div className="nav-cart-item clearfix">
                            <div className="nav-cart-img">
                              <a href="#">
                                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/cart_small_2.jpg" alt="" />
                              </a>
                            </div>
                            <div className="nav-cart-title">
                              <a href="#">Sequin Suit longer title</a>
                              <div className="nav-cart-price">
                                <span>1 x</span>
                                <span>1250.00</span>
                              </div>
                            </div>
                            <div className="nav-cart-remove">
                              <a href="#">
                                <i className="icon icon_close" />
                              </a>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end cart items */}
                        <div className="nav-cart-summary">
                          <span>Cart Subtotal</span>
                          <span className="total-price">$1799.00</span>
                        </div>
                        <div className="nav-cart-actions mt-20">
                          <a
                            href="shop-cart.html"
                            className="btn btn-md btn-dark"
                          >
                            <span>View Cart</span>
                          </a>
                          <a
                            href="shop-checkout.html"
                            className="btn btn-md btn-color mt-10"
                          >
                            <span>Proceed to Checkout</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-cart-amount right">
                      <span>
                        Cart /<a href="#"> $1299.50</a>
                      </span>
                    </div>
                  </div>{" "}
                  {/* end cart */}
                </div>
              </div>{" "}
              {/* end header wrap */}
              <div className="nav-wrap">
                <div className="collapse navbar-collapse" id="navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li id="mobile-search" className="hidden-lg hidden-md">
                      <form method="get" className="mobile-search relative">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <button type="submit" className="search-button">
                          <i className="icon icon_search" />
                        </button>
                      </form>
                    </li>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul className="dropdown-menu">
                        <li className="dropdown">
                          <a href="about-us.html">About Us</a>
                          <i className="fa fa-angle-down dropdown-trigger" />
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Example of submenu</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="faq.html">F.A.Q</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Categories</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul className="dropdown-menu megamenu">
                        <li>
                          <div className="megamenu-wrap">
                            <div className="row">
                              <div className="col-md-3 megamenu-item">
                                <h6>For Man</h6>
                                <ul className="menu-list">
                                  <li>
                                    <a href="#">Shirts</a>
                                  </li>
                                  <li>
                                    <a href="#">Jeans</a>
                                  </li>
                                  <li>
                                    <a href="#">Accessories</a>
                                  </li>
                                  <li>
                                    <a href="#">Shoes</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 megamenu-item">
                                <h6>For Woman</h6>
                                <ul className="menu-list">
                                  <li>
                                    <a href="#">Dresses</a>
                                  </li>
                                  <li>
                                    <a href="#">Coats</a>
                                  </li>
                                  <li>
                                    <a href="#">Accessories</a>
                                  </li>
                                  <li>
                                    <a href="#">Sandals</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 megamenu-item">
                                <h6>Accessories</h6>
                                <ul className="menu-list">
                                  <li>
                                    <a href="#">Wallets</a>
                                  </li>
                                  <li>
                                    <a href="#">Watches</a>
                                  </li>
                                  <li>
                                    <a href="#">Belts</a>
                                  </li>
                                  <li>
                                    <a href="#">Scarfs</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 megamenu-item">
                                <h6>Bags</h6>
                                <ul className="menu-list">
                                  <li>
                                    <a href="#">Leather</a>
                                  </li>
                                  <li>
                                    <a href="#">Sports</a>
                                  </li>
                                  <li>
                                    <a href="#">Street Style</a>
                                  </li>
                                  <li>
                                    <a href="#">Creative</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>{" "}
                    {/* end categories */}
                    <li className="dropdown">
                      <a href="#">Blog</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul className="dropdown-menu">
                        <li>
                          <a href="blog-standard.html">Standard</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Single Post</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Shop</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul className="dropdown-menu">
                        <li>
                          <a href="shop-catalog.html">Catalog</a>
                        </li>
                        <li>
                          <a href="shop-collections.html">Collections</a>
                        </li>
                        <li>
                          <a href="shop-single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="my-account.html">My Account</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Elements</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul className="dropdown-menu">
                        <li>
                          <a href="shortcodes.html">Shortcodes</a>
                        </li>
                        <li>
                          <a href="typography.html">Typography</a>
                        </li>
                      </ul>
                    </li>
                    <li className="mobile-links">
                      <ul>
                        <li>
                          <a href="#">Login</a>
                        </li>
                        <li>
                          <a href="#">My Account</a>
                        </li>
                        <li>
                          <a href="#">My Wishlist</a>
                        </li>
                      </ul>
                    </li>
                  </ul>{" "}
                  {/* end menu */}
                </div>{" "}
                {/* end collapse */}
              </div>{" "}
              {/* end col */}
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end container */}
        </div>{" "}
        {/* end navigation */}
      </nav>{" "}
      {/* end navbar */}
    </header>{" "}
    {/* end navigation */}
    {/* Hero Slider */}
    <section className="section-wrap nopadding">
      <div className="container">
        <div className="entry-slider">
          <div className="flexslider" id="flexslider-hero">
            <ul className="slides clearfix">
              <li>
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/slider/1.jpg" />
                <div className="img-holder img-1" />
                <div className="hero-holder text-center right-align">
                  <div className="hero-lines">
                    <h1 className="hero-heading white">Collection 2017</h1>
                    <h4 className="hero-subheading white uppercase">
                      HOT AND FRESH TRENDS OF THIS YEAR
                    </h4>
                  </div>
                  <a href="#" className="btn btn-lg btn-white">
                    <span>Shop Now</span>
                  </a>
                </div>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/slider/2.jpg" alt="" />
                <div className="img-holder img-2" />
                <div className="hero-holder text-center">
                  <div className="hero-lines">
                    <h1 className="hero-heading white large">Winter Sales</h1>
                  </div>
                  <a href="#" className="btn btn-lg btn-white">
                    <span>Shop Now</span>
                  </a>
                </div>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/slider/3.jpg" alt="" />
                <div className="img-holder img-3" />
                <div className="hero-holder left-align">
                  <div className="hero-lines">
                    <h1 className="hero-heading white">Autumn 2017</h1>
                    <p className="white">
                      A-ha Theme is the Best E-Commerce solution
                    </p>
                    <p className="white">
                      Packed with tons of features and unique styles
                    </p>
                  </div>
                  <a href="#" className="btn btn-lg btn-white">
                    <span>Shop Now</span>
                  </a>
                </div>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/slider/4.jpg" alt="" />
                <div className="img-holder img-4" />
                <div className="hero-holder text-center right-align">
                  <div className="hero-lines">
                    <h1 className="hero-heading white">Summer 2017</h1>
                    <p className="white">
                      A-ha Theme is the Best E-Commerce solution
                    </p>
                    <p className="white">
                      Packed with tons of features and unique styles
                    </p>
                  </div>
                  <a href="#" className="btn btn-lg btn-white">
                    <span>Shop Now</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* end slider */}
      </div>
    </section>{" "}
    {/* end hero slider */}
    {/* New Arrivals */}
    <section className="section-wrap new-arrivals pb-40">
      <div className="container">
        <div className="row heading-row">
          <div className="col-md-12 text-center">
            <h2 className="heading uppercase">
              <small>New Arrivals</small>
            </h2>
          </div>
        </div>
        <div className="row row-10">
          <div className="col-md-3 col-xs-6">
            <div className="product-item">
              <div className="product-img">
                <a href="#">
                  <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_1.jpg" alt="" />
                  <img
                    src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_1_back.jpg"
                    alt=""
                    className="back-img"
                  />
                </a>
                <div className="product-label">
                  <span className="sale">sale</span>
                </div>
                <div className="product-actions">
                  <a
                    href="#"
                    className="product-add-to-compare"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to compare"
                  >
                    <i className="fa fa-exchange" />
                  </a>
                  <a
                    href="#"
                    className="product-add-to-wishlist"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to wishlist"
                  >
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <a href="#" className="product-quickview">
                  Quick View
                </a>
              </div>
              <div className="product-details">
                <h3>
                  <a className="product-title" href="shop-single-product.html">
                    Night Party Dress
                  </a>
                </h3>
                <span className="price">
                  <del>
                    <span>$388.00</span>
                  </del>
                  <ins>
                    <span className="ammount">$159.99</span>
                  </ins>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="product-item">
              <div className="product-img">
                <a href="#">
                  <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_2.jpg" alt="" />
                  <img
                    src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_2_back.jpg"
                    alt=""
                    className="back-img"
                  />
                </a>
                <div className="product-actions">
                  <a
                    href="#"
                    className="product-add-to-compare"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to compare"
                  >
                    <i className="fa fa-exchange" />
                  </a>
                  <a
                    href="#"
                    className="product-add-to-wishlist"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to wishlist"
                  >
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <a href="#" className="product-quickview">
                  Quick View
                </a>
              </div>
              <div className="product-details">
                <h3>
                  <a className="product-title" href="shop-single-product.html">
                    Elegant White Dress
                  </a>
                </h3>
                <span className="price">
                  <ins>
                    <span className="ammount">$219.00</span>
                  </ins>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="product-item">
              <div className="product-img">
                <a href="#">
                  <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_3.jpg" alt="" />
                  <img
                    src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_3_back.jpg"
                    alt=""
                    className="back-img"
                  />
                </a>
                <span className="sold-out valign">out of stock</span>
                <div className="product-actions">
                  <a
                    href="#"
                    className="product-add-to-compare"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to compare"
                  >
                    <i className="fa fa-exchange" />
                  </a>
                  <a
                    href="#"
                    className="product-add-to-wishlist"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to wishlist"
                  >
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <a href="#" className="product-quickview">
                  Quick View
                </a>
              </div>
              <div className="product-details">
                <h3>
                  <a className="product-title" href="shop-single-product.html">
                    Long Black Dress
                  </a>
                </h3>
                <span className="price">
                  <ins>
                    <span className="ammount">$99.00</span>
                  </ins>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="product-item">
              <div className="product-img">
                <a href="#">
                  <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_4.jpg" alt="" />
                  <img
                    src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_4_back.jpg"
                    alt=""
                    className="back-img"
                  />
                </a>
                <div className="product-actions">
                  <a
                    href="#"
                    className="product-add-to-compare"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to compare"
                  >
                    <i className="fa fa-exchange" />
                  </a>
                  <a
                    href="#"
                    className="product-add-to-wishlist"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to wishlist"
                  >
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <a href="#" className="product-quickview">
                  Quick View
                </a>
              </div>
              <div className="product-details">
                <h3>
                  <a className="product-title" href="shop-single-product.html">
                    Sexy Pink Dress
                  </a>
                </h3>
                <span className="price">
                  <ins>
                    <span className="ammount">$120.00</span>
                  </ins>
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end row */}
      </div>
    </section>{" "}
    {/* end new arrivals */}
    {/* Newsletter */}
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="newsletter-box">
            <h5 className="uppercase">Subscribe to Receive Our Updates</h5>
            <form>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Your email"
              />
              <input
                type="submit"
                className="newsletter-submit btn btn-md btn-dark"
                defaultValue="subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Best Sellers */}
    <section className="section-wrap pb-0">
      <div className="container">
        <div className="row heading-row">
          <div className="col-md-12 text-center">
            <h2 className="heading uppercase">
              <small>Best Sellers</small>
            </h2>
          </div>
        </div>
        <div className="row row-10">
          <div className="col-md-3 col-xs-6 animated-from-left">
            <div className="product-item">
              <div className="product-img">
                <a href="#">
                  <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_5.jpg" alt="" />
                  <img
                    src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_5_back.jpg"
                    alt=""
                    className="back-img"
                  />
                </a>
                <div className="product-actions">
                  <a
                    href="#"
                    className="product-add-to-compare"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to compare"
                  >
                    <i className="fa fa-exchange" />
                  </a>
                  <a
                    href="#"
                    className="product-add-to-wishlist"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to wishlist"
                  >
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <a href="#" className="product-quickview">
                  Quick View
                </a>
              </div>
              <div className="product-details">
                <h3>
                  <a className="product-title" href="shop-single-product.html">
                    Minty Dress
                  </a>
                </h3>
                <span className="price">
                  <ins>
                    <span className="ammount">$399.00</span>
                  </ins>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-6 animated-from-left">
            <div className="product-item">
              <div className="product-img">
                <a href="#">
                  <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_6.jpg" alt="" />
                  <img
                    src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_6_back.jpg"
                    alt=""
                    className="back-img"
                  />
                </a>
                <div className="product-label">
                  <span className="sale">sale</span>
                </div>
                <div className="product-actions">
                  <a
                    href="#"
                    className="product-add-to-compare"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to compare"
                  >
                    <i className="fa fa-exchange" />
                  </a>
                  <a
                    href="#"
                    className="product-add-to-wishlist"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to wishlist"
                  >
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <a href="#" className="product-quickview">
                  Quick View
                </a>
              </div>
              <div className="product-details">
                <h3>
                  <a className="product-title" href="shop-single-product.html">
                    Sexy White Dress
                  </a>
                </h3>
                <span className="price">
                  <ins>
                    <span className="ammount">$119.00</span>
                  </ins>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-6 animated-from-left">
            <div className="product-item">
              <div className="product-img">
                <a href="#">
                  <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_7.jpg" alt="" />
                  <img
                    src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_7_back.jpg"
                    alt=""
                    className="back-img"
                  />
                </a>
                <div className="product-actions">
                  <a
                    href="#"
                    className="product-add-to-compare"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to compare"
                  >
                    <i className="fa fa-exchange" />
                  </a>
                  <a
                    href="#"
                    className="product-add-to-wishlist"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to wishlist"
                  >
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <a href="#" className="product-quickview">
                  Quick View
                </a>
              </div>
              <div className="product-details">
                <h3>
                  <a className="product-title" href="shop-single-product.html">
                    Elegant Pink Dress
                  </a>
                </h3>
                <span className="price">
                  <ins>
                    <span className="ammount">$1379.00</span>
                  </ins>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-6 animated-from-left">
            <div className="product-item">
              <div className="product-img">
                <a href="#">
                  <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_8.jpg" alt="" />
                  <img
                    src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_8_back.jpg"
                    alt=""
                    className="back-img"
                  />
                </a>
                <div className="product-label">
                  <span className="sale">sale</span>
                </div>
                <div className="product-actions">
                  <a
                    href="#"
                    className="product-add-to-compare"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to compare"
                  >
                    <i className="fa fa-exchange" />
                  </a>
                  <a
                    href="#"
                    className="product-add-to-wishlist"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to wishlist"
                  >
                    <i className="fa fa-heart" />
                  </a>
                </div>
                <a href="#" className="product-quickview">
                  Quick View
                </a>
              </div>
              <div className="product-details">
                <h3>
                  <a className="product-title" href="shop-single-product.html">
                    Gray California Dress
                  </a>
                </h3>
                <span className="price">
                  <del>
                    <span>$350.00</span>
                  </del>
                  <ins>
                    <span className="ammount">$150.00</span>
                  </ins>
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end row */}
      </div>
    </section>{" "}
    {/* end best sellers */}
    {/* Partners */}
    <section className="section-wrap partners pt-0 pb-50">
      <div className="container">
        <div className="row">
          <div id="owl-partners" className="owl-carousel owl-theme">
            <div className="item">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_1.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_2.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_3.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_4.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_5.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_6.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_1.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_2.png" alt="" />
              </a>
            </div>
          </div>{" "}
          {/* end carousel */}
        </div>
      </div>
    </section>{" "}
    {/* end partners */}
    {/* Footer Type-1 */}
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
    </footer>{" "}
    {/* end footer */}
  </main>
  )
}
