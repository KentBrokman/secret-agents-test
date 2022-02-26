import { useState } from "react"
import { usePaginatorStyles } from "./Paginator_styles"

import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export const Paginator = ({
    totalItemsCount,
    pageSize = 10,
    portionSize = 5,
    onPageChange,
    currentPage
}) => {
    // styles
    const paginatorStyles = usePaginatorStyles()
    //
    const pages = []                                            // номера страниц
    const pagesCount = Math.ceil(totalItemsCount / pageSize)    // кол-во страниц
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionsCount = Math.ceil(pagesCount / portionSize)       // кол-во страниц, отображаемых на странице в данный момент
    const [portionNumber, setPortionNumber] = useState(1);            // текущая отображаемая порция
    const leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    const portionRightBorder = portionNumber * portionSize;
    return (
        <div className={paginatorStyles.wrapper}>
            {pages > 5 &&
                <IconButton
                    color="primary"
                    className={paginatorStyles.arrowButton}
                    onClick={() => setPortionNumber(portionNumber - 1)}
                    disabled={portionNumber === 1}>
                    <ArrowBackIosNewIcon />
                </IconButton>
            }
            <div className={paginatorStyles.pages}>
                {pages.filter(page => page >= leftPortionBorder && page <= portionRightBorder)
                    .map(p => {
                        return (
                            <IconButton
                                color='primary'
                                className={`${paginatorStyles.pageButton} ${currentPage === p && paginatorStyles.pageButtonActive}`}
                                onClick={() => onPageChange(p)}
                                key={p}>{p}</IconButton>
                        )
                    }
                    )
                }
            </div>
            {pages > 5 &&
                <IconButton
                    color="primary"
                    className={paginatorStyles.arrowButton}
                    onClick={() => setPortionNumber(portionNumber + 1)}
                    disabled={portionNumber === portionsCount}>
                    <ArrowForwardIosIcon />
                </IconButton>
            }
        </div>
    )
}