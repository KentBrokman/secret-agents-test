import { useLogInStyles } from "./LogInPage_styles"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../store/ducks/user/thunks";
import { LoadingStatus } from '../../utils/utils'
import { selectUserLoadingStatus, selectUser } from '../../store/ducks/user/selectors'



export const LogInPage = () => {
    // styles 
    const logInStyles = useLogInStyles()
    //
    // utils
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //
    // global state
    const userLoadingStatus = useSelector(selectUserLoadingStatus)
    const userData = useSelector(selectUser)
    //
    // local state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [alert, setAlert] = useState(false)

    //
    // handlers
    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleCloseAlert = () => {
        setAlert(false)
    }
    const onButtonClick = () => {
        if (!email || !password) {
            setAlert(true)
        } else {
            dispatch(getUserData(email, password))
        }
    }
    //
    // life cicle methods
    useEffect(() => {
        if (userData) {
            navigate('/news')
        }
    }, [userData, navigate])
    //
    return (
        <div className={logInStyles.wrapper}>
            <div className={logInStyles.login}>
                {userLoadingStatus === LoadingStatus.LOADING ?
                    <CircularProgress /> :
                    <>
                        <div className={logInStyles.login__title}>
                            Вход
                        </div>
                        <div className={logInStyles.login__forms}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={onEmailChange}
                            />
                            <TextField
                                label="Пароль"
                                variant="outlined"
                                onChange={onPasswordChange}
                                value={password}
                            />
                        </div>
                        <Button variant="contained" onClick={onButtonClick}>Войти</Button>
                    </>
                }
            </div>
            <Snackbar open={alert} autoHideDuration={6000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <MuiAlert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
                    Введите email и пароль!
                </MuiAlert>
            </Snackbar>
        </div>
    )
}