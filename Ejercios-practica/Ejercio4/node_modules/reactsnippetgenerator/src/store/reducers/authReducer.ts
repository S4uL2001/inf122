import { CreateReducer } from "../../shared/utils/createReducer";
import { SET_AUTH } from "../definitions/authConstants";
import { ActionProps } from "../../shared/types/action.type";

export interface AuthProps {
    // Replace with your var and it's type
    key: any;
}

export interface AuthReducerProps extends AuthProps {
    setAuth: (key: any) => ActionProps;
}

const initState: AuthProps = {
    key: ""
};

const authReducer = CreateReducer(initState, {
    [SET_AUTH](state: AuthProps, action: ActionProps): AuthProps {
        const { key } = action?.payload;
        return {
            ...state,
            key,
        };
    },
});

export default authReducer;



