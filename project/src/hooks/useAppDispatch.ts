import { useDispatch } from 'react-redux';
import { store } from '../store/store';

type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch };
