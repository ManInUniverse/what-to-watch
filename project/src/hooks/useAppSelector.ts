import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../types/store-type';

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export { useAppSelector };
