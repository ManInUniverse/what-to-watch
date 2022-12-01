import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/store-type';

const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch };
