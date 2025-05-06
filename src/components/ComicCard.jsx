import React from "react";
import ListComics from "./ListComics";

const ComicCard = (comic) => {
    return (
        <div className="comic-card">
            <div>
                <img src={comic.thumb} />
            </div>
            
            <div className="comic-card-series">
                <h3>{comic.series}</h3>
            </div>
        </div>



    )
}

export default ComicCard;