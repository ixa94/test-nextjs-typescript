import { TypedUseSelectorHook, useSelector } from "react-redux";
import { GlobalState } from "../store/reducer/combinedReducer";


export const useTypedSelector: TypedUseSelectorHook<GlobalState> = useSelector
