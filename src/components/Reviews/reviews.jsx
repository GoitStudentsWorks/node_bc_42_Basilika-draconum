import React, { useState } from 'react';
import downArrow1 from '../../images/downArrow1.svg';
import downArrow2 from '../../images/downArrow2.svg';
import css from './reviews.module.css';
import { data } from './reviewsData';
import {BsFillStarFill} from 'react-icons/bs';

const Slider = () => {
const [currentReview, setCurrentReview] = useState(0);

const prevSlide = () => {
  setCurrentReview(
      currentReview === data.length - 1 ? 0 : currentReview + 1
    )
};

  const nextSlide = () => {
    setCurrentReview(
      currentReview === data.length - 1 ? 0 : currentReview + 1
    )
  }

return (
  <>
    <div className={css.container}>
      <h2 className={css.foot__title}>REVIEWS</h2>
      <ul className={css.list}>
        {data
          .slice(
            currentReview,
            currentReview +
              Math.min(data.length - currentReview, window.innerWidth >= 1280 ? 2 : 1)
          )
          .map((review, index) => (
            <li className={css.item} key={review.id}>
              <div>
                <div className={css.block}>
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className={css.photo}
                  />
                  <div className={css.blockMob}>
                    <h2 className={css.name}>{review.name}</h2>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < review.rating
                              ? `${css.starActive}`
                              : `${css.star}`
                          }
                        >
                           <BsFillStarFill />
                        </span>
                      ))}
                    </div>
                    <p className={css.text}>{review.text}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
      <div className={css.icons}>
        <button className={css.button} onClick={prevSlide}>
          <img src={downArrow2} alt="Arrow" className={css.icon} />
        </button>
        <button className={css.button} onClick={nextSlide}>
          <img src={downArrow1} alt="Arrow" className={css.icon} />
        </button>
      </div>
    </div>
  </>
);
};

export default Slider;