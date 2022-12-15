import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addNewCommentAction } from '../../store/api-actions';
import { getAppDataProcessingStatus } from '../../store/slices/app-data/selectors';
import { Film } from '../../types/film';

enum CommentLength {
  MIN = 50,
  MAX = 400,
}

type AddReviewFormProps = {
  film: Film;
}

function AddReviewForm(props: AddReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isAppDataProcessing = useAppSelector(getAppDataProcessingStatus);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    rating: 0,
    comment: ''
  });

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if ((formData.comment.length >= CommentLength.MIN && formData.comment.length <= CommentLength.MAX) && formData.rating > 0) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [formData]);

  const onFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isFormValid) {
      dispatch(addNewCommentAction({ filmId: props.film.id, commentData: formData }));
    }
  };

  const onRatingInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: Number.parseInt(evt.target.value, 10) });
  };

  const onReviewTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, comment: evt.target.value });
  };

  return (
    <form onSubmit={ onFormSubmit } action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input onChange={ onRatingInputChange } className="rating__input" id="star-10" type="radio" name="rating" value="10" />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input onChange={ onRatingInputChange } className="rating__input" id="star-9" type="radio" name="rating" value="9" />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input onChange={ onRatingInputChange } className="rating__input" id="star-8" type="radio" name="rating" value="8" />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input onChange={ onRatingInputChange } className="rating__input" id="star-7" type="radio" name="rating" value="7" />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input onChange={ onRatingInputChange } className="rating__input" id="star-6" type="radio" name="rating" value="6" />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input onChange={ onRatingInputChange } className="rating__input" id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input onChange={ onRatingInputChange } className="rating__input" id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input onChange={ onRatingInputChange } className="rating__input" id="star-3" type="radio" name="rating" value="3" />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input onChange={ onRatingInputChange } className="rating__input" id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input onChange={ onRatingInputChange } className="rating__input" id="star-1" type="radio" name="rating" value="1" />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={ onReviewTextAreaChange } className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength={50} maxLength={400} required></textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={ !isFormValid || isAppDataProcessing }
          >{ isAppDataProcessing ? 'Sending...' : 'Post' }
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
