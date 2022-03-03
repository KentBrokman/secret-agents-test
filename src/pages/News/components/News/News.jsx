import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useNewsStyles } from './News_styles'

import CircularProgress from '@mui/material/CircularProgress';
import { Paginator } from "../Paginator/Paginator";
import api, { newsApi } from "../../../../api/api";
import { useSelector } from "react-redux";
import { selectAuthData } from "../../../../store/ducks/user/selectors";


export const News = () => {
    // styles
    const newsStyles = useNewsStyles()
    //
    //global state
    const authData = useSelector(selectAuthData)
    //
    // local state
    const [news, setNews] = useState([])
    const [newsToDisplay, setNewsToDisplay] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10
    //
    // handlers
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    //
    // life cycle methods
    useEffect(() => {
        if (authData) {
            async function fetchData() {
                const { data } = await api.get('/news')
                setNews(data.news)
            }
            fetchData()
        }
    }, [authData])
    useEffect(() => {
        setNewsToDisplay(news.slice(currentPage * pageSize - pageSize, currentPage * pageSize))
    }, [news, currentPage])
    //
    return (
        <div className={newsStyles.wrapper}>
            {news.length > 10 &&
                <Paginator
                    pageSize={pageSize}
                    totalItemsCount={news.length}
                    onPageChange={onPageChange}
                    currentPage={currentPage}
                />}
            {news.length > 0 ?
                <div className={newsStyles.newsList}>
                    {newsToDisplay.map((item) => {
                        return (
                            <Link to={`/news/${item.id}`} key={item.id}>
                                <div className={newsStyles.newsCard}>
                                    <div className={newsStyles.newsCard__img} style={{ backgroundImage: `url(${item.image_url})` }}></div>
                                    <h6 className={newsStyles.newsCard__title}>{item.title}</h6>
                                    <span className={newsStyles.newsCard__info} dangerouslySetInnerHTML={{__html: item.short_text}} />
                                </div>
                            </Link>
                        )
                    })}
                </div> :
                <div className={newsStyles.loader}>
                    <CircularProgress />
                </div>
            }
        </div>
    )
}