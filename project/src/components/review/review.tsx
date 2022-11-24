import { ReviewType } from '../../types/review-type';
import { formatDateTime } from '../../utils';

type ReviewProps = {
  review: ReviewType;
}

function Review(props: ReviewProps): JSX.Element {
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

export default Review;
