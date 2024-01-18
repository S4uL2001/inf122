import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { RootReducerProps } from "../reducers";
import * as IndexFunctions from "../actions/index";

const mapStateToProps = (state: RootReducerProps, ownProps: any) => ({
	...ownProps,
	key: state.index.key,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(IndexFunctions, dispatch);

const IndexContainer = (component: any) => {
	return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default IndexContainer;
