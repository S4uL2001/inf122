import { CreateReducer } from "../../shared/utils/createReducer";
import { SET_INDEX } from "../definitions/indexConstants";
import { ActionProps } from "../../shared/types/action.type";

export interface IndexProps {
    // Replace with your var and it's type
    key: any;
}

export interface IndexReducerProps extends IndexProps {
    setIndex: (key: any) => ActionProps;
}

const initState: IndexProps = {
    key: ""
};

const indexReducer = CreateReducer(initState, {
    [SET_INDEX](state: IndexProps, action: ActionProps): IndexProps {
        const { key } = action?.payload;
        return {
            ...state,
            key,
        };
    },
});

export default indexReducer;



