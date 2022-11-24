import { ReviewType } from '../../types/review-type';

import Review from '../../components/review/review';

type FilmPageReviewsProps = {
  reviews: ReviewType[];
}

function FilmPageReviews(props: FilmPageReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        { props.reviews.filter((_,index) => index % 2 === 0).map((review) => <Review review={ review } key={ review.id } />) }
      </div>
      <div className="film-card__reviews-col">
        { props.reviews.filter((_,index) => index % 2 !== 0).map((review) => <Review review={ review } key={ review.id } />) }
      </div>
    </div>
  );
}

export default FilmPageReviews;
