

import { Route, Routes, Navigate } from 'react-router-dom';


export const NewsPage = () => {
    return (
        <div>
            header
            <Route path="/" element={<div>news</div>} />
            <Route path="/56" element={<div>one news</div>} />
        </div>
    )
}