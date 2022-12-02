import { setError } from '../store/actions';
import { clearErrorAction } from '../store/api-actions';
import { store } from '../store/store';

export const handleError = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
