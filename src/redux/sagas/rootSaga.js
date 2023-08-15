import {all} from "redux-saga/effects";
import * as Cyberbugs from "./UserCyberbugsSaga";

export function* rootSaga(){
    yield all ([
        Cyberbugs.followSignin()
    ])
}