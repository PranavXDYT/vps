import { Anime } from "@/types";
import classNames from "classnames";
import React from "react";
import AnimeCard from "./AnimeCard";

interface AnimeListProps {
  data: Anime[];
}

const AnimeList: React.FC<AnimeListProps> = ({ data }) => {
  return (
    <div
      className={classNames(
        data.length ? "flex flex-wrap -my-8" : "text-center"
      )}
    >
      {data.length ? (
        data.map((anime) => (
          <div
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 px-2 snap-mandatory my-8"
            key={anime.ani_id}
          >
            <AnimeCard anime={anime} />
          </div>
        ))
      ) : (
        <p className="text-2xl">Không có dữ liệu.</p>
      )}
    </div>
  );
};

export default AnimeList;
