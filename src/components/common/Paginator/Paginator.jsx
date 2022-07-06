import React, {useEffect, useState} from "react";
import style from "./Paginator.module.css";


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 25}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);

    return (
        <div className={style.pages}>
            <button disabled = {!(portionNumber > 1)} onClick={()=>{setPortionNumber(portionNumber -1)}}>Prev</button>
        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map((p) => {
                return <span key={p} className={currentPage === p && style.selectedPage}
                onClick={(e) => {onPageChanged(p)}}>{p}</span>
            })}
            <button disabled = {!(portionCount > portionNumber)} onClick={()=>{setPortionNumber(portionNumber +1)}}>Next</button>
        </div>)
}
export default Paginator;