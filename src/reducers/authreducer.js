// import {
// 	FETCH_USER,
// 	FETCH_USER_SUCCESS,
// 	FETCH_USER_FAILED,
// 	USER_SIGN_IN,
// 	USER_SIGN_IN_FAILED,
// 	USER_SIGN_OUT,
// 	CLEAR_LOGIN_ERROR,
// 	USER_SIGNUP,
// 	USER_SIGNUP_FAILED,
// 	CLEAR_SIGNUP_ERROR,
// } from '../actions/types'

// export const INITIAL_STATE = {
// 	info: null,
// 	loading: false,
// 	error: {
// 		flag: false,
// 		msg: null,
// 	},
// }

// // eslint-disable-next-line import/no-anonymous-default-export
// export default (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case FETCH_USER:
// 			return {
// 				...state,
// 				loading: true,
// 			}
// 		case FETCH_USER_SUCCESS:
// 			return {
// 				...state,
// 				info: action.payload,
// 				loading: false,
// 			}
// 		case FETCH_USER_FAILED:
// 			return {
// 				...state,
// 				loading: false,
// 				info: null,
// 			}
// 		case USER_SIGN_IN:
// 			return {
// 				...state,
// 				loading: true,
// 			}
// 		case USER_SIGN_IN_FAILED:
// 			return {
// 				...state,
// 				info: null,
// 				loading: false,
// 				error: {
// 					flag: true,
// 					msg: action.payload,
// 				},
// 			}
// 		case USER_SIGNUP:
// 			return {
// 				...state,
// 				loading: true,
// 			}
// 		case USER_SIGNUP_FAILED:
// 			return {
// 				...state,
// 				info: null,
// 				loading: false,
// 				error: {
// 					flag: true,
// 					msg: action.payload,
// 				},
// 			}
// 		case USER_SIGN_OUT:
// 			return INITIAL_STATE
// 		case CLEAR_LOGIN_ERROR:
// 			return {
// 				...state,
// 				loading: false,
// 				error: {
// 					flag: false,
// 					msg: null,
// 				},
// 			}
// 		case CLEAR_SIGNUP_ERROR:
// 			return {
// 				...state,
// 				loading: false,
// 				error: {
// 					flag: false,
// 					msg: null,
// 				},
// 			}
// 		default:
// 			return state
// 	}
// }
