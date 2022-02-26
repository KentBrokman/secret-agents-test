
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../../../store/ducks/user/selectors'
import { useProfileCardStyles } from './ProfileCard_styles'
import { useState } from 'react';
import {setLoadingStatus, setUserData} from '../../../../store/ducks/user/actionCreators'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { LoadingStatus } from '../../../../utils/utils';



export const ProfileCard = () => {
    // styles
    const profileCardStyles = useProfileCardStyles()
    //
    // utils
    const dispatch = useDispatch()
    //
    // global state
    const userData = useSelector(selectUser)
    //
    // local state
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    //
    //handlers
    const onCardClick = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(!open)
    }
    const handleCardClose = () => {
        setAnchorEl(null)
        setOpen(!open)
    }
    const onLogOutClick = () => {
        dispatch(setUserData({user: null, authData: null}))
        dispatch(setLoadingStatus(LoadingStatus.NEVER))
        handleCardClose()
    }
    //
    return (
        <>
            <div className={profileCardStyles.card} onClick={onCardClick}>
                <img src={userData.avatar_url} alt='avatar' />
                <span>{userData.username}</span>
                <MoreVertIcon />
            </div>
            <Popover
                // id={id}
                className={profileCardStyles.popover}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCardClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Button onClick={onLogOutClick} variant="contained">Выйти из учетной записи</Button>
            </Popover>
        </>
    )
}