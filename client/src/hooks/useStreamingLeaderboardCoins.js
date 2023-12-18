import getTopListDetail from "../services/market/getTopListDetail";
import { useEffect, useState } from "react";
export default function useStreamingLeaderboardCoins() {
  useEffect(() => {
    const toplist = getTopListDetail(1);
    console.log(toplist);
  }, []);
}
