import React, { useEffect, useState } from 'react';
import useRatingData from '../../hooks/useRatingData';
import useTheme from '../../hooks/useTheme';
import { Logo } from '../Logo/Logo';
import './ratingWidget.scss';
import { ActiveStar, OutlineStar } from './Stars/Stars';

const RatingWidget = () => {
  const [dappName, setDappName] = useState('');
  const { ratingData, isLoading } = useRatingData(dappName);
  const theme = useTheme();
  const url = `https://www.dappland.com/${dappName}`;

  const totalStars = 5;
  const activeStars = ratingData?.averageRating;

  function handleClick() {
    if (window.top) {
      window.top.location.href = url;
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('dappname');
    if (name) {
      setDappName(name.toLowerCase());
    }
  }, []);

  return (
    <div className={`dappland-review dappland-review--${theme.mode}`} onClick={handleClick}>
      <a className="dappland-review__link" href={url}>
        <div className="dappland-review__logo">
          <h2 className="dappland-review__title">{ratingData?.dappKey}</h2>
        </div>
      </a>
      <div className="dappland-review__stars">
        {[...new Array(totalStars)].map((arr, index) => {
          return activeStars && index < activeStars ? <ActiveStar key={index} /> : <OutlineStar key={index} />;
        })}
      </div>
      <div className="dappland-review__rating-container">
        <span className="dappland-review__rating">{activeStars}</span>
        <span className="dappland-review__total-rating"> / {totalStars}</span>
      </div>
      <div className="dappland-review__logo--desktop">
        <Logo />
      </div>
    </div>
  );
};

export default RatingWidget;
