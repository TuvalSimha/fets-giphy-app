import { useQuery } from "react-query";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { getRandomGif } from "../app/fets/endpoint";
import React from "react";

export function RandomGif() {
  const [url, setUrl] = useState("");
  const query = useQuery("random-gif", getRandomGif);

  useEffect(() => {
    if (
      !query.isLoading &&
      query.data &&
      query.data.data &&
      query.data.data.images?.original?.url
    ) {
      setUrl(query.data.data.images.original.url);
    }
  }, [query]);

  if (query.isLoading) {
    return <p>Loading...</p>;
  }

  if (query.isError || !query.data || !query.data.data) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="container w-full h-full flex flex-col items-center align-middle justify-center mt-[50px]">
      <Button className="mb-[50px]" onClick={() => query.refetch()}>
        Get Random Gif
      </Button>
      <Image src={url} alt="Random Gif" width={500} height={500} />
    </div>
  );
}
