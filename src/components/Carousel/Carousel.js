import React from "react";
import "./Carousel.css";
import bn from "../../images/bn.jpg";
import { Row, Heading, Section } from "../../globalStyles";

function Carousel() {
  return (
    <section id="Testimonals">
      <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
        <Row justify="space-between" margin="1rem" wrap="wrap">
          <Heading width="auto" inverse>
            Testimonials
          </Heading>
        </Row>
      </Section>
      <div class="row mt-5 car">
        <div class="col-md-4">
          <h6 justify="center"><b>From customers</b></h6>
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={bn} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    "Quality warehouse, quality services. Well-maintained
                    property. Everything around is perfect."
                  </p>
                  <h5>-Mr. Rajat Dixit </h5>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={bn} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    "Best location, managed by a well-reputed quality company.
                    Efficient staff.
                  </p>
                  <h5>-Mr. Nitesh Sharma</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img src={bn} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    "Good premises, cooperative management, great surroundings,
                    and spacious buildings. Nice service and staff."
                  </p>
                  <h5>-Mr. Dakshit </h5>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <h6 justify="center"><b>From Warehouse owners</b> </h6>
          <div
            id="carouselExampleDark-2"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark-2"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark-2"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark-2"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={bn} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                    ???Palletperday has extensive industry management experience.
                    I recently listed my warehouse on their site, and within a
                    short period of time, 
                  </p>
                  <h5>-Tanveer Mehan</h5>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={bn} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                  Great advantages came from their WHS, which let me to monitor my entire inventory data online with regular updates.
                  </p>
                  <h5>-Sushant Nagpal </h5>
                </div>
              </div>
              <div class="carousel-item">
                <img src={bn} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                  Listed my warehouse with palletperday recently, and i must say im quite impressed with their flexible warehosing services
                  </p>
                  <h5>-Himanshu Malik</h5>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark-2"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark-2"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-4">
          
          <h6 justify="center" ><b>From Brokers</b> </h6>
          
          <div
            id="carouselExampleDark-3"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark-3"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark-3"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark-3"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={bn} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                  About six months ago, we began working with Palletperday to launch our business. As our company expanded, palletperday offered shuttle services.
                  </p>
                  <h5>-Vivek Oberio</h5>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={bn} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                  We got Free-of-cost marketing for our warehouse property and new business opportunity.
                  </p>
                  <h5>-Trilok Kumar</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img src={bn} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p>
                  In addition to being a trustworthy partner, we discovered them to be actually flexible with their services.
                  </p>
                  <h5>-Rishi Sethi</h5>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark-3"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark-3"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
