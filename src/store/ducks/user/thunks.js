import { authApi } from "../../../api/api"
import { LoadingStatus } from "../../../utils/utils"
import { setLoadingStatus, setUserData } from "./actionCreators"


export const getUserData = (email, password) => {
    return async (dispatch) => {
        dispatch(setLoadingStatus(LoadingStatus.LOADING))
        const data = await authApi.logIn(email, password)
        dispatch(setUserData({
            user: data.data.user,
            authData: {
                accessToken: data.headers['access-token'],
                client: data.headers.client,
                uid: data.headers.uid
            }
        }))
        dispatch(setLoadingStatus(LoadingStatus.LOADED))
    }
}