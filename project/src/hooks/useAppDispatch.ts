import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch };
