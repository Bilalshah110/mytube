"use client";
import YouTube from "react-youtube";
import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");
  const [videoCards, setVideoCards] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const videoId = link.substring(link.indexOf("=") + 1);
    const cards = [];
    for (let i = 0; i < 51; i++) {
      cards.push(
        <div key={i} className="m-4">
          <YouTube
            videoId={videoId}
            opts={{
              height: "240",
              width: "320",
              playerVars: {
                autoplay: 1,
                mute: 1
              },
            }}
          />
        </div>
      );
    }
    setVideoCards(cards);
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <h1 className="text-center text-2xl mb-5">YouTube</h1>
      <form onSubmit={handleSearch}>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
          placeholder="Please enter the link of YouTube video"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 gap-4 mt-4">{videoCards}</div>
    </div>
  );
}
