import { useOutletContext } from 'react-router-dom';
import ReviewItem from '../../components/review-item/review-item';
import { Reviews } from '../../types/review';

function FilmPageReviews(): JSX.Element {
  const [, comments] = useOutletContext<[null, Reviews]>();

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        { comments.slice(comments.length / 2).map((review) => <ReviewItem review={ review } key={ review.id } />) }
      </div>
      <div className="film-card__reviews-col">
        { comments.slice(0, comments.length / 2).map((review) => <ReviewItem review={ review } key={ review.id } />) }
      </div>
    </div>
  );
}

export default FilmPageReviews;
