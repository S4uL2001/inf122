import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootReducerProps } from "../reducers";
import * as AuthFunctions from "../actions/auth";

const mapStateToProps = (state: RootReducerProps, ownProps: any) => ({
	...ownProps,
	key: state.auth.key,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(AuthFunctions, dispatch);

const AuthContainer = (component: any) => {
	return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default AuthContainer;
