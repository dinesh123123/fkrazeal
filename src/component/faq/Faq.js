import React from 'react'
// import Header2 from '../common/Header2'
// import Footer2 from '../common/Footer2'

const Faq = () => {
  return (
    <>
     {/* <Header2/> */}
     <section className="faq-breadscrumb pt-0">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="breadscrumb-contain">
                <h2>Help Center</h2>
                <p>We are glad having you here looking for the answer. As our team hardly working on the
                  product, feel free to ask any questions. We Believe only your feedback might move us
                  forward.</p>
                <div className="faq-form-tag">
                  <div className="input-group">
                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                    {/* <input type="search" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com"> */}
                    <div className="dropdown">
                      {/* <button class="btn btn-md faq-dropdown-button dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown">All
                                        Product <i class="fa-solid fa-angle-down ms-2"></i></button> */}
                      <ul className="dropdown-menu faq-dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-contain">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="slider-4-2 product-wrapper slick-initialized slick-slider">
                <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: '956px', transform: 'translate3d(0px, 0px, 0px)'}}><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={0} style={{width: '239px'}}>
                      <div className="faq-top-box">
                        <div className="faq-box-icon">
                          <img src="../assets/images/inner-page/faq/start.png" className="blur-up lazyloaded" alt="" />
                        </div>
                        <div className="faq-box-contain">
                          <h3>Getting Started</h3>
                          <p>Bring to the table win-win survival strategies to ensure proactive domination.
                          </p>
                        </div>
                      </div>
                    </div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" tabIndex={0} style={{width: '239px'}}>
                      <div className="faq-top-box">
                        <div className="faq-box-icon">
                          <img src="../assets/images/inner-page/faq/help.png" className="blur-up lazyloaded" alt="" />
                        </div>
                        <div className="faq-box-contain">
                          <h3>Sales Question</h3>
                          <p>Lorizzle ipsizzle boom shackalack sit get down get down.</p>
                        </div>
                      </div>
                    </div><div className="slick-slide slick-active" data-slick-index={2} aria-hidden="false" tabIndex={0} style={{width: '239px'}}>
                      <div className="faq-top-box">
                        <div className="faq-box-icon">
                          <img src="../assets/images/inner-page/faq/price.png" className="blur-up lazyloaded" alt="" />
                        </div>
                        <div className="faq-box-contain">
                          <h3>Pricing &amp; Plans</h3>
                          <p>Curabitizzle fizzle break yo neck, yall quis fo shizzle mah nizzle fo rizzle.</p>
                        </div>
                      </div>
                    </div><div className="slick-slide slick-active" data-slick-index={3} aria-hidden="false" tabIndex={0} style={{width: '239px'}}>
                      <div className="faq-top-box">
                        <div className="faq-box-icon">
                          <img src="../assets/images/inner-page/faq/contact.png" className="blur-up lazyloaded" alt="" />
                        </div>
                        <div className="faq-box-contain">
                          <h3>Support Contact</h3>
                          <p>Gizzle fo shizzle bow wow wow bizzle leo bibendizzle check out this.</p>
                        </div>
                      </div>
                    </div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-box-contain section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="faq-contain">
                <h2>Frequently Asked Questions</h2>
                <p>We are answering most frequent questions. No worries if you not find exact one. You can find
                  out more by searching or continuing clicking button below or directly <a href="/contact" className="theme-color text-decoration-underline">contact our
                    support.</a></p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="faq-accordion">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What is Fastkart and why was the name changed? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Fastkart is leading the charge in transforming India’s vast, unorganised
                          grocery landscape through cutting-edge technology and innovation. Blinkit is
                          India’s largest and most convenient hyper-local delivery company, which
                          enables you to order grocery, fruits &amp; vegetables, and other daily essential
                          products, directly via your mobile or web browser.</p>
                        <p>To know the reason why we changed our brand name from Grofers to Fastkart,
                          read this <span className="fw-bold">blog post.</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How to remove the impurities of Graphene oxide? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Discover, Explore &amp; Understanding The Product Description Maecenas
                          ullamcorper eros libero, facilisis tempor mi dapibus vel. Sed ut felis
                          ligula. Pellentesque vestibulum, tellus id euismod aliquet, justo velit
                          tincidunt justo, nec pulvinar tortor elit vitae urna.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How long will delivery take? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Discover, Explore &amp; Understanding The Product Description Maecenas
                          ullamcorper eros libero, facilisis tempor mi dapibus vel. Sed ut felis
                          ligula. Pellentesque vestibulum, tellus id euismod aliquet, justo velit
                          tincidunt justo, nec pulvinar tortor elit vitae urna.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        How do I find my Windows Product key? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>The product key is located inside the product packaging, on the
                          receipt or confirmation page for a digital purchase or in a
                          confirmation e-mail that shows you purchased Windows. If you
                          purchased a digital copy from Microsoft Store, you can locate your
                          product key in your Account under Digital Content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        I've downloaded an ISO file, now what? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>You can use the ISO file to create bootable media for installation
                          or recovery. You can also install Windows on your current device
                          by opening the ISO file, selecting the Setup and following the
                          instructions.</p>
                        <p>To create bootable media such as a bootable USB drive or DVD, you
                          will need an ISO burning or mounting software. We recommend always
                          using a blank USB or blank DVD because contents may be deleted
                          when creating a bootable image.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        What's the difference between 32-bit and 64-bit versions of Windows? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>The terms 32-bit and 64-bit refer to the way a computer's
                          processor (also called a CPU) handles information. The 64-bit
                          version of Windows handles large amounts of random access memory
                          (RAM) more effectively than a 32-bit system. Not all devices can
                          run the 64-bit versions of Windows.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                        Questionnaire on online shopping behavior during COVID-19. <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Fastkart is leading the charge in transforming India’s vast, unorganised
                          grocery landscape through cutting-edge technology and innovation. Blinkit is
                          India’s largest and most convenient hyper-local delivery company, which
                          enables you to order grocery, fruits &amp; vegetables, and other daily essential
                          products, directly via your mobile or web browser.</p>
                        <p>To know the reason why we changed our brand name from Grofers to Fastkart,
                          read this <span className="fw-bold">blog post.</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        How Can I Get More Attention From Customers? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>There are many variations of passages of Lorem Ipsum available, but the
                          majority have suffered alteration in some form, by injected humour, or
                          randomised words which don't look even slightly believable. If you are going
                          to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                          embarrassing hidden in the middle of text. </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        What is payment method? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type and scrambled it to make a type
                          specimen book. It has survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially unchanged. It was
                          popularised in the 1960s with the release of Letraset sheets containing
                          Lorem Ipsum passages, and more recently with desktop publishing software
                          like Aldus PageMaker including versions of Lorem Ipsum</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      {/* <Footer2/> */}
    </>
  )
}

export default Faq
