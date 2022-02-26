


import { Outlet } from 'react-router-dom';
import { useNewsPageStyles } from './NewsPage_styles';
import { ProfileCard } from './components/ProfileCard/ProfileCard';


export const NewsPage = () => {
    // styles
    const newsPagesStyles = useNewsPageStyles()
    //
    return (
        <div className={newsPagesStyles.wrapper}>
            <div className={newsPagesStyles.content}>
                <div className={newsPagesStyles.header}>
                    <ProfileCard />
                </div>
                <Outlet />
            </div>
        </div>
    )
}