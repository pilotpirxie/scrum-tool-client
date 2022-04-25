import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootDispatch, RootState } from './store';

export const useAppDispatch = () => useDispatch<RootDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
