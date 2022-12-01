import { useAppSelector } from '../../hooks/useAppSelector';

import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  if (!error) {
    return null;
  }

  return (
    <div className="error-message">{ error }</div>
  );
}

export default ErrorMessage;
