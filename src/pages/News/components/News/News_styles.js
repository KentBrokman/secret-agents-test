import { makeStyles } from '@mui/styles';


export const useNewsStyles = makeStyles(() => ({
    wrapper: {
        height: '84%',
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    newsList: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',

        overflow: 'auto',

        '& a': {
            textDecoration: 'none',
            color: 'black'
        }
    },
    newsCard: {
        height: '340px',
        width: '340px',
        margin: '10px',

        display: 'flex',
        flexDirection: 'column',

        backgroundColor: 'rgb(16,65,251)',
        borderRadius: '20px',

        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.1s linear 0s',

        '&:hover': {
            boxShadow: '0px 0px 6px 4px rgba(16,65,251,0.42)'
        },
    },
    newsCard__img: {
        height: '56%',
        width: '100%',

        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    newsCard__title: {
        fontSize: '20px',
        fontWeight: '500',
        color: 'white',
        margin: '6px 10px',

        textShadow: '1px 1px 6px #000000'
    },
    newsCard__info: {
        margin: '0 10px',
        fontSize: '18px'
    },

    loader: {
        marginTop: '40px'
    }
}))