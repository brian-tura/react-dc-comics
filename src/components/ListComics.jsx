import comics from "../../comics";
import React from "react";
import ComicCard from "./ComicCard";

const ListComics = () => {
    return (
        <>
            <ComicCard series={comics[0].series} thumb={comics[0].thumb} />
            <ComicCard series={comics[1].series} thumb={comics[1].thumb} />
            <ComicCard series={comics[2].series} thumb={comics[2].thumb} />
            <ComicCard series={comics[3].series} thumb={comics[3].thumb} />
            <ComicCard series={comics[4].series} thumb={comics[4].thumb} />
            <ComicCard series={comics[5].series} thumb={comics[5].thumb} />
            <ComicCard series={comics[6].series} thumb={comics[6].thumb} />
            <ComicCard series={comics[7].series} thumb={comics[7].thumb} />
            <ComicCard series={comics[8].series} thumb={comics[8].thumb} />
            <ComicCard series={comics[9].series} thumb={comics[9].thumb} />
            <ComicCard series={comics[10].series} thumb={comics[10].thumb} />
            <ComicCard series={comics[11].series} thumb={comics[11].thumb} />

        </>
    )
}

export default ListComics;