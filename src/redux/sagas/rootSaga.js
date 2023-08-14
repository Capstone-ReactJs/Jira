import {all} from "redux-saga/effects";
import * as Cyberbugs from "./userCyberbugsSaga";

export function* rootSaga(){
    yield all ([
        Cyberbugs.followSignin()
    ])
}