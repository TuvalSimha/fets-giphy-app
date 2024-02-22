"use client"

import { RandomGif } from "@/components/random-gif";
import { QueryClient, QueryClientProvider } from "react-query";

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
