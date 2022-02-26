import { makeStyles } from '@mui/styles';


export const useNewsPageStyles = makeStyles(() => ({
    wrapper: {
        height: '100vh',
        width: '100%',

        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        height: '100%',
        width: '60%',
    },
    header: {
        height: '16%',

        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}))