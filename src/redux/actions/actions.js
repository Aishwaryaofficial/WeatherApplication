import * as AppConstant from '../../util/AppConstant';

export const requestApiData = zipCode => (
    {
        type: AppConstant.REQUEST_API_DATA,
        payload: zipCode
    }
);
export const receiveApiData = data => (
    {
        type: AppConstant.RECEIVE_API_DATA,
        payload: data
    }
);