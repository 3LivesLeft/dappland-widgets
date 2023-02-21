import { useMobile } from '../../hooks/useMedia';
import useRatingData from '../../hooks/useRatingData';
import useTheme from '../../hooks/useTheme';
import { Logo } from '../Logo/Logo';
import './ratingWidget.scss';
import { ActiveStar, OutlineStar } from './Stars/Stars';

const RatingWidget = () => {
  const { ratingData, isLoading } = useRatingData();  
  const theme = useTheme();
  const isMobile = useMobile();

  const totalStars = 5;
  const activeStars = ratingData?.averageRating;

  return (
    <div className={`dappland-review dappland-review--${theme.mode}`}>
      <div className="dappland-review__logo">{isMobile ? <Logo /> : <h2 className='dappland-review__title'>{ratingData?.dappKey}</h2>}</div>
      <div className='dappland-review__stars'> 
        {[...new Array(totalStars)].map((arr, index) => {
        return activeStars && index < activeStars ? <ActiveStar /> : <OutlineStar />;
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