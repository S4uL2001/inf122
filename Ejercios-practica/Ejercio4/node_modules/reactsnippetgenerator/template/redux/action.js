import {  SET_INDEX } from "../definitions/indexConstants";
import { ActionProps } from "../../shared/types/action.type";

export const setIndex = (key: any): ActionProps => ({
    type: SET_INDEX,
    payload: {
        key
    }
})
