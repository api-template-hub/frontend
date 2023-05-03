// Reviews
/* eslint-disable */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Autoplay } from 'swiper';
import './Reviews.css';
import 'swiper/swiper.min.css';

export default function Reviews() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        customer&apos;s
        {' '}
        <span>review</span>
      </h1>
      <div className="reviews-slider">
        <Swiper
          loop
          autoplay={{ delay: 7500, disableOnInteraction: false }}
          slidesPerView={3}
          centeredSlides
          spaceBetween={20}
          pagination={{ clickable: true }}
          style={{ padding: '1rem' }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-2.png" alt="" />
              <p>
              I absolutely love this grocery delivery app! As a busy mom, I don&apos;t always have
              the time to run to the store and do my shopping. This app has made my life so much
              easier. The selection is great, prices are fair, and the delivery is always on time.
              I highly recommend this app to anyone who wants to save time and make their life easier!
              </p>
              <h3>Molly Weasley</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-1.png" alt="" />
              <p>
              It&apos;s so convenient to be able to shop for groceries from the comfort of 
              my own home and have them delivered straight to my doorstep. The app is user-friendly 
              and easy to navigate. The delivery is always on time and the produce is fresh. Overall, 
              I highly recommend this app to anyone looking for a hassle-free grocery shopping experience.
              </p>
              <h3>I am Lord Voldemort</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-3.png" alt="" />
              <p>
              I love using this grocery delivery app! It saves me so
              much time and hassle compared to going to the store myself.
              The app is easy to use, and the selection of products is great.
              I highly recommend this app to anyone who wants to make their grocery shopping experience more convenient.
              </p>
              <h3>Aegon Targaryen</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="image/pic-4.png" alt="" />
              <p>
              I can&apos;t imagine going back to shopping for groceries in person now
              that I&apos;ve tried this app. It&apos;s so convenient and saves me so
              much time. I love being able to browse and add items to my cart at
              any time of day, and the delivery is always prompt.
              The selection of products is great too - I can find everything I
              need for my family. Highly recommend!
              </p>
              <h3>Bellatrix Lestrange</h3>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
/* eslint-enable */
