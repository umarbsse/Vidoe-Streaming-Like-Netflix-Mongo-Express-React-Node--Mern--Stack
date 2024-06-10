import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
        <footer className="footer footer-default">
            <div className="container-fluid">
                <div className="footer-top">
                    <div className="row">
                    <div className="col-xl-3 col-lg-6 mb-5 mb-lg-0">
                        <div className="footer-logo">
                            {/* Logo */}
                            <div className="logo-default">
                                <Link className="navbar-brand text-primary" href="./index.html"> 
                                    <img className="img-fluid logo" src="./assets/images/logo.webp" loading="lazy" alt="streamit" />
                                </Link>
                            </div>
                            <div className="logo-hotstar">
                                <Link className="navbar-brand text-primary" href="./index.html"> 
                                    <img className="img-fluid logo" src="./assets/images/logo-hotstar.webp" loading="lazy" alt="streamit" />
                                </Link>
                            </div> 
                            <div className="logo-prime">
                                <Link className="navbar-brand text-primary" href="./index.html"> 
                                    <img className="img-fluid logo" src="./assets/images/logo-prime.webp" loading="lazy" alt="streamit" />
                                </Link>
                            </div> 
                            <div className="logo-hulu">
                                <Link className="navbar-brand text-primary" href="./index.html"> 
                                    <img className="img-fluid logo" src="./assets/images/logo-hulu.webp" loading="lazy" alt="streamit" />
                                </Link>
                            </div>
                        </div>
                        <p className="mb-4 font-size-14">Email us: <span className="text-white">customer@streamit.com</span>
                        </p>
                        <p className="text-uppercase letter-spacing-1 font-size-14 mb-1">customer services</p>
                        <p className="mb-0 contact text-white">+ (480) 555-0103</p>
                    </div>
                    <div className="col-xl-2 col-lg-6 mb-5 mb-lg-0">
                        <h4 className="footer-link-title">Quick Links</h4>
                        <ul className="list-unstyled footer-menu">
                        <li className="mb-3">
                            <Link href="./about-us.html" className="ms-3">about us</Link>
                        </li>
                        <li className="mb-3">
                            <Link href="./blog/blog-listing.html" className="ms-3">Blog</Link>
                        </li>
                        <li className="mb-3">
                            <Link href="./pricing-plan.html" className="ms-3">Pricing Plan</Link>
                        </li>
                        <li>
                            <Link href="./faq.html" className="ms-3">FAQ</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-6 mb-5 mb-lg-0">
                        <h4 className="footer-link-title">Movies to watch</h4>
                        <ul className="list-unstyled footer-menu">
                        <li className="mb-3">
                            <Link href="./view-all-movie.html" className="ms-3">Top trending</Link>
                        </li>
                        <li className="mb-3">
                            <Link href="./view-all-movie.html" className="ms-3">Recommended</Link>
                        </li>
                        <li>
                            <Link href="./view-all-movie.html" className="ms-3">Popular</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-6 mb-5 mb-lg-0">
                        <h4 className="footer-link-title">About company</h4>
                        <ul className="list-unstyled footer-menu">
                        <li className="mb-3">
                            <Link href="./contact-us.html" className="ms-3">contact us</Link>
                        </li>
                        <li className="mb-3">
                            <Link href="./privacy-policy.html" className="ms-3">privacy policy</Link>
                        </li>
                        <li>
                            <Link href="./terms-of-use.html" className="ms-3">Terms of use</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <h4 className="footer-link-title">Subscribe Newsletter</h4>
                        <div className="mailchimp mailchimp-dark">
                        <div className="input-group mb-3 mt-4">
                            <input type="text" className="form-control mb-0 font-size-14" placeholder="Email*" aria-describedby="button-addon2"/>
                            <div className="iq-button">
                            <button type="submit" className="btn btn-sm" id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                        </div>
                        <div className="d-flex align-items-center mt-5">
                        <span className="font-size-14 me-2">Follow Us:</span>
                            <ul className="p-0 m-0 list-unstyled widget_social_media">
                            <li className="">
                                <Link href="https://www.facebook.com/" className="position-relative">
                                <i className="fab fa-facebook"></i>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="https://twitter.com/" className="position-relative">
                                <i className="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="https://github.com/" className="position-relative">
                                <i className="fab fa-github"></i>
                                </Link>
                            </li>
                            <li className="">
                                <Link href="https://www.instagram.com/" className="position-relative">
                                <i className="fab fa-instagram"></i>
                                </Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-bottom border-top">
                    <div className="row align-items-center">
                    <div className="col-md-6">
                        <ul className="menu list-inline p-0 d-flex flex-wrap align-items-center">
                        <li className="menu-item">
                            <Link href="#"> Terms Of Use </Link>
                        </li>
                        <li id="menu-item-7316" className="menu-item">
                            <Link href="./privacy-policy.html"> Privacy-Policy </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="./faq.html"> FAQ </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="./playlist.html"> Watch List </Link>
                        </li>
                        </ul>
                        <p className="font-size-14">© <span className="currentYear"></span> <span className="text-primary">STREAMIT</span>. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved. </p>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <h6 className="font-size-14 pb-1">Download Streamit Apps </h6>
                        <div className="d-flex align-items-center">
                        <Link className="app-image" href="#">
                            <img src="./assets/images/footer/google-play.webp" loading="lazy" alt="play-store" />
                        </Link>
                        <br />
                        <Link className="ms-3 app-image" href="#">
                            <img src="./assets/images/footer/apple.webp" loading="lazy" alt="app-store" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </footer>

  <div className="rtl-box">
      <Link className="btn btn-icon btn-setting" id="settingbutton" data-bs-toggle="offcanvas" data-bs-target="#live-customizer" role="button" aria-controls="live-customizer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.875em" height="1.875em" viewBox="0 0 20 20" fill="white">
              <path fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd" />
          </svg>
      </Link>
      <div className="offcanvas offcanvas-end live-customizer on-rtl end" tabIndex="-1" id="live-customizer"
          data-bs-scroll="true" data-bs-backdrop="false" aria-labelledby="live-customizer-label" aria-modal="true"
          role="dialog">
          <div className="offcanvas-header gap-3">
              <div className="d-flex align-items-center">
                  <h5 className="offcanvas-title text-dark" id="live-customizer-label">Live Customizer</h5>
              </div>
              <div className="d-flex gap-1 align-items-center">
                  <button className="btn btn-icon text-primary" data-reset="settings" data-bs-toggle="tooltip" data-bs-placement="left" aria-label="Reset All Settings"
                      data-bs-original-title="Reset All Settings">
                      <span className="btn-inner">
                          <i className="fa-solid fa-arrows-rotate"></i>
                      </span>
                  </button>
                  <button type="button" className="btn btn-icon btn-close px-0 text-reset shadow-none text-dark" data-bs-dismiss="offcanvas" aria-label="Close">
                  </button>
              </div>            
          </div>
          <div className="offcanvas-body pt-0">
              <div className="modes row row-cols-2 gx-2">
                  <div className="col">
                      <div data-setting="attribute" className="text-center w-100">
                          <input type="radio" value="ltr" className="btn-check" name="theme_scheme_direction" data-prop="dir"
                              id="theme-scheme-direction-ltr" checked onChange={e => {}}/>
                          <label className="btn dir-btn cutomizer-button w-100" htmlFor="theme-scheme-direction-ltr">
                              LTR
                          </label>
                      </div>
                  </div>
                  <div className="col">
                      <div data-setting="attribute" className="text-center w-100">
                          <input type="radio" value="rtl" className="btn-check" name="theme_scheme_direction" data-prop="dir"
                              id="theme-scheme-direction-rtl"/>
                          <label className="btn dir-btn cutomizer-button w-100" htmlFor="theme-scheme-direction-rtl">
                              RTL
                          </label>
                      </div>
                  </div>
              </div>
              <div className="modes mt-3">
                  <div className="color-customizer mb-3">
                      <h6 className="mb-0 title-customizer">Color Customizer</h6>
                  </div>
                  <div className="row row-cols-2 gx-2">
                      <div className="col mb-3">
                          <div data-setting="attribute" className="text-center w-100">
                              <input type="radio" value="dark" className="btn-check" name="theme_style_appearance"
                                  data-prop="data-bs-theme" id="theme-scheme-color-netflix" data-colors="{&quot;primary&quot;: &quot;#e50914&quot;, &quot;secondary&quot;: &quot;#adafb8&quot;, &quot;tertiray&quot;: &quot;#adafb8&quot;}" checked onChange={e => {}}/>
                              <label className="btn dir-btn cutomizer-button w-100" htmlFor="theme-scheme-color-netflix">
                                  Netflix
                              </label>
                          </div>
                      </div>
                      <div className="col mb-3">
                          <div data-setting="attribute" className="text-center w-100">
                              <input type="radio" value="hotstar" className="btn-check" name="theme_style_appearance"
                                  data-prop="data-bs-theme" id="theme-scheme-color-hotstar" data-colors="{&quot;primary&quot;: &quot;#0959E4&quot;, &quot;secondary&quot;: &quot;#adafb8&quot;, &quot;tertiray&quot;: &quot;#EA4335&quot;}"/>
                              <label className="btn dir-btn cutomizer-button w-100" htmlFor="theme-scheme-color-hotstar">
                                  Hotstar
                              </label>
                          </div>
                      </div>
                      <div className="col">
                          <div data-setting="attribute" className="text-center w-100">
                              <input type="radio" value="amazonprime" className="btn-check" name="theme_style_appearance"
                                  data-prop="data-bs-theme" id="theme-scheme-color-prime" data-colors="{&quot;primary&quot;: &quot;#1A98FF&quot;, &quot;secondary&quot;: &quot;#adafb8&quot;, &quot;tertiray&quot;: &quot;#89F425&quot;}"/>
                              <label className="btn dir-btn cutomizer-button w-100" htmlFor="theme-scheme-color-prime">
                                  Prime
                              </label>
                          </div>
                      </div>
                      <div className="col">
                          <div data-setting="attribute" className="text-center w-100">
                              <input type="radio" value="hulu" className="btn-check" name="theme_style_appearance"
                                  data-prop="data-bs-theme" id="theme-scheme-color-hulu" data-colors="{&quot;primary&quot;: &quot;#3ee783&quot;, &quot;secondary&quot;: &quot;#adafb8&quot;, &quot;tertiray&quot;: &quot;#0E0E0E&quot;}"/>
                              <label className="btn dir-btn cutomizer-button w-100" htmlFor="theme-scheme-color-hulu">
                                  Hulu
                              </label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>  <div id="back-to-top" style={{display:"none"}}>
     <Link className="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle text-white" id="top" href="#top">
        <i className="fa-solid fa-chevron-up"></i>
     </Link>
  </div>
    </>
  )
}
