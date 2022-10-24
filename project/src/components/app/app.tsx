import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  title: string;
  genre: string;
  releaseDate: string;
}

function App(props: AppProps): JSX.Element {
  return <MainPage title={ props.title } genre={ props.genre } releaseDate={ props.releaseDate }/>;
}

export default App;
