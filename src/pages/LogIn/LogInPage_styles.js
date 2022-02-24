import { makeStyles } from '@mui/styles';


export const useLogInStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        height: '100vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgb(16,65,251)'
    },
    login: {
        width: '25%',
        height: '35%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',

        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '4px 4px 14px 6px rgba(0,0,0,0.41)'
    },
    login__title: {
        fontSize: '44px',
        fontWeight: '600',
    },
    login__forms: {
        height: '40%',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
}))