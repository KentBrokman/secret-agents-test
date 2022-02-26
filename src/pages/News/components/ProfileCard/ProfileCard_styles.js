import { makeStyles } from '@mui/styles';


export const useProfileCardStyles = makeStyles(() => ({
    card: {
        height: '80%',
        width: '300px',

        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

        borderRadius: '20px',
        cursor: 'pointer',

        boxShadow: '0px 0px 6px 4px rgba(0,0,0,0.42)',
        transition: 'all 0.1s linear 0s',

        '&:hover': {
            color: 'rgb(16,65,251)',
            boxShadow: '0px 0px 6px 4px rgba(16,65,251,0.42)'
        },

        '& img': {
            height: '70%',

            borderRadius: '20px'
        },

        '& span': {
            fontSize: '18px',
            fontWeight: '500'
        },

        '& .MuiSvgIcon-root': {
            fontSize: '30px'
        }

    },
    popover: {
        '& .MuiPopover-paper': {
            marginTop: '14px'
        }
    }
}))