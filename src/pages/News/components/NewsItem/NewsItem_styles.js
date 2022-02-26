import { makeStyles } from '@mui/styles';


export const useNewsItemStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',

        display: 'flex',
        flexDirection: 'column',

        '& img': {
            width: '40%',

            borderRadius: '20px'
        }
    },
    loader: {
        width: '100%',
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center'
    }
}))