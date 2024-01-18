import { combineReducers } from "redux";
	import authReducer, { AuthProps } from ./"authReducer"

export interface RootReducerProps {
	auth: AuthProps,
}

const RootReducer = combineReducers<RootReducerProps>({
	auth: authReducer,
});

export default RootReducer;