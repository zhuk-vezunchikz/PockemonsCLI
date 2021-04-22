import { all, call, put, takeEvery } from "redux-saga/effects";
import makeRequest from "../service/makeRequest";
import get from 'lodash/get';
import camelCase from 'lodash/camelCase';
import api from '../service/api/index';


function* watchRequest({ type, payload }) {
    try {

        const requestProperties = api[camelCase(type)](payload);

        const response = yield call(makeRequest, requestProperties);

        const successAction = {
            type: type.replace('_REQUEST', '_SUCCESS'),
            payload: response
        }

        yield put(successAction);
    } catch (error) {
        const { response } = error;
        
        const failureAction = {
            type: type.replace('_REQUEST', '_FAILURE'),
            payload
        }

        if (response) {
            failureAction.response = response;
            failureAction.message = get(response, 'data.error', '');
            console.log(failureAction.message);
        }

    }

}

function* watchRequestSaga() {
    yield all([takeEvery(action => action.type.endsWith('_REQUEST'), watchRequest)]);
}

export default watchRequestSaga;