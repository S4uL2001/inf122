import {  SET_AUTH } from "../definitions/authConstants";
import { ActionProps } from "../../shared/types/action.type";

export const setAuth = (key: any): ActionProps => ({
    type: SET_AUTH,
    payload: {
        key
    }
})
