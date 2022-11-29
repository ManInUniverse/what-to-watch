type ShowMoreButtonProps = {
  onButtonClick: () => void;
}

function ShowMoreButton(props: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button onClick={ props.onButtonClick } className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
