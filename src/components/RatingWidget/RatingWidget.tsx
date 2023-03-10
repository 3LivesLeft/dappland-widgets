import React from 'react';
import { ReactElement, useEffect, useState } from 'react';
import useRatingData from '../../hooks/useRatingData';
import useTheme from '../../hooks/useTheme';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Logo } from '../Logo/Logo';
import './ratingWidget.scss';
import { ActiveStar, OutlineStar } from './Stars/Stars';

const RatingWidget = (): ReactElement => {
  const [dappName, setDappName] = useState('');
  const { ratingData, isLoading } = useRatingData(dappName);
  const theme = useTheme();
  const totalStars = 5;
  const activeStars = ratingData ? ratingData.averageRating : 0;
  const url = `https://www.dappland.com/${dappName}`;

  function handleClick(): void {
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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="dappland-review__logo">
            <a className="dappland-review__link" href={url}>
              <h2 className="dappland-review__title">{ratingData?.dappKey}</h2>
            </a>
          </div>
          <div className="dappland-review__stars">
            {Array.from({ length: totalStars }).map((_, index) =>
              activeStars && index < activeStars ? <ActiveStar key={index} /> : <OutlineStar key={index} />
            )}
          </div>
          <div className="dappland-review__rating-container">
            <span className="dappland-review__rating">{activeStars}</span>
            <span className="dappland-review__total-rating"> / {totalStars}</span>
          </div>
          <div className="dappland-review__logo--desktop">
            <Logo />
          </div>
        </>
      )}
    </div>
  );
};

export default RatingWidget;
