import { useEffect, useState } from 'react';

type RatingWidgetData = {
  averageRating: number;
  dappKey: string;
  voteCount: number;
  ratings: number;
};

const useRatingData = (dappName: string) => {
  const [ratingData, setRatingData] = useState<RatingWidgetData>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://cloud-dev.argent-api.com/v1/tokens/dapps/ratings/${dappName}`);
        const data = await response.json();
        setRatingData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (dappName) {
      fetchData();
    }
  }, [dappName]);
  return { ratingData, isLoading };
};

export default useRatingData;
