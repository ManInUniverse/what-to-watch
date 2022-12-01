import { Review } from '../../types/review';
import { formatDateTime } from '../../utils';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem(props: ReviewItemProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{ props.review.comment }</p>

        <footer className="review__details">
          <cite className="review__author">{ props.review.user.name }</cite>
          <time className="review__date" dateTime={ formatDateTime(props.review.date, 'YYYY-MM-DD') }>
            { formatDateTime(props.review.date, 'MMMM D, YYYY') }
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{ props.review.rating.toFixed(1) }</div>
    </div>
  );
}

export default ReviewItem;
