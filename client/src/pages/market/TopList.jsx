import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import Rank from "../../components/ui/Rank";
import Trend from "../../components/ui/Trend";
import Coin from "../../components/ui/Coin";
import Price from "../../components/ui/Price";
//thunk
import { setMarketDataThunk } from "../../store/action/action.market";
//useHooks
import { useDispatch, useSelector } from "react-redux";
import { useRef, useLayoutEffect, useEffect } from "react";
import React from "react";
import { stopStreaming } from "../../store/reducer/reducer.market";
const TopLists = React.forwardRef((props, ref) => {
  const fixedTheadRef = useRef();
  const relativeTheadRef = useRef();
  const coinsList = useSelector((state) => state.market).data || [];
  const streamingPrice =
    useSelector((state) => state.market).streamingPrices || {};
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMarketDataThunk(1));
    return () => dispatch(stopStreaming());
  }, []);
  
  const fixedThead = (
    <Thead
      width="1121px"
      className="z-30 bg-blackest fixed top-[89px] invisible  w-[1121px]"
      ref={fixedTheadRef}
    >
      <Tr>
        <Th className="min-w-[140.117px] text-left">#</Th>
        <Th className="min-w-[140.117px] text-left">Name</Th>
        <Th className="min-w-[140.117px]">Price</Th>
        <Th className="min-w-[140.117px]">1h</Th>
        <Th className="min-w-[140.117px]">4h</Th>
        <Th className="min-w-[140.117px]">9h</Th>
        <Th className="min-w-[140.117px]">Volumn</Th>
        <Th className="min-w-[140.117px]">Cap</Th>
      </Tr>
    </Thead>
  );
  const relativeThead = (
    <Thead
      width="1121px"
      className="z-30 bg-blackest relative top-0  w-[1121px]"
      ref={relativeTheadRef}
    >
      <Tr>
        <Th>#</Th>
        <Th>Name</Th>
        <Th>Price</Th>
        <Th>1h</Th>
        <Th>4h</Th>
        <Th>9h</Th>
        <Th>Volumn</Th>
        <Th>Cap</Th>
      </Tr>
    </Thead>
  );
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const Animate = relativeTheadRef.current.getBoundingClientRect().top;
    const onScroll = () => {
      if (window.scrollY > Animate) {
        console.log(window.scrollY, Animate);
        fixedTheadRef.current.style.visibility = "visible";
        relativeTheadRef.current.style.visibility = "hidden";
      } else {
        fixedTheadRef.current.style.visibility = "hidden";
        relativeTheadRef.current.style.visibility = "visible";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      ref={ref}
      className=" scroll-mt-[89px] w-full bg-blackest relative z-10 font-medium "
    >
      <Table
        width="1121px"
        variant="simple"
        className="relative  bg-blackest z-10  bg-blackest m-auto table-fixed"
      >
        {fixedThead}
        {relativeThead}
        <Tbody>
          {coinsList.map((coin) => (
            <Tr key={coin.id}>
              <Td>
                <Rank value={coin.market_cap_rank} />
              </Td>
              <Td className="text-left">
                {
                  <Coin
                    name={coin.name}
                    shortName={coin.symbol}
                    src={coin.image}
                  />
                }
              </Td>
              <Td>
                <Price
                  amount={
                    streamingPrice.current
                      ? streamingPrice.current[
                          `${coin.symbol}usdt`.toUpperCase()
                        ] || 0
                      : 0
                  }
                  currencyCode="USD"
                  className="text-lightstar font-medium"
                  currencyCodeClassName="hidden"
                />
              </Td>
              <Td>
                <Trend
                  value={
                    streamingPrice.hour
                      ? streamingPrice.hour[`${coin.symbol}usdt`.toUpperCase()]
                          ?.percent || 0
                      : 0
                  }
                />
              </Td>
              <Td>
                <Trend
                  value={
                    streamingPrice.day
                      ? streamingPrice.day[`${coin.symbol}usdt`.toUpperCase()]
                          ?.percent || 0
                      : 0
                  }
                />
              </Td>
              <Td>
                <Trend value={coin.price_change_24h} />
              </Td>
              <Td>
                {" "}
                <Price
                  amount={coin.total_volume}
                  currencyCode="USD"
                  className="text-lightstar font-medium text-xs"
                  currencyCodeClassName="hidden"
                />
              </Td>
              <Td>
                {" "}
                <Price
                  amount={coin.market_cap}
                  currencyCode="USD"
                  className="text-lightstar font-medium text-xs"
                  currencyCodeClassName="hidden"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
});
TopLists.displayName = "TopsList";
export default TopLists;
