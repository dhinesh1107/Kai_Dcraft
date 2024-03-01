import * as adminActionTypes from './adminActionTypes';

const initialAdminState = {
    customers: [],
    products: [],
};

const adminReducer = (state = initialAdminState, { type, payload }) => {
    switch (type) {
        case adminActionTypes.CUSTOMER_DETAILS:
            return {
                ...state,
                customers: payload,
            };
        case adminActionTypes.ADD_PRODUCTS:
            return {
                ...state,
                products: payload,
            };
        default:
            return state;
    }
};

export default adminReducer;