import { Link } from 'react-router-dom'
import React from 'react'
import Header2 from '../common/Header2'

const Blog = () => {
  return (
    <>
      <Header2/>

      <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2>Blog List</h2>
                <nav>
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="fa-solid fa-house" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Blog List</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xxl-9 col-xl-8 col-lg-7 order-lg-2">
              <div className="row g-4">
                <div className="col-12">
                  <div className="blog-box /blog wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                    <div className="blog-image">
                      <img src="../assets/images/inner-page/blog/1.jpg" className="blur-up lazyloaded" alt="" />
                    </div>
                    <div className="blog-contain blog-contain-2">
                      <div className="blog-label">
                        <span className="time"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> <span>25 Feg, 2022</span></span>
                        <span className="super"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>Mark J.
                            Speight</span></span>
                      </div>
                      <a href="/blog-details">
                        <h3>one pot creamy mediterranean chicken pasta cream.</h3>
                      </a>
                      <p>Monterey jack cheese slices cream cheese cream cheese hard cheese roquefort
                        emmental lancashire. Who moved my cheese dolcelatte st. agur blue cheese fromage
                        mozzarella say cheese mascarpone blue castello.</p>
                      <button onclick="location.href = '/blog-details';" className="blog-button">Read
                        More <i className="fa-solid fa-right-long" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="blog-box /blog wow fadeInUp" data-wow-delay="0.05s" style={{visibility: 'visible', animationDelay: '0.05s', animationName: 'fadeInUp'}}>
                    <div className="blog-image">
                      <img src="../assets/images/inner-page/blog/2.jpg" className="blur-up lazyloaded" alt="" />
                    </div>
                    <div className="blog-contain blog-contain-2">
                      <div className="blog-label">
                        <span className="time"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> <span>25 Feg, 2022</span></span>
                        <span className="super"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>rebeus
                            hagrid</span></span>
                      </div>
                      <a href="/blog-details">
                        <h3>Crispy Frozen Vegetable is the on the Tempura.</h3>
                      </a>
                      <p>Manchego cauliflower cheese st. agur blue cheese red leicester monterey jack
                        cheesecake the big cheese edam. Gouda monterey jack roquefort hard cheese feta
                        croque monsieur cheeseburger manchego.</p>
                      <button onclick="location.href = '/blog-details';" className="blog-button">Read
                        More <i className="fa-solid fa-right-long" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="blog-box /blog wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
                    <div className="blog-image">
                      <a href="/blog-details">
                        <img src="../assets/images/inner-page/blog/3.jpg" className="blur-up lazyloaded" alt="" />
                      </a>
                      <label><i className="fa-solid fa-bolt-lightning" /> popular</label>
                    </div>
                    <div className="blog-contain blog-contain-2">
                      <div className="blog-label">
                        <span className="time"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> <span>25 Feg, 2022</span></span>
                        <span className="super"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>Chris C.
                            Hall</span></span>
                      </div>
                      <a href="/blog-details">
                        <h3>How to start regrowing green onions and other vegetables.</h3>
                      </a>
                      <p>Cheese triangles say cheese cheese and biscuits dolcelatte jarlsberg cream cheese
                        taleggio fromage frais. Who moved my cheese cottage cheese cheese on toast
                        rubber cheese melted cheese ricotta.</p>
                      <button onclick="location.href = '/blog-details';" className="blog-button">Read
                        More <i className="fa-solid fa-right-long" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="blog-box /blog wow fadeInUp" data-wow-delay="0.15s" style={{visibility: 'hidden', animationDelay: '0.15s', animationName: 'none'}}>
                    <a href="/blog-details" className="blog-image">
                      <img src="../assets/images/inner-page/blog/4.jpg" className="blur-up lazyloaded" alt="" />
                    </a>
                    <div className="blog-contain blog-contain-2">
                      <div className="blog-label">
                        <span className="time"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> <span>25 Feg, 2022</span></span>
                        <span className="super"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>James M.
                            Martin</span></span>
                      </div>
                      <a href="/blog-details">
                        <h3>Starting a vegetable garden: the basics.</h3>
                      </a>
                      <p>Jarlsberg swiss edam. Goat everyone loves cheese strings ricotta cheese and wine
                        pepper jack dolcelatte halloumi. Cream cheese queso croque monsieur camembert de
                        normandie cheddar cheesecake cheese slices croque monsieur.</p>
                      <button onclick="location.href = '/blog-details';" className="blog-button">Read
                        More <i className="fa-solid fa-right-long" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="blog-box /blog wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'hidden', animationDelay: '0.2s', animationName: 'none'}}>
                    <a href="/blog-details" className="blog-image">
                      <img src="../assets/images/inner-page/blog/5.jpg" className="blur-up lazyload" alt="" />
                    </a>
                    <div className="blog-contain blog-contain-2">
                      <div className="blog-label">
                        <span className="time"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> <span>25 Feg, 2022</span></span>
                        <span className="super"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>Cecil M.
                            Levis</span></span>
                      </div>
                      <a href="/blog-details">
                        <h3>Adapt this simple pasta salad to whatever vegetable.</h3>
                      </a>
                      <p>Cream cheese cheese slices chalk and cheese cottage cheese cheddar port-salut
                        everyone loves dolcelatte. Cream cheese camembert de normandie cow chalk and
                        cheese brie gouda cottage cheese cheesy grin.</p>
                      <button onclick="location.href = '/blog-details';" className="blog-button">Read
                        More <i className="fa-solid fa-right-long" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="blog-box /blog wow fadeInUp" data-wow-delay="0.25s" style={{visibility: 'hidden', animationDelay: '0.25s', animationName: 'none'}}>
                    <a href="/blog-details" className="blog-image">
                      <img src="../assets/images/inner-page/blog/1.jpg" className="blur-up lazyload" alt="" />
                    </a>
                    <div className="blog-contain blog-contain-2">
                      <div className="blog-label">
                        <span className="time"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> <span>25 Feg, 2022</span></span>
                        <span className="super"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>Mary R.
                            Hernandez</span></span>
                      </div>
                      <a href="/blog-details">
                        <h3>With chefs idle and vegetables rotting, China's virus-hit.</h3>
                      </a>
                      <p>Monterey jack chalk and cheese cheese and biscuits cream cheese fondue say cheese
                        stilton halloumi. Gouda everyone loves chalk and cheese everyone loves stinking
                        bishop manchego stilton.</p>
                      <button onclick="location.href = '/blog-details';" className="blog-button">Read
                        More <i className="fa-solid fa-right-long" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="blog-box /blog wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'hidden', animationDelay: '0.3s', animationName: 'none'}}>
                    <a href="/blog-details" className="blog-image">
                      <img src="../assets/images/inner-page/blog/2.jpg" className="blur-up lazyload" alt="" />
                    </a>
                    <div className="blog-contain blog-contain-2">
                      <div className="blog-label">
                        <span className="time"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> <span>25 Feg, 2022</span></span>
                        <span className="super"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>Cheryl D.
                            Moser</span></span>
                      </div>
                      <a href="/blog-details">
                        <h3>Turn that bowl of pasta into a supercharged veggie vehicle.</h3>
                      </a>
                      <p>The big cheese fondue st. agur blue cheese. Cheese on toast paneer lancashire
                        cheese and biscuits rubber cheese macaroni cheese queso feta. Stinking bishop
                        fromage brie edam cheesy feet smelly cheese fromage frais paneer.</p>
                      <button onclick="location.href = '/blog-details';" className="blog-button">Read
                        More <i className="fa-solid fa-right-long" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="blog-box /blog wow fadeInUp" data-wow-delay="0.35s" style={{visibility: 'hidden', animationDelay: '0.35s', animationName: 'none'}}>
                    <a href="/blog-details" className="blog-image">
                      <img src="../assets/images/inner-page/blog/3.jpg" alt="" className="blur-up lazyload" />
                    </a>
                    <div className="blog-contain blog-contain-2">
                      <div className="blog-label">
                        <span className="time"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> <span>25 Feg, 2022</span></span>
                        <span className="super"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>Mina M.
                            Short</span></span>
                      </div>
                      <a href="/blog-details">
                        <h3>Health, care and skin on the for your organic.</h3>
                      </a>
                      <p>Cheesy grin brie croque monsieur cheesy grin cottage cheese cheese strings
                        dolcelatte cheeseburger. Cheesy feet queso red leicester fromage frais hard
                        cheese cheeseburger fromage when the cheese comes out everybody's happy.</p>
                      <button onclick="location.href = '/blog-details';" className="blog-button">Read
                        More <i className="fa-solid fa-right-long" /></button>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="blog-box /blog wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'hidden', animationDelay: '0.4s', animationName: 'none'}}>
                    <a href="/blog-details" className="blog-image">
                      <img src="../assets/images/inner-page/blog/4.jpg" alt="" className="blur-up lazyload" />
                    </a>
                    <div className="blog-contain blog-contain-2">
                      <div className="blog-label">
                        <span className="time"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> <span>25 Feg, 2022</span></span>
                        <span className="super"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>Marie S.
                            Santiago</span></span>
                      </div>
                      <a href="/blog-details">
                        <h3>Fresh organicsm, brand, fresh and picnic place awesome.</h3>
                      </a>
                      <p>Macaroni cheese camembert de normandie airedale. Cheese triangles babybel cow
                        blue castello cheddar cheese and biscuits jarlsberg melted cheese. Caerphilly
                        fromage frais ricotta manchego edam boursin edam swiss.</p>
                      <button onclick="location.href = '/blog-details';" className="blog-button">Read
                        More <i className="fa-solid fa-right-long" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="custome-pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="javascript:void(0)" tabIndex={-1}>
                      <i className="fa-solid fa-angles-left" />
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="javascript:void(0)">1</a>
                  </li>
                  <li className="page-item" aria-current="page">
                    <a className="page-link" href="javascript:void(0)">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)">
                      <i className="fa-solid fa-angles-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-5 order-lg-1">
              <div className="left-sidebar-box wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                <div className="left-search-box">
                  <div className="search-box">
                    <input type="search" className="form-control" id="exampleFormControlInput1" placeholder="Search...." />
                  </div>
                </div>
                <div className="accordion left-accordion-box" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Recent Post
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div className="accordion-body pt-0">
                        <div className="recent-post-box">
                          <div className="recent-box">
                            <a href="/blog-details" className="recent-image">
                              <img src="../assets/images/inner-page/blog/1.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                            </a>
                            <div className="recent-detail">
                              <a href="/blog-details">
                                <h5 className="recent-name">Green onion knife and salad placed</h5>
                              </a>
                              <h6>25 Jan, 2022 <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg></h6>
                            </div>
                          </div>
                          <div className="recent-box">
                            <a href="/blog-details" className="recent-image">
                              <img src="../assets/images/inner-page/blog/2.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                            </a>
                            <div className="recent-detail">
                              <a href="/blog-details">
                                <h5 className="recent-name">Health and skin for your organic</h5>
                              </a>
                              <h6>25 Jan, 2022 <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg></h6>
                            </div>
                          </div>
                          <div className="recent-box">
                            <a href="/blog-details" className="recent-image">
                              <img src="../assets/images/inner-page/blog/3.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                            </a>
                            <div className="recent-detail">
                              <a href="/blog-details">
                                <h5 className="recent-name">Organics mix masala fresh &amp; soft</h5>
                              </a>
                              <h6>25 Jan, 2022 <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg></h6>
                            </div>
                          </div>
                          <div className="recent-box">
                            <a href="/blog-details" className="recent-image">
                              <img src="../assets/images/inner-page/blog/4.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                            </a>
                            <div className="recent-detail">
                              <a href="/blog-details">
                                <h5 className="recent-name">Fresh organics brand and picnic</h5>
                              </a>
                              <h6>25 Jan, 2022 <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg></h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Category
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body p-0">
                        <div className="category-list-box">
                          <ul>
                            <li>
                              <a href="/blog">
                                <div className="category-name">
                                  <h5>Latest Recipes</h5>
                                  <span>10</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <div className="category-name">
                                  <h5>Diet Food</h5>
                                  <span>6</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <div className="category-name">
                                  <h5>Low calorie Items</h5>
                                  <span>8</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <div className="category-name">
                                  <h5>Cooking Method</h5>
                                  <span>9</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <div className="category-name">
                                  <h5>Dairy Free</h5>
                                  <span>12</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/blog">
                                <div className="category-name">
                                  <h5>Vegetarian Food</h5>
                                  <span>10</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Product Tags
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body pt-0">
                        <div className="product-tags-box">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Fruit Cutting</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Meat</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">organic</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">cake</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">pick fruit</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">backery</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">organix food</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Most Expensive Fruit</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        Trending Products
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse collapse show" aria-labelledby="panelsStayOpen-headingFour">
                      <div className="accordion-body">
                        <ul className="product-list product-list-2 border-0 p-0">
                          <li>
                            <div className="offer-product">
                              <a href="/shop-left-sidebar" className="offer-image">
                                <img src="../assets/images/vegetable/product/23.png" className="blur-up lazyload" alt="" />
                              </a>
                              <div className="offer-detail">
                                <div>
                                  <a href="/shop-left-sidebar">
                                    <h6 className="name">Meatigo Premium Goat Curry</h6>
                                  </a>
                                  <span>450 G</span>
                                  <h6 className="price theme-color">$ 70.00</h6>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="offer-product">
                              <a href="/shop-left-sidebar" className="offer-image">
                                <img src="../assets/images/vegetable/product/24.png" className="blur-up lazyload" alt="" />
                              </a>
                              <div className="offer-detail">
                                <div>
                                  <a href="/shop-left-sidebar">
                                    <h6 className="name">Dates Medjoul Premium Imported</h6>
                                  </a>
                                  <span>450 G</span>
                                  <h6 className="price theme-color">$ 40.00</h6>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-0">
                            <div className="offer-product">
                              <a href="/shop-left-sidebar" className="offer-image">
                                <img src="../assets/images/vegetable/product/26.png" className="blur-up lazyload" alt="" />
                              </a>
                              <div className="offer-detail">
                                <div>
                                  <a href="/shop-left-sidebar">
                                    <h6 className="name">Apple Red Premium Imported</h6>
                                  </a>
                                  <span>1 KG</span>
                                  <h6 className="price theme-color">$ 80.00</h6>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
