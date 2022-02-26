

import { makeStyles } from '@mui/styles';


export const usePaginatorStyles = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    pageButton: {
        '&.MuiButtonBase-root': {
            height: '46px',
            width: '46px'
        }
    }
}))