"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RandomGif } from "../components/random-gif";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <RandomGif />
      </main>
    </QueryClientProvider>
  );
}
