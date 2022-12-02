import { Reviews } from '../../types/review';

import ReviewItem from '../../components/review-item/review-item';

type FilmPageReviewsProps = {
  reviews: Reviews;
}

function FilmPageReviews(props: FilmPageReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        { props.reviews.slice(props.reviews.length / 2).map((review) => <ReviewItem review={ review } key={ review.id } />) }
      </div>
      <div className="film-card__reviews-col">
        { props.reviews.slice(0, props.reviews.length / 2).map((review) => <ReviewItem review={ review } key={ review.id } />) }
      </div>
    </div>
  );
}

export default FilmPageReviews;
