import { Link } from 'react-router-dom';
import Footer from "../widgets/Footer";
import Loader from "../widgets/Loader";
import Navbar from "../widgets/Navbar";

export default function Home(props) {
  //const {showAlert} = props;
  return (
    <>
      <span className="screen-darken"></span>
      <Loader/>
      <main className="main-content">
        <Navbar/>

        <section id="home-banner-slider" className="iq-main-slider p-0 swiper banner-home-swiper overflow-hidden"
          data-swiper="home-banner-slider">
          <div className="slider m-0 p-0 swiper-wrapper home-slider">
              <div className="swiper-slide slide s-bg-1 p-0">
                <div className="banner-home-swiper-image">
                    <img src="/assets/images/movies/banner1.webp" alt="" />
                </div>
                <div className="container-fluid position-relative h-100">
                    <div className="slider-inner h-100">
                      <div className="row align-items-center iq-ltr-direction h-100">
                          <div className="col-lg-7 col-md-12">
                            <h1 className="texture-text big-font-5 letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">another
                                danger
                            </h1>
                            <div className="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                                <div className="slider-ratting d-flex align-items-center">
                                  <ul
                                      className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                      </li>
                                  </ul>
                                  <span className="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                  <span className="ms-2">
                                  <img src="/assets/images/movies/imdb-logo.svg" alt="imdb logo" className="img-fluid"/>
                                  </span>
                                </div>
                                <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">action</span>
                                <span className="font-size-14 fw-500 time">2hr 6mins</span>
                            </div>
                            <p className="line-count-3 RightAnimate-two"> Piracy is an act of robbery or criminal violence by ship or
                                boat-borne attackers upon another ship or a coastal area, typically with the goal of stealing cargo and
                                other valuable items or properties. 
                            </p>
                            <div className="trending-list RightAnimate-three">
                                <div className="text-primary genres fw-500"> Genres:
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Action </Link>
                                </div>
                                <div className="text-primary tag fw-500"> Tag:
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Action, </Link>
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Adventure, </Link>
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Horror </Link>
                                </div>
                            </div>
                            <div className="RightAnimate-four">
                                <div className="iq-button">
                                    <Link href="movie-detail.html" className="btn text-uppercase position-relative">
                                        <span className="button-text">play now</span>
                                        <i className="fa-solid fa-play"></i>
                                    </Link>
                                </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                            <Link href="./assets/images/video/trailer.mp4" className="video-open playbtn text-decoration-none"
                                tabIndex="0">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                  y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7"
                                  xmlSpace="preserve">
                                  <polygon className="triangle" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                                      strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                  <circle className="circle" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                                      strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                                </svg>
                                <span className="w-trailor text-uppercase"> Watch Trailer </span>
                            </Link>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="swiper-slide slide s-bg-1 p-0">
                <div className="banner-home-swiper-image">
                    <img src="/assets/images/movies/banner2.webp" alt=""/>
                </div>
                <div className="container-fluid position-relative h-100">
                    <div className="slider-inner h-100">
                      <div className="row align-items-center iq-ltr-direction h-100">
                          <div className="col-lg-7 col-md-12">
                            <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">Bumblebee </h1>
                            <div className="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                                <div className="slider-ratting d-flex align-items-center">
                                  <ul
                                      className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                      </li>
                                  </ul>
                                  <span className="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                  <span className="ms-2">
                                  <img src="/assets/images/movies/imdb-logo.svg" alt="imdb logo" className="img-fluid"/>
                                  </span>
                                </div>
                                <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">action</span>
                                <span className="font-size-14 fw-500 time">2hr 6mins</span>
                            </div>
                            <p className="line-count-3 RightAnimate-two">Optimus Prime sends Autobot scout B-127 to Earth to form a base where they can regroup. Later, the scout befriends a girl named Charlie, who names him Bumblebee. 
                            </p>
                            <div className="trending-list RightAnimate-three">
                                <div className="text-primary genres fw-500"> Genres:
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Action </Link>
                                </div>
                                <div className="text-primary tag fw-500"> Tag:
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Action, </Link>
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Adventure, </Link>
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Horror </Link>
                                </div>
                            </div>
                            <div className="RightAnimate-four">
                                <div className="iq-button">
                                    <Link href="movie-detail.html" className="btn text-uppercase position-relative">
                                        <span className="button-text">play now</span>
                                        <i className="fa-solid fa-play"></i>
                                    </Link>
                                </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                            <Link href="./assets/images/video/trailer.mp4" className="video-open playbtn text-decoration-none"
                                tabIndex="0">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                  y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7"
                                  xmlSpace="preserve">
                                  <polygon className="triangle" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                                      strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                  <circle className="circle" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                                      strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                                </svg>
                                <span className="w-trailor text-uppercase"> Watch Trailer </span>
                            </Link>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="swiper-slide slide s-bg-1 p-0">
                <div className="banner-home-swiper-image">
                    <img src="/assets/images/movies/banner3.webp" alt=""/>
                </div>
                <div className="container-fluid position-relative h-100">
                    <div className="slider-inner h-100">
                      <div className="row align-items-center iq-ltr-direction h-100">
                          <div className="col-lg-7 col-md-12">
                            <h1 className="texture-text big-font letter-spacing-1 line-count-1 text-uppercase mb-0 RightAnimate">another
                                danger
                            </h1>
                            <div className="d-flex flex-wrap align-items-center r-mb-23 RightAnimate-two">
                                <div className="slider-ratting d-flex align-items-center">
                                  <ul
                                      className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                      </li>
                                  </ul>
                                  <span className="text-white ms-2 font-size-14 fw-500">4.3/5</span>
                                  <span className="ms-2">
                                  <img src="/assets/images/movies/imdb-logo.svg" alt="imdb logo" className="img-fluid"/>
                                  </span>
                                </div>
                                <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">action</span>
                                <span className="font-size-14 fw-500 time">2hr 6mins</span>
                            </div>
                            <p className="line-count-3 RightAnimate-two"> Piracy is an act of robbery or criminal violence by ship or
                                boat-borne attackers upon another ship or a coastal area, typically with the goal of stealing cargo and
                                other valuable items or properties. 
                            </p>
                            <div className="trending-list RightAnimate-three">
                                <div className="text-primary genres fw-500"> Genres:
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Action </Link>
                                </div>
                                <div className="text-primary tag fw-500"> Tag:
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Action, </Link>
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Adventure, </Link>
                                  <Link href="view-all-movie.html" className="fw-normal text-white text-decoration-none ms-2"> Horror </Link>
                                </div>
                            </div>
                            <div className="RightAnimate-four">
                                <div className="iq-button">
                                    <Link href="movie-detail.html" className="btn text-uppercase position-relative">
                                        <span className="button-text">play now</span>
                                        <i className="fa-solid fa-play"></i>
                                    </Link>
                                </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                            <Link href="./assets/images/video/trailer.mp4" className="video-open playbtn text-decoration-none"
                                tabIndex="0">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                                  y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7"
                                  xmlSpace="preserve">
                                  <polygon className="triangle" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                                      strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                  <circle className="circle" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                                      strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                                </svg>
                                <span className="w-trailor text-uppercase"> Watch Trailer </span>
                            </Link>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          <div className="swiper-banner-button-prev swiper-nav" id="home-banner-slider-prev">
              <i></i>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" fill="none" stroke="currentColor">
                <circle r="20" cy="22" cx="22"></circle>
              </svg>
          </div>
          <div className="swiper-banner-button-next swiper-nav" id="home-banner-slider-next">
              <i></i>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" fill="none" stroke="currentColor">
                <circle r="20" cy="22" cx="22"></circle>
              </svg>
          </div>
          <div className="swiper-pagination"></div>
          <svg xmlns="http://www.w3.org/2000/svg"  style={{display: "none"}}>
              <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle" fill="none"
                stroke="currentColor">
                <circle r="20" cy="22" cx="22" id="test"></circle>
              </symbol>
          </svg>
        </section>

        <section className="continue-watching-block">
          <div className="container-fluid">
              <div className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between px-2 px-md-3 mb-4">
                    <h5 className="main-title text-capitalize mb-0">continue watching</h5>
                </div>
                <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="4" data-tab="3" data-mobile="2"
                    data-mobile-sm="2" data-autoplay="false" data-loop="false" data-navigation="true" data-pagination="true">
                    <ul className="p-0 swiper-wrapper m-0  list-inline">
                      <li className="swiper-slide">
                          <div className="iq-watching-block">
                              <div className="block-images position-relative">
                                  <div className="iq-image-box overly-images">
                                      <Link href="./movie-detail.html" className="d-block">
                                          <img src="/assets/images/continue-watch/01.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                      </Link>
                                  </div>
                                  <div className="iq-preogress">
                                      <span className="data-left-timing font-size-14 fw-500 text-lowercase">70 of 230 m</span>
                                      <div className="progress" role="progressbar" aria-label="Example 2px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  style={{height:"1px"}}>
                                          <div className="progress-bar" style={{width:"50%"}}></div>
                                      </div>
                                  </div>
                              </div>
                          </div>               </li>
                      <li className="swiper-slide">
                          <div className="iq-watching-block">
                              <div className="block-images position-relative">
                                  <div className="iq-image-box overly-images">
                                      <Link href="./movie-detail.html" className="d-block">
                                          <img src="/assets/images/continue-watch/02.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                      </Link>
                                  </div>
                                  <div className="iq-preogress">
                                      <span className="data-left-timing font-size-14 fw-500 text-lowercase">120 of 130 m</span>
                                      <div className="progress" role="progressbar" aria-label="Example 2px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  style={{height:"1px"}}>
                                          <div className="progress-bar" style={{width:"30%"}}></div>
                                      </div>
                                  </div>
                              </div>
                          </div>               </li>
                      <li className="swiper-slide">
                          <div className="iq-watching-block">
                              <div className="block-images position-relative">
                                  <div className="iq-image-box overly-images">
                                      <Link href="./movie-detail.html" className="d-block">
                                          <img src="/assets/images/continue-watch/03.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                      </Link>
                                  </div>
                                  <div className="iq-preogress">
                                      <span className="data-left-timing font-size-14 fw-500 text-lowercase">60 of 134 m</span>
                                      <div className="progress" role="progressbar" aria-label="Example 2px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  style={{height:"1px"}}>
                                          <div className="progress-bar" style={{width:"90%"}}></div>
                                      </div>
                                  </div>
                              </div>
                          </div>               </li>
                      <li className="swiper-slide">
                          <div className="iq-watching-block">
                              <div className="block-images position-relative">
                                  <div className="iq-image-box overly-images">
                                      <Link href="./movie-detail.html" className="d-block">
                                          <img src="/assets/images/continue-watch/04.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                      </Link>
                                  </div>
                                  <div className="iq-preogress">
                                      <span className="data-left-timing font-size-14 fw-500 text-lowercase">60 of 134 m</span>
                                      <div className="progress" role="progressbar" aria-label="Example 2px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  style={{height:"1px"}}>
                                          <div className="progress-bar" style={{width:"20%"}}></div>
                                      </div>
                                  </div>
                              </div>
                          </div>               </li>
                      <li className="swiper-slide">
                          <div className="iq-watching-block">
                              <div className="block-images position-relative">
                                  <div className="iq-image-box overly-images">
                                      <Link href="./movie-detail.html" className="d-block">
                                          <img src="/assets/images/continue-watch/05.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                      </Link>
                                  </div>
                                  <div className="iq-preogress">
                                      <span className="data-left-timing font-size-14 fw-500 text-lowercase">45 of 157 m</span>
                                      <div className="progress" role="progressbar" aria-label="Example 2px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height:"1px"}}>
                                          <div className="progress-bar" style={{width:"20%"}}></div>
                                      </div>
                                  </div>
                              </div>
                          </div>               </li>
                    </ul>
                    <div className="swiper-button swiper-button-next"></div>
                    <div className="swiper-button swiper-button-prev"></div>
                </div>
              </div>
          </div>
        </section>

        <div className="upcomimg-block">
          <div className="container-fluid">
              <section className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between px-3 my-4">
                    <h5 className="main-title text-capitalize mb-0">Upcoming Movies</h5>
                    <Link href="view-all-movie.html" className="text-primary iq-view-all text-decoration-none flex-none">View All</Link>
                </div>
                <div className="card-style-slider">
                    <div className="position-relative swiper swiper-card" data-slide="6" data-laptop="6" data-tab="3" data-mobile="2"
                      data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
                      <ul className="p-0 swiper-wrapper m-0  list-inline">
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/upcoming/01.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">dinoosaur</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 12mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/upcoming/02.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">godilla</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 22mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/upcoming/03.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">batter caill</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 55mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/upcoming/04.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">the co nouerllng</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 30mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/upcoming/05.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">fast furious</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 45mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/upcoming/06.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">spiderman</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 45mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/upcoming/07.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">onepeoc</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 30mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                      </ul>
                      <div className="swiper-button swiper-button-next"></div>
                      <div className="swiper-button swiper-button-prev"></div>
                    </div>
                </div>
              </section>
          </div>
        </div>

        <div className="latest-block">
          <div className="container-fluid">
              <section className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between px-3 my-4">
                    <h5 className="main-title text-capitalize mb-0">latest Movies</h5>
                    <Link href="view-all-movie.html" className="text-primary iq-view-all text-decoration-none flex-none">View All</Link>
                </div>
                <div className="card-style-slider">
                    <div className="position-relative swiper swiper-card" data-slide="6" data-laptop="6" data-tab="3" data-mobile="2"
                      data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
                      <ul className="p-0 swiper-wrapper m-0  list-inline">
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/latest/01.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">mortal nories</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 12mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/latest/02.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">advetre</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 30mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/latest/03.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">net ailo</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 30mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/latest/04.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">ariivaal</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 45mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/latest/05.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">dramma</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 55mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/latest/06.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">aune</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 25mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/latest/07.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">everest</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 45mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                      </ul>
                      <div className="swiper-button swiper-button-next"></div>
                      <div className="swiper-button swiper-button-prev"></div>
                    </div>
                </div>
              </section>
          </div>
        </div>

        <div className="verticle-slider section-padding-bottom">
          <div className="container-fluid">
              <div className="slider">
                <div className="slider-flex position-relative">
                    <div className="slider--col position-relative">
                      <div className="vertical-slider-prev swiper-button"><i className="iconly-Arrow-Up-2 icli"></i></div>
                      <div className="slider-thumbs" data-swiper="slider-thumbs">
                          <div className="swiper-container " data-swiper="slider-thumbs-inner">
                            <div className="swiper-wrapper top-ten-slider-nav">
                                <div className="swiper-slide swiper-bg">
                                  <div className="block-images position-relative ">
                                      <div className="img-box slider--image">
                                        <img src="/assets/images/top-10/06.webp" className="img-fluid" alt=""
                                            loading="lazy"/>
                                      </div>
                                      <div className="block-description">
                                        <h6 className="iq-title">wars of dragons</h6>
                                        <div className="movie-time d-flex align-items-center my-2">
                                            <span className="text-body">2hr 14mins</span>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <div className="swiper-slide swiper-bg">
                                  <div className="block-images position-relative ">
                                      <div className="img-box slider--image">
                                        <img src="/assets/images/top-10/07.webp" className="img-fluid" alt=""
                                            loading="lazy"/>
                                      </div>
                                      <div className="block-description">
                                        <h6 className="iq-title">the Escape</h6>
                                        <div className="movie-time d-flex align-items-center my-2">
                                            <span className="text-body">1hr 45mins</span>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <div className="swiper-slide swiper-bg">
                                  <div className="block-images position-relative">
                                      <div className="img-box slider--image">
                                        <img src="/assets/images/top-10/08.webp" className="img-fluid" alt=""
                                            loading="lazy"/>
                                      </div>
                                      <div className="block-description">
                                        <h6 className="iq-title">X-Men</h6>
                                        <div className="movie-time d-flex align-items-center my-2">
                                            <span className="text-body">1hr 45mins</span>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <div className="swiper-slide swiper-bg">
                                  <div className="block-images position-relative">
                                      <div className="img-box slider--image">
                                        <img src="/assets/images/top-10/09.webp" className="img-fluid" alt=""
                                            loading="lazy"/>
                                      </div>
                                      <div className="block-description">
                                        <h6 className="iq-title">Logan</h6>
                                        <div className="movie-time d-flex align-items-center my-2">
                                            <span className="text-body">1hr 22mins</span>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <div className="swiper-slide swiper-bg">
                                  <div className="block-images position-relative">
                                      <div className="img-box slider--image">
                                        <img src="/assets/images/top-10/05.webp" className="img-fluid" alt=""
                                            loading="lazy"/>
                                      </div>
                                      <div className="block-description">
                                        <h6 className="iq-title">Black Queen</h6>
                                        <div className="movie-time d-flex align-items-center my-2">
                                            <span className="text-body">1hr 45mins</span>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                      <div className="vertical-slider-next swiper-button"><i className="iconly-Arrow-Down-2 icli"></i></div>
                    </div>
                    <div className="slider-images" data-swiper="slider-images">
                      <div className="swiper-container " data-swiper="slider-images-inner">
                          <div className="swiper-wrapper ">
                            <div className="swiper-slide">
                                <div className="slider--image block-images"><img src="/assets/images/top-10/06.webp"
                                  loading="lazy" alt="" /></div>
                                <div className="description">
                                  <div className="block-description">
                                      <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Comedy</Link>
                                        </li>
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Romance</Link>
                                        </li>
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Action</Link>
                                        </li>
                                      </ul>
                                      <h2 className="iq-title mb-3"><Link href="./tv-show-detail.html">wars of dragons</Link></h2>
                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="slider-ratting d-flex align-items-center">
                                            <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                              <li>
                                                  <i className="fa fa-star" aria-hidden="true"></i>
                                              </li>
                                            </ul>
                                            <span className="text-white ms-2 font-size-14 fw-500">4.3/5</span>                                     
                                        </div>
                                        <span className="text-body">2hr 14mins</span>
                                      </div>
                                      <p className="mt-0 mb-3">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
                                      <div className="iq-button">
                                          <Link href="movie-detail.html" className="btn text-uppercase position-relative">
                                              <span className="button-text">play now</span>
                                              <i className="fa-solid fa-play"></i>
                                          </Link>
                                      </div>
                                  </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider--image block-images"><img src="/assets/images/top-10/07.webp"
                                  loading="lazy" alt="" /></div>
                                <div className="description">
                                  <div className="block-description">
                                      <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Comedy</Link>
                                        </li>
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Romance</Link>
                                        </li>
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Action</Link>
                                        </li>
                                      </ul>
                                      <h2 className="iq-title mb-3"><Link href="./tv-show-detail.html">the Escape</Link></h2>
                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="slider-ratting d-flex align-items-center">
                                            <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                              <li>
                                                  <i className="fa fa-star" aria-hidden="true"></i>
                                              </li>
                                            </ul>
                                            <span className="text-white ms-2 font-size-14 fw-500">4.3/5</span>                                     
                                        </div>
                                        <span className="text-body">1hr 45mins</span>
                                      </div>
                                      <p className="mt-0 mb-3 line-count-2">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
                                      <div className="iq-button">
                                          <Link href="movie-detail.html" className="btn text-uppercase position-relative">
                                              <span className="button-text">play now</span>
                                              <i className="fa-solid fa-play"></i>
                                          </Link>
                                      </div>
                                  </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider--image block-images"><img src="/assets/images/top-10/08.webp"
                                  loading="lazy" alt="" /></div>
                                <div className="description">
                                  <div className="block-description">
                                      <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Comedy</Link>
                                        </li>
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Romance</Link>
                                        </li>
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Action</Link>
                                        </li>
                                      </ul>
                                      <h2 className="iq-title mb-3"><Link href="./tv-show-detail.html">X-Men</Link></h2>
                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="slider-ratting d-flex align-items-center">
                                            <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                              <li>
                                                  <i className="fa fa-star" aria-hidden="true"></i>
                                              </li>
                                            </ul>
                                            <span className="text-white ms-2 font-size-14 fw-500">4.3/5</span>                                     
                                        </div>
                                        <span className="text-body">1hr 50mins</span>
                                      </div>
                                      <p className="mt-0 mb-3">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
                                      <div className="iq-button">
                                          <Link href="movie-detail.html" className="btn text-uppercase position-relative">
                                              <span className="button-text">play now</span>
                                              <i className="fa-solid fa-play"></i>
                                          </Link>
                                      </div>
                                  </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider--image block-images"><img src="/assets/images/top-10/09.webp"
                                  loading="lazy" alt="" /></div>
                                <div className="description">
                                  <div className="block-description">
                                      <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Comedy</Link>
                                        </li>
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Romance</Link>
                                        </li>
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Action</Link>
                                        </li>
                                      </ul>
                                      <h2 className="iq-title mb-3"><Link href="./tv-show-detail.html">Logan</Link></h2>
                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="slider-ratting d-flex align-items-center">
                                            <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                              <li>
                                                  <i className="fa fa-star" aria-hidden="true"></i>
                                              </li>
                                            </ul>
                                            <span className="text-white ms-2 font-size-14 fw-500">4.3/5</span>                                     
                                        </div>
                                        <span className="text-body">1hr 50mins</span>
                                      </div>
                                      <p className="mt-0 mb-3">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
                                      <div className="iq-button">
                                          <Link href="movie-detail.html" className="btn text-uppercase position-relative">
                                              <span className="button-text">play now</span>
                                              <i className="fa-solid fa-play"></i>
                                          </Link>
                                      </div>
                                  </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider--image block-images"><img src="/assets/images/top-10/05.webp"
                                  loading="lazy" alt="" /></div>
                                <div className="description">
                                  <div className="block-description">
                                      <ul className="ps-0 mb-0 mb-1 pb-1 list-inline d-flex flex-wrap align-items-center movie-tag">
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Comedy</Link>
                                        </li>
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Romance</Link>
                                        </li>
                                        <li className="position-relative text-capitalize font-size-14 letter-spacing-1">
                                            <Link href="view-all-movie.html" className="text-white text-decoration-none">Action</Link>
                                        </li>
                                      </ul>
                                      <h2 className="iq-title mb-3"><Link href="./tv-show-detail.html">Black Queen</Link></h2>
                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="slider-ratting d-flex align-items-center">
                                            <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                              <li>
                                                  <i className="fa fa-star" aria-hidden="true"></i>
                                              </li>
                                            </ul>
                                            <span className="text-white ms-2 font-size-14 fw-500">4.3/5</span>                                     
                                        </div>
                                        <span className="text-body">1hr 50mins</span>
                                      </div>
                                      <p className="mt-0 mb-3">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
                                      <div className="iq-button">
                                          <Link href="movie-detail.html" className="btn text-uppercase position-relative">
                                              <span className="button-text">play now</span>
                                              <i className="fa-solid fa-play"></i>
                                          </Link>
                                      </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>

        <div className="suggested-block">
          <div className="container-fluid">
              <section className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between px-3 my-4">
                    <h5 className="main-title text-capitalize mb-0">suggested-block</h5>
                    <Link href="view-all-movie.html" className="text-primary iq-view-all text-decoration-none flex-none">View All</Link>
                </div>
                <div className="card-style-slider">
                    <div className="position-relative swiper swiper-card" data-slide="6" data-laptop="6" data-tab="3" data-mobile="2"
                      data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
                      <ul className="p-0 swiper-wrapper m-0  list-inline">
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/suggested/01.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">choflief</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 30mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                              </li>
                            
                          
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/suggested/02.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0" />
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">lost</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">3hr 0mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/suggested/03.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">red hamald</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 45mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/suggested/04.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">pandap</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 45mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/suggested/05.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">femllaeemll</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 55mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/suggested/06.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">ragnarorr</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 30mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/suggested/07.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">sonil</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 15mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                      </ul>
                      <div className="swiper-button swiper-button-next"></div>
                      <div className="swiper-button swiper-button-prev"></div>
                    </div>
                </div>
              </section>
          </div>
        </div>

        <section id="parallex" className="parallax-window bg-attachment-fixed" style={{background:"url(./assets/images/parallax/parallex.webp) fixed"}}>
          <div className="container-fluid h-100">
              <div className="row align-items-center justify-content-center h-100 parallaxt-details">
                <div className="col-xl-5 col-lg-12 col-md-12 r-mb-23">
                    <div className="text-start">
                      <h2 className="big-font-5 text-uppercase texture-text mb-0">bailey</h2>
                      <div className="d-flex flex-wrap align-items-center r-mb-23 my-4">
                          <div className="slider-ratting d-flex align-items-center">
                            <ul
                                className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                <li>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star" aria-hidden="true"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-half" aria-hidden="true"></i>
                                </li>
                            </ul>
                            <span className="text-white ms-2 font-size-14 fw-500">4.2</span>
                            <span className="ms-2">
                            <img src="/assets/images/movies/imdb-logo.svg" alt="imdb logo" className="img-fluid"/>
                            </span>
                          </div>
                          <span className="badge rounded-0 text-white text-uppercase p-2 mx-3 bg-secondary">15+</span>
                          <span className="font-size-14 fw-500">2hr 6mins</span>
                      </div>
                      <h4 className="iq-title mb-2 fw-bold">
                          Movie of the year
                      </h4>
                      <p className="line-count-2 w-75 mb-5">Baileys Irish Cream is an Irish cream liqueur an alcoholic beverage
                          flavoured with cream, cocoa, and Irish whiskey made by Diageo at Republic of Ireland and in
                          Mallusk, Northern Ireland.
                      </p>
                      <div className="parallax-buttons">
                          <div className="iq-button">
                              <Link href="movie-detail.html" className="btn text-uppercase position-relative">
                                  <span className="button-text">play now</span>
                                  <i className="fa-solid fa-play"></i>
                              </Link>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-12 col-md-12 mt-5 mt-xl-0">
                    <div className="parallax-img">
                      <Link href="./movie-detail.html">
                      <img src="/assets/images/parallax/parallex.webp" className="img-fluid w-100" loading="lazy" alt="bailey"/>
                      </Link>
                    </div>
                </div>
              </div>
          </div>
        </section>

        <section className="tranding-tab-slider section-padding">
          <div className="container-fluid">
              <div className="row m-0 p-0">
                <div id="iq-trending" className="s-margin iq-tvshow-tabs iq-trending-tabs overflow-hidden">
                    <div className="d-flex align-items-center justify-content-between px-0 px-md-3">
                      <h5 className="main-title text-capitalize mb-0">Trending</h5>
                    </div>
                    <div className="trending-contens position-relative ">
                      <div id="gallery-top" className="swiper gallery-thumbs" data-swiper="gallery-top">
                          <ul className="swiper-wrapper list-inline m-0 trending-swiper-padding trending-slider-nav align-items-center ">
                            <li className="swiper-slide">
                                <Link href={void(0)}>
                                  <div className="movie-swiper position-relative">
                                      <img src="/assets/images/movies/ott1.webp" alt="" />
                                  </div>
                                </Link>
                            </li>
                            <li className="swiper-slide">
                                <Link href={void(0)}>
                                  <div className="movie-swiper position-relative">
                                      <img src="/assets/images/movies/ott2.webp" alt="" />
                                  </div>
                                </Link>
                            </li>
                            <li className="swiper-slide">
                                <Link href={void(0)}>
                                  <div className="movie-swiper position-relative">
                                      <img src="/assets/images/movies/ott3.webp" alt="" />
                                  </div>
                                </Link>
                            </li>
                            <li className="swiper-slide">
                                <Link href={void(0)}>
                                  <div className="movie-swiper position-relative">
                                      <img src="/assets/images/movies/banner1.webp" alt="" />
                                  </div>
                                </Link>
                            </li>
                            <li className="swiper-slide">
                                <Link href={void(0)} tabIndex="0">
                                  <div className="movie-swiper position-relative">
                                      <img src="/assets/images/movies/banner2.webp" alt="" />
                                  </div>
                                </Link>
                            </li>
                            <li className="swiper-slide">
                                <Link href={void(0)} tabIndex="0">
                                  <div className="movie-swiper position-relative">
                                      <img src="/assets/images/movies/banner3.webp" alt="" />
                                  </div>
                                </Link>
                            </li>
                          </ul>
                      </div>
                      <div id="gallery-bottom" className="swiper trending-tab-slider swiper-no-swiping" data-swiper="gallery-bottom">
                          <ul className="swiper-wrapper list-inline p-0 m-0 d-flex align-items-center trending-slider">
                            <li className="swiper-slide slider-big-img-1 p-0">
                                <div className="trending-tab-slider-image">
                                  <img src="/assets/images/movies/ott1.webp" alt=""/>
                                </div>
                                <div className="tranding-block position-relative">
                                  <div className="trending-custom-tab">
                                      <div className="tab-title-info position-relative">
                                        <ul className="trending-pills iq-custom-tab flex-nowrap d-flex nav nav-pills justify-content-md-center align-items-center text-center list-inline" id="trending-tab-1"
                                            role="tablist">
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link active" id="trending-data-tab-1" data-bs-toggle="pill" data-bs-target="#trending-data-1"
                                                aria-controls="trending-data-1" role="tab" aria-selected="true">Overview</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-2" data-bs-toggle="pill" data-bs-target="#trending-data-2"
                                                  aria-controls="trending-data-2" role="tab" aria-selected="false">Episodes</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-3" data-bs-toggle="pill" data-bs-target="#trending-data-3"
                                                  aria-controls="trending-data-3" role="tab" aria-selected="false">Trailers</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-4" data-bs-toggle="pill" data-bs-target="#trending-data-4"
                                                  aria-controls="trending-data-4" role="tab" aria-selected="false">Similar Like This</Link>
                                            </li>
                                        </ul>
                                      </div>
                                      <div className="tab-content trending-content" id="trending-tab-1-content">
                                        <div id="trending-data-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="trending-data-tab-1" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap">
                                                  <span>3 Seasons</span>
                                                  <span className="trending-year">2023</span>
                                              </div>
                                              <div className="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                  <Link href={void(0)}><img
                                                        src="./assets/images/movies/trending-label.webp" className="img-fluid"
                                                        alt=""/></Link>
                                                  <span className="text-gold">#2 in Series Today</span>
                                              </div>
                                              <p className="trending-dec line-count-3">The point of using Lorem Ipsum is that it
                                                  has a more-or-less normal distribution of letters, as opposed to using
                                                  'Content here.</p>
                                              <div className="p-btns">
                                                  <div className="iq-button">
                                                    <Link href="./tv-show-detail.html"
                                                        className="btn text-uppercase position-relative">
                                                        <span className="button-text">Play Now</span>
                                                        <i className="fa-solid fa-play"></i>
                                                    </Link>
                                                  </div>
                                              </div>
                                              <div className="trending-list mt-4">
                                                  <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                        Moura, Boyd Holbrook, Joanna</span>
                                                  </div>
                                                  <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                        Action, Thriller, Biography</span>
                                                  </div>
                                                  <div className="text-primary title">This Is: <span className="text-body">Violent,
                                                        Forceful</span>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-2" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-2" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                  <span className="season_date ms-2">
                                                    2 Seasons
                                                  </span>
                                                  <span className="trending-year">Feb 2019</span>
                                              </div>
                                              <div className="iq-custom-select d-inline-block sea-epi mb-4">
                                                  <select name="cars" className="form-control select2-basic-single js-states season-select">
                                                    <option value="season1">Season 1</option>
                                                    <option value="season2">Season 2</option>
                                                    <option value="season3">Season 3</option>
                                                  </select>
                                              </div>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="2" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/episodes/01.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E01</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/episodes/02.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E02</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/episodes/03.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E03</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/episodes/04.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E04</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/episodes/05.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E05</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-3" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-3" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                              <h3 className="trending-text big-title text-uppercase texture-text mt-2">Watch
                                                  Trailer</h3>
                                              <div className="episodes-contens mt-5">
                                                  <div
                                                    className="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                    <div className="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                        <img src="/assets/images/tv-show/season/01.webp" className="trailer-image" alt=""/>
                                                        <Link href="./assets/images/video/trailer.mp4"
                                                          className="video-open playbtn text-decoration-none" tabIndex="0">
                                                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                              width="80px" height="80px" viewBox="0 0 213.7 213.7"
                                                              enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                              <polygon className="triangle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10"
                                                                points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                                              <circle className="circle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                                              </circle>
                                                          </svg>
                                                          <span className="w-trailor text-uppercase"> Watch Trailer </span>
                                                        </Link>
                                                    </div>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-4" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-4" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                              <h3 className="trending-text big-title text-uppercase texture-text mb-5">Recommended
                                                  For You</h3>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="1" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/02.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-2</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/03.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-3</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/04.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-4</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/05.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-5</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/06.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-6</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </li>
                            <li className="swiper-slide slider-big-img-2">
                                <div className="trending-tab-slider-image">
                                  <img src="/assets/images/movies/ott2.webp" alt=""/>
                                </div>
                                <div className="tranding-block position-relative">
                                  <div className="trending-custom-tab">
                                      <div className="tab-title-info position-relative">
                                        <ul className="trending-pills iq-custom-tab flex-nowrap d-flex nav nav-pills justify-content-md-center align-items-center text-center list-inline" id="trending-tab-2"
                                            role="tablist">
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link active" id="trending-data-tab-5" data-bs-toggle="pill" data-bs-target="#trending-data-5"
                                                aria-controls="trending-data-5" role="tab" aria-selected="true">Overview</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-6" data-bs-toggle="pill" data-bs-target="#trending-data-6"
                                                  aria-controls="trending-data-6" role="tab" aria-selected="false">Episodes</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-7" data-bs-toggle="pill" data-bs-target="#trending-data-7"
                                                  aria-controls="trending-data-7" role="tab" aria-selected="false">Trailers</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-8" data-bs-toggle="pill" data-bs-target="#trending-data-8"
                                                  aria-controls="trending-data-8" role="tab" aria-selected="false">Similar Like This</Link>
                                            </li>
                                        </ul>
                                      </div>
                                      <div className="tab-content trending-content" id="trending-tab-2-content">
                                        <div id="trending-data-5" className="tab-pane fade show active" role="tabpanel" aria-labelledby="trending-data-tab-5" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap">
                                                  <span>3 Seasons</span>
                                                  <span className="trending-year">2023</span>
                                              </div>
                                              <div className="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                  <Link href={void(0)}><img
                                                        src="./assets/images/movies/trending-label.webp" className="img-fluid"
                                                        alt=""/></Link>
                                                  <span className="text-gold">#2 in Series Today</span>
                                              </div>
                                              <p className="trending-dec line-count-3">The point of using Lorem Ipsum is that it
                                                  has a more-or-less normal distribution of letters, as opposed to using
                                                  'Content here.</p>
                                              <div className="p-btns">
                                                  <div className="iq-button">
                                                    <Link href="./tv-show-detail.html"
                                                        className="btn text-uppercase position-relative">
                                                        <span className="button-text">Play Now</span>
                                                        <i className="fa-solid fa-play"></i>
                                                    </Link>
                                                  </div>
                                              </div>
                                              <div className="trending-list mt-4">
                                                  <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                        Moura, Boyd Holbrook, Joanna</span>
                                                  </div>
                                                  <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                        Action, Thriller, Biography</span>
                                                  </div>
                                                  <div className="text-primary title">This Is: <span className="text-body">Violent,
                                                        Forceful</span>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-6" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-6" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                  <span className="season_date ms-2">
                                                    2 Seasons
                                                  </span>
                                                  <span className="trending-year">Feb 2019</span>
                                              </div>
                                              <div className="iq-custom-select d-inline-block sea-epi mb-4">
                                                  <select name="cars" className="form-control season-select select2-basic-single js-states">
                                                    <option value="season1">Season 1</option>
                                                    <option value="season2">Season 2</option>
                                                    <option value="season3">Season 3</option>
                                                  </select>
                                              </div>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="2" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/01.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E01</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/02.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E02</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/03.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E03</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/04.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E04</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/05.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E05</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-7" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-7" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                              <h3 className="trending-text big-title text-uppercase texture-text mt-2">Watch
                                                  Trailer</h3>
                                              <div className="episodes-contens mt-5">
                                                  <div
                                                    className="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                    <div className="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                        <img src="/assets/images/tv-show/episodes/01.webp"
                                                          className="trailer-image" alt=""/>
                                                        <Link href="./assets/images/video/trailer.mp4"
                                                          className="video-open playbtn text-decoration-none" tabIndex="0">
                                                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                              width="80px" height="80px" viewBox="0 0 213.7 213.7"
                                                              enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                              <polygon className="triangle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10"
                                                                points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                                              <circle className="circle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                                              </circle>
                                                          </svg>
                                                          <span className="w-trailor text-uppercase"> Watch Trailer </span>
                                                        </Link>
                                                    </div>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-8" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-8" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                              <h3 className="trending-text big-title text-uppercase texture-text mb-5">Recommended
                                                  For You</h3>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="1" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/ott2.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-2</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/ott3.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-3</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner1.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-4</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner2.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-5</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner3.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-6</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </li>
                            <li className="swiper-slide slider-big-img-3">
                                <div className="trending-tab-slider-image">
                                  <img src="/assets/images/movies/ott3.webp" alt=""/>
                                </div>
                                <div className="tranding-block position-relative">
                                  <div className="trending-custom-tab">
                                      <div className="tab-title-info position-relative">
                                        <ul className="trending-pills iq-custom-tab flex-nowrap d-flex nav nav-pills justify-content-md-center align-items-center text-center list-inline" id="trending-tab-3"
                                            role="tablist">
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link active" id="trending-data-tab-9" data-bs-toggle="pill" data-bs-target="#trending-data-9"
                                                aria-controls="trending-data-9" role="tab" aria-selected="true">Overview</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-10" data-bs-toggle="pill" data-bs-target="#trending-data-10"
                                                  aria-controls="trending-data-10" role="tab" aria-selected="false">Episodes</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-11" data-bs-toggle="pill" data-bs-target="#trending-data-11"
                                                  aria-controls="trending-data-11" role="tab" aria-selected="false">Trailers</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-12" data-bs-toggle="pill" data-bs-target="#trending-data-12"
                                                  aria-controls="trending-data-12" role="tab" aria-selected="false">Similar Like This</Link>
                                            </li>
                                        </ul>
                                      </div>
                                      <div className="tab-content trending-content" id="trending-tab-3-content">
                                        <div id="trending-data-9" className="tab-pane fade show active" role="tabpanel" aria-labelledby="trending-data-tab-9" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap">
                                                  <span>3 Seasons</span>
                                                  <span className="trending-year">2023</span>
                                              </div>
                                              <div className="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                  <Link href={void(0)}><img
                                                        src="./assets/images/movies/trending-label.webp" className="img-fluid"
                                                        alt=""/></Link>
                                                  <span className="text-gold">#2 in Series Today</span>
                                              </div>
                                              <p className="trending-dec line-count-3">The point of using Lorem Ipsum is that it
                                                  has a more-or-less normal distribution of letters, as opposed to using
                                                  'Content here.</p>
                                              <div className="p-btns">
                                                  <div className="iq-button">
                                                    <Link href="./tv-show-detail.html"
                                                        className="btn text-uppercase position-relative">
                                                        <span className="button-text">Play Now</span>
                                                        <i className="fa-solid fa-play"></i>
                                                    </Link>
                                                  </div>
                                              </div>
                                              <div className="trending-list mt-4">
                                                  <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                        Moura, Boyd Holbrook, Joanna</span>
                                                  </div>
                                                  <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                        Action, Thriller, Biography</span>
                                                  </div>
                                                  <div className="text-primary title">This Is: <span className="text-body">Violent,
                                                        Forceful</span>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-10" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-10" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                  <span className="season_date ms-2">
                                                    2 Seasons
                                                  </span>
                                                  <span className="trending-year">Feb 2019</span>
                                              </div>
                                              <div className="iq-custom-select d-inline-block sea-epi mb-4">
                                                  <select name="cars" className="form-control season-select select2-basic-single js-states">
                                                    <option value="season1">Season 1</option>
                                                    <option value="season2">Season 2</option>
                                                    <option value="season3">Season 3</option>
                                                  </select>
                                              </div>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="2" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/25.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E01</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/26.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E02</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/27.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E03</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/28.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E04</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/29.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E05</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-11" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-11" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                              <h3 className="trending-text big-title text-uppercase texture-text mt-2">Watch
                                                  Trailer</h3>
                                              <div className="episodes-contens mt-5">
                                                  <div
                                                    className="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                    <div className="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                        <img src="/assets/images/tv-show/season/35.webp"
                                                          className="trailer-image" alt=""/>
                                                        <Link href="./assets/images/video/trailer.mp4"
                                                          className="video-open playbtn text-decoration-none" tabIndex="0">
                                                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                              width="80px" height="80px" viewBox="0 0 213.7 213.7"
                                                              enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                              <polygon className="triangle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10"
                                                                points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                                              <circle className="circle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                                              </circle>
                                                          </svg>
                                                          <span className="w-trailor text-uppercase"> Watch Trailer </span>
                                                        </Link>
                                                    </div>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-12" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-12" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                              <h3 className="trending-text big-title text-uppercase texture-text mb-5">Recommended
                                                  For You</h3>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="1" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/30.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-2</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/31.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-3</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/32.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-4</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/33.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-5</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/34.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-6</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </li>
                            <li className="swiper-slide slider-big-img-4">
                                <div className="trending-tab-slider-image">
                                  <img src="/assets/images/movies/banner1.webp" alt=""/>
                                </div>
                                <div className="tranding-block position-relative">
                                  <div className="trending-custom-tab">
                                      <div className="tab-title-info position-relative">
                                        <ul className="trending-pills iq-custom-tab flex-nowrap d-flex nav nav-pills justify-content-md-center align-items-center text-center list-inline" id="trending-tab-4"
                                            role="tablist">
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link active" id="trending-data-tab-13" data-bs-toggle="pill" data-bs-target="#trending-data-13"
                                                aria-controls="trending-data-13" role="tab" aria-selected="true">Overview</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-14" data-bs-toggle="pill" data-bs-target="#trending-data-14"
                                                  aria-controls="trending-data-14" role="tab" aria-selected="false">Episodes</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-15" data-bs-toggle="pill" data-bs-target="#trending-data-15"
                                                  aria-controls="trending-data-15" role="tab" aria-selected="false">Trailers</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-16" data-bs-toggle="pill" data-bs-target="#trending-data-16"
                                                  aria-controls="trending-data-16" role="tab" aria-selected="false">Similar Like This</Link>
                                            </li>
                                        </ul>
                                      </div>
                                      <div className="tab-content trending-content" id="trending-tab-4-content">
                                        <div id="trending-data-13" className="tab-pane fade show active" role="tabpanel" aria-labelledby="trending-data-tab-13" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap">
                                                  <span>3 Seasons</span>
                                                  <span className="trending-year">2023</span>
                                              </div>
                                              <div className="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                  <Link href={void(0)}><img
                                                        src="./assets/images/movies/trending-label.webp" className="img-fluid"
                                                        alt=""/></Link>
                                                  <span className="text-gold">#2 in Series Today</span>
                                              </div>
                                              <p className="trending-dec line-count-3">The point of using Lorem Ipsum is that it
                                                  has a more-or-less normal distribution of letters, as opposed to using
                                                  'Content here.</p>
                                              <div className="p-btns">
                                                  <div className="iq-button">
                                                    <Link href="./tv-show-detail.html"
                                                        className="btn text-uppercase position-relative">
                                                        <span className="button-text">Play Now</span>
                                                        <i className="fa-solid fa-play"></i>
                                                    </Link>
                                                  </div>
                                              </div>
                                              <div className="trending-list mt-4">
                                                  <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                        Moura, Boyd Holbrook, Joanna</span>
                                                  </div>
                                                  <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                        Action, Thriller, Biography</span>
                                                  </div>
                                                  <div className="text-primary title">This Is: <span className="text-body">Violent,
                                                        Forceful</span>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-14" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-14" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                  <span className="season_date ms-2">
                                                    2 Seasons
                                                  </span>
                                                  <span className="trending-year">Feb 2019</span>
                                              </div>
                                              <div className="iq-custom-select d-inline-block sea-epi mb-4">
                                                  <select name="cars" className="form-control season-select select2-basic-single js-states">
                                                    <option value="season1">Season 1</option>
                                                    <option value="season2">Season 2</option>
                                                    <option value="season3">Season 3</option>
                                                  </select>
                                              </div>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="2" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/11.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E01</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/12.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E02</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/13.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E03</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/14.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E04</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/15.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E05</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-11" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-15" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                              <h3 className="trending-text big-title text-uppercase texture-text mt-2">Watch
                                                  Trailer</h3>
                                              <div className="episodes-contens mt-5">
                                                  <div
                                                    className="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                    <div className="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                        <img src="/assets/images/tv-show/episodes/01.webp"
                                                          className="trailer-image" alt=""/>
                                                        <Link href="./assets/images/video/trailer.mp4"
                                                          className="video-open playbtn text-decoration-none" tabIndex="0">
                                                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                              width="80px" height="80px" viewBox="0 0 213.7 213.7"
                                                              enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                              <polygon className="triangle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10"
                                                                points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                                              <circle className="circle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                                              </circle>
                                                          </svg>
                                                          <span className="w-trailor text-uppercase"> Watch Trailer </span>
                                                        </Link>
                                                    </div>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-16" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-16" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                              <h3 className="trending-text big-title text-uppercase texture-text mb-5">Recommended
                                                  For You</h3>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="1" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/ott2.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-2</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/ott3.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-3</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner1.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-4</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner2.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-5</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner3.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-6</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </li>
                            <li className="swiper-slide slider-big-img-5">
                                <div className="trending-tab-slider-image">
                                  <img src="/assets/images/movies/banner2.webp" alt=""/>
                                </div>
                                <div className="tranding-block position-relative">
                                  <div className="trending-custom-tab">
                                      <div className="tab-title-info position-relative">
                                        <ul className="trending-pills iq-custom-tab flex-nowrap d-flex nav nav-pills justify-content-md-center align-items-center text-center list-inline" id="trending-tab-5"
                                            role="tablist">
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link active" id="trending-data-tab-17" data-bs-toggle="pill" data-bs-target="#trending-data-17"
                                                aria-controls="trending-data-17" role="tab" aria-selected="true">Overview</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-18" data-bs-toggle="pill" data-bs-target="#trending-data-18"
                                                  aria-controls="trending-data-18" role="tab" aria-selected="false">Episodes</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-19" data-bs-toggle="pill" data-bs-target="#trending-data-19"
                                                  aria-controls="trending-data-19" role="tab" aria-selected="false">Trailers</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-20" data-bs-toggle="pill" data-bs-target="#trending-data-20"
                                                  aria-controls="trending-data-20" role="tab" aria-selected="false">Similar Like This</Link>
                                            </li>
                                        </ul>
                                      </div>
                                      <div className="tab-content trending-content" id="trending-tab-5-content">
                                        <div id="trending-data-17" className="tab-pane fade show active" role="tabpanel" aria-labelledby="trending-data-tab-17" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap">
                                                  <span>3 Seasons</span>
                                                  <span className="trending-year">2023</span>
                                              </div>
                                              <div className="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                  <Link href={void(0)}><img
                                                        src="./assets/images/movies/trending-label.webp" className="img-fluid"
                                                        alt=""/></Link>
                                                  <span className="text-gold">#2 in Series Today</span>
                                              </div>
                                              <p className="trending-dec line-count-3">The point of using Lorem Ipsum is that it
                                                  has a more-or-less normal distribution of letters, as opposed to using
                                                  'Content here.</p>
                                              <div className="p-btns">
                                                  <div className="iq-button">
                                                    <Link href="./tv-show-detail.html"
                                                        className="btn text-uppercase position-relative">
                                                        <span className="button-text">Play Now</span>
                                                        <i className="fa-solid fa-play"></i>
                                                    </Link>
                                                  </div>
                                              </div>
                                              <div className="trending-list mt-4">
                                                  <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                        Moura, Boyd Holbrook, Joanna</span>
                                                  </div>
                                                  <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                        Action, Thriller, Biography</span>
                                                  </div>
                                                  <div className="text-primary title">This Is: <span className="text-body">Violent,
                                                        Forceful</span>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-18" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-18" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                  <span className="season_date ms-2">
                                                    2 Seasons
                                                  </span>
                                                  <span className="trending-year">Feb 2019</span>
                                              </div>
                                              <div className="iq-custom-select d-inline-block sea-epi mb-4">
                                                  <select name="cars" className="form-control season-select select2-basic-single js-states">
                                                    <option value="season1">Season 1</option>
                                                    <option value="season2">Season 2</option>
                                                    <option value="season3">Season 3</option>
                                                  </select>
                                              </div>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="2" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/16.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E01</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/17.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E02</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/18.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E03</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/19.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E04</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/20.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E05</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-19" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-19" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                              <h3 className="trending-text big-title text-uppercase texture-text mt-2">Watch
                                                  Trailer</h3>
                                              <div className="episodes-contens mt-5">
                                                  <div
                                                    className="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                    <div className="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                        <img src="/assets/images/tv-show/episodes/01.webp" className="trailer-image" alt=""/>
                                                        <Link href="./assets/images/video/trailer.mp4"
                                                          className="video-open playbtn text-decoration-none" tabIndex="0">
                                                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                              width="80px" height="80px" viewBox="0 0 213.7 213.7"
                                                              enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                              <polygon className="triangle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10"
                                                                points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                                              <circle className="circle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                                              </circle>
                                                          </svg>
                                                          <span className="w-trailor text-uppercase"> Watch Trailer </span>
                                                        </Link>
                                                    </div>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-20" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-20" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                              <h3 className="trending-text big-title text-uppercase texture-text mb-5">Recommended
                                                  For You</h3>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="1" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/ott2.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-2</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/ott3.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-3</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner1.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-4</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner2.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-5</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner3.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-6</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </li>
                            <li className="swiper-slide slider-big-img-6">
                                <div className="trending-tab-slider-image">
                                  <img src="/assets/images/movies/banner3.webp" alt=""/>
                                </div>
                                <div className="tranding-block position-relative">
                                  <div className="trending-custom-tab">
                                      <div className="tab-title-info position-relative">
                                        <ul className="trending-pills iq-custom-tab flex-nowrap d-flex nav nav-pills justify-content-md-center align-items-center text-center list-inline" id="trending-tab-5"
                                            role="tablist">
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link active" id="trending-data-tab-21" data-bs-toggle="pill" data-bs-target="#trending-data-21"
                                                aria-controls="trending-data-21" role="tab" aria-selected="true">Overview</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-22" data-bs-toggle="pill" data-bs-target="#trending-data-22"
                                                  aria-controls="trending-data-22" role="tab" aria-selected="false">Episodes</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-23" data-bs-toggle="pill" data-bs-target="#trending-data-23"
                                                  aria-controls="trending-data-23" role="tab" aria-selected="false">Trailers</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                              <Link className="nav-link" id="trending-data-tab-24" data-bs-toggle="pill" data-bs-target="#trending-data-24"
                                                  aria-controls="trending-data-24" role="tab" aria-selected="false">Similar Like This</Link>
                                            </li>
                                        </ul>
                                      </div>
                                      <div className="tab-content trending-content" id="trending-tab-5-content">
                                        <div id="trending-data-21" className="tab-pane fade show active" role="tabpanel" aria-labelledby="trending-data-tab-21" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap">
                                                  <span>3 Seasons</span>
                                                  <span className="trending-year">2023</span>
                                              </div>
                                              <div className="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                                  <Link href={void(0)}><img
                                                        src="./assets/images/movies/trending-label.webp" className="img-fluid"
                                                        alt=""/></Link>
                                                  <span className="text-gold">#2 in Series Today</span>
                                              </div>
                                              <p className="trending-dec line-count-3">The point of using Lorem Ipsum is that it
                                                  has a more-or-less normal distribution of letters, as opposed to using
                                                  'Content here.</p>
                                              <div className="p-btns">
                                                  <div className="iq-button">
                                                    <Link href="./tv-show-detail.html"
                                                        className="btn text-uppercase position-relative">
                                                        <span className="button-text">Play Now</span>
                                                        <i className="fa-solid fa-play"></i>
                                                    </Link>
                                                  </div>
                                              </div>
                                              <div className="trending-list mt-4">
                                                  <div className="text-primary title">Starring: <span className="text-body">Wagner
                                                        Moura, Boyd Holbrook, Joanna</span>
                                                  </div>
                                                  <div className="text-primary title">Genres: <span className="text-body">Crime,
                                                        Action, Thriller, Biography</span>
                                                  </div>
                                                  <div className="text-primary title">This Is: <span className="text-body">Violent,
                                                        Forceful</span>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-22" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-22" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">

                                              <h1 className="trending-text big-title text-uppercase texture-text">the hero camp
                                              </h1>
                                              <div className="d-flex align-items-center text-white text-detail flex-wrap mb-4">
                                                  <span className="season_date ms-2">
                                                    2 Seasons
                                                  </span>
                                                  <span className="trending-year">Feb 2019</span>
                                              </div>
                                              <div className="iq-custom-select d-inline-block sea-epi mb-4">
                                                  <select name="cars" className="form-control season-select select2-basic-single js-states">
                                                    <option value="season1">Season 1</option>
                                                    <option value="season2">Season 2</option>
                                                    <option value="season3">Season 3</option>
                                                  </select>
                                              </div>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="2" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/21.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E01</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/22.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E02</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/23.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E03</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/24.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E04</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/tv-show/season/25.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">S01E05</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-23" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-23" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction text-center">
                                              <h3 className="trending-text big-title text-uppercase texture-text mt-2">Watch
                                                  Trailer</h3>
                                              <div className="episodes-contens mt-5">
                                                  <div
                                                    className="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                                    <div className="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                                        <img src="/assets/images/tv-show/episodes/01.webp" className="trailer-image" alt=""/>
                                                        <Link href="./assets/images/video/trailer.mp4" className="video-open playbtn text-decoration-none" tabIndex="0">
                                                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                              width="80px" height="80px" viewBox="0 0 213.7 213.7"
                                                              enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                                              <polygon className="triangle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10"
                                                                points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                                              <circle className="circle" fill="none" strokeWidth="7"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                                              </circle>
                                                          </svg>
                                                          <span className="w-trailor text-uppercase"> Watch Trailer </span>
                                                        </Link>
                                                    </div>
                                                  </div>
                                              </div>
                                            </div>
                                        </div>
                                        <div id="trending-data-24" className="tab-pane fade" role="tabpanel" aria-labelledby="trending-data-tab-24" tabIndex="0">
                                            <div
                                              className=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                              <h3 className="trending-text big-title text-uppercase texture-text mb-5">Recommended
                                                  For You</h3>
                                              <div className="position-relative swiper swiper-card" data-slide="4" data-laptop="3"
                                                  data-tab="2" data-mobile="1" data-mobile-sm="1" data-autoplay="false"
                                                  data-loop="false" data-navigation="true" data-pagination="true">
                                                  <ul className="p-0 swiper-wrapper m-0  list-inline">
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/ott2.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-2</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 1, 2022</span>
                                                                    <span className="text-primary run-time">45min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 1 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/ott3.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-3</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 8, 2022</span>
                                                                    <span className="text-primary run-time">35min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 2 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner1.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-4</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 15, 2022</span>
                                                                    <span className="text-primary run-time">36min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 3 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner2.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-5</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 4 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="swiper-slide">
                                                        <div className="episode-block">
                                                            <div className="block-image position-relative">
                                                                <Link href="./episode.html">
                                                                    <img src="/assets/images/movies/banner3.webp" className="img-fluid img-zoom" alt="showImg-" loading="lazy"/>
                                                                </Link>
                                                                <div className="episode-number">Seasons 1-6</div>
                                                                <div className="episode-play">
                                                                    <Link href="./episode.html" tabIndex="0"><i className="fa-solid fa-play"></i></Link>
                                                                </div>
                                                            </div>
                                                            <div className="epi-desc p-3">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <span className="border-gredient-left text-white rel-date">October 22, 2022</span>
                                                                    <span className="text-primary run-time">41min</span>
                                                                </div>
                                                                <Link href="./episode.html">
                                                                    <h5 className="epi-name text-white mb-0"> Episode 5 </h5>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                  </ul>
                                                  <div className="swiper-button swiper-button-next"></div>
                                                  <div className="swiper-button swiper-button-prev"></div>
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </li>
                          </ul>
                          <div className="swiper-arrow swiper-button-next">
                            <i className="fa-solid fa-chevron-right"></i>
                          </div>
                          <div className="swiper-arrow swiper-button-prev">
                            <i className="fa-solid fa-chevron-left"></i>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </section>

        <div className="recommended-block">
          <div className="container-fluid">
              <section className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between px-3 my-4">
                    <h5 className="main-title text-capitalize mb-0">Recommended TV Show</h5>
                    <Link href="view-all-movie.html" className="text-primary iq-view-all text-decoration-none flex-none">View All</Link>
                </div>
                <div className="card-style-slider">
                    <div className="position-relative swiper swiper-card" data-slide="6" data-laptop="6" data-tab="3" data-mobile="2"
                      data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
                      <ul className="p-0 swiper-wrapper m-0  list-inline">
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/recommended/01.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">Giikre</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 12mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/recommended/02.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">Arrival</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 22mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/recommended/03.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">Pricess</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 30mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/recommended/04.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">Soull Meate</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 30mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/recommended/05.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">Dangacg</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 45mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/recommended/06.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">crcikeft</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">2hr 25mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                          <li className="swiper-slide">
                              <div className="iq-card card-hover">
                                <div className="block-images position-relative w-100">
                                  <div className="img-box w-100">
                                    <Link href="./movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                                    <img src="/assets/images/movies/recommended/07.webp" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                                  </div>
                                  <div className="card-description with-transition">
                                    <div className="cart-content">
                                      <div className="content-left">
                                        <h5 className="iq-title text-capitalize">
                                          <Link href="./movie-detail.html">Avengrs</Link>
                                        </h5>
                                        <div className="movie-time d-flex align-items-center my-2">
                                          <span className="movie-time-text font-normal">1hr 45mins</span>
                                        </div>
                                      </div>
                                      <div className="watchlist">
                                        <Link className="watch-list-not" href="playlist.html">
                                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                          </svg>
                                          <span className="watchlist-label"> Watchlist </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="block-social-info align-items-center">
                                    <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fas fa-share-alt"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <Link href="" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                              </Link>
                                              <Link href="" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                              </Link>
                                              <Link href="#">
                                                <i className="fas fa-link"></i>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li className="share position-relative d-flex align-items-center text-center mb-0">
                                        <span className="w-100 h-100 d-inline-block bg-transparent">
                                          <i className="fa-regular fa-heart"></i>
                                        </span>
                                        <div className="share-wrapper">
                                          <div className="share-boxs d-inline-block">
                                            <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                                            </svg>
                                            <div className=" overflow-hidden">
                                              <span>+51</span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="iq-button">
                                      <Link href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                                        <i className="fa-solid fa-play ms-0"></i>
                                      </Link>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            
                            
                          </li>
                      </ul>
                      <div className="swiper-button swiper-button-next"></div>
                      <div className="swiper-button swiper-button-prev"></div>
                    </div>
                </div>
              </section>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}