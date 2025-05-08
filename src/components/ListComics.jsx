import comics from "../../comics";
import React from "react";
import ComicCard from "./ComicCard";

const ListComics = () => {
    return (
        comics.map((comic) => (
            <ComicCard series={comic.series} thumb={comic.thumb} />
        ))
    )
}

export default ListComics;