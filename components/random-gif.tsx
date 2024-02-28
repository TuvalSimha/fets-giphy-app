import { useQuery } from "react-query";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { getRandomGif } from "../app/fets/endpoint";
import React from "react";
import { Loading } from "./ui/Loading";
import { FETS } from "./ui/feTS-icon";
import { FaGithub } from "react-icons/fa";

export function RandomGif() {
  const [url, setUrl] = useState("");
  const { data, error, isLoading, refetch } = useQuery(
    "random-gif",
    getRandomGif
  );

  useEffect(() => {
    if (!isLoading && data && data.data && data.data.images?.original?.url) {
      setUrl(data.data.images.original.url);
    }
  }, [data]);

  return (
    <section className="container flex flex-col justify-between h-screen">
      <header className="h-40 bg-gray-300 rounded-b-2xl flex flex-row justify-center">
        <Button
          disabled={isLoading}
          className="mb-[50px] w-[200px] mt-[50px] active:bg-gray-400"
          onClick={() => refetch()}
        >
          {error ? "Try Again" : "Random GIF"}
        </Button>
      </header>
      <div className="flex flex-row justify-center">
        {isLoading ? (
          <Loading />
        ) : (
          <Image src={url} alt="Random Gif" width={200} height={200} />
        )}
      </div>
      <footer className="bg-gray-300 h-40 bottom-0 rounded-t-2xl flex flex-col items-center justify-center">
        <p className="font-semibold">feTS Demo App</p>
        <a href="https://the-guild.dev/openapi/fets" target="_blank">
          <FETS />
        </a>
        <p className="font-semibold">Build by Tuval Simha</p>
        <a href="https://github.com/TuvalSimha" target="_blank">
          <FaGithub className="w-[34px] h-[36px]" />
        </a>
      </footer>
    </section>
  );
}
