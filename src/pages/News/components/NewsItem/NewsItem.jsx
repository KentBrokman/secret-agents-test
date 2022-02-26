import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNewsItemStyles } from "./NewsItem_styles"
import { newsApi } from '../../../../api/api'

import CircularProgress from '@mui/material/CircularProgress';



export const NewsItem = () => {
    // styles
    const newsItemStyles = useNewsItemStyles()
    //
    // local state
    const newsItemId = useParams().id
    const [newsItem, setNewsItem] = useState(null)
    //
    // life cycle methods
    useEffect(() => {
        async function fetchData() {
            const data = await newsApi.fetchNewsItem(newsItemId)
            setNewsItem(data.news)
        }
        fetchData()
    }, [newsItemId])
    //
    return (
        <div className={newsItemStyles.wrapper}>
            {newsItem ?
                <>
                    <img src={newsItem.image_url} alt='newsImg' />
                    <h3>{newsItem.title}</h3>
                    <p>{newsItem.body}</p>
                </> :
                <div className={newsItemStyles.loader}>
                    <CircularProgress />
                </div>
            }

        </div>
    )
}