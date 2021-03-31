import * as DataApiUtil from '../util/data_util';

export const RECEIVE_DATA = "RECEIVE_DATA";
export const RECEIVE_DATA_ERRORS = "RECEIVE_DATA_ERRORS";

const receiveData = (data) => ({
    type: RECEIVE_DATA,
    data
});

const receiveDataErrors = (errors) => ({
    type: RECEIVE_DATA_ERRORS,
    errors
})

export const getData = () => dispatch => {
    DataApiUtil.getData()
        .then(data => dispatch(receiveData(data)))
        .catch(errors => dispatch(receiveDataErrors(errors)))
};