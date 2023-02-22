import { useEffect, useState } from 'react';
import { useMobile } from '../../hooks/useMedia';
import useRatingData from '../../hooks/useRatingData';
import useTheme from '../../hooks/useTheme';
import { Logo } from '../Logo/Logo';
import './ratingWidget.scss';
import { ActiveStar, OutlineStar } from './Stars/Stars';

const RatingWidget = () => {
  const [dappName, setDappName] = useState(''); 
  const { ratingData, isLoading } = useRatingData(dappName);
  const theme = useTheme();
  const isMobile = useMobile();

  const totalStars = 5;
  const activeStars = ratingData?.averageRating;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("dappname");    
    if (name) {
      setDappName(name);
    }
  }, []);

  return (
    <div className={`dappland-review dappland-review--${theme.mode}`}>
      <div className="dappland-review__logo">{isMobile ? <Logo /> : <h2 className='dappland-review__title'>{ratingData?.dappKey}</h2>}</div>
      <div className='dappland-review__stars'> 
        {[...new Array(totalStars)].map((arr, index) => {
        return activeStars && index < activeStars ? <ActiveStar key={index} /> : <OutlineStar key={index} />;
      })}
      </div>
      <div className="dappland-review__rating-container">
        <span className="dappland-review__rating">{activeStars}</span>
        <span className="dappland-review__total-rating"> / {totalStars}</span>
      </div>
      {!isMobile && <div className="dappland-review__logo--desktop"><Logo /></div>}
    </div>
  );
};

export default RatingWidget;