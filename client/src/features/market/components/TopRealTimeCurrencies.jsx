//components
import { Table, Thead, Tbody, Tr, Th, Td, Text, Flex } from "@chakra-ui/react";
import Trend from "@/components/ui/Trend";
import Coin from "@/components/ui/Coin";
import Price from "@/components/ui/Price";
import Sparkline from "@/components/ui/Sparkline";
import { Link } from "react-router-dom";
//useHooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useInView from "@/hooks/useInView";
import React from "react";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { useNavigate } from "react-router-dom";
//action
import { stopStreaming, startStreaming } from "@/store/reducer/reducer.market";
import { useGetTopCurrencies } from "../hooks/useGetTopCurrencies";
import useStickyTableHeader from "../hooks/useStickyTableHeader";
const RealtimePriceCell = ({ symbol, fallbackValue }) => {
  const streamingPrice =
    useSelector((state) => state.market).streamingPrices || {};

  return (
    <Price
      amount={
        streamingPrice.current === "_"
          ? streamingPrice.current[`${symbol}usdt`.toUpperCase()]
          : fallbackValue
      }
      currencyCode="USD"
      className="text-lightstar font-medium"
      currencyCodeClassName="hidden"
    />
  );
};
const RealtimeTrendCell = ({ symbol, ticker, fallbackValue }) => {
  const streamingPrice =
    useSelector((state) => state.market).streamingPrices || {};
  return (
    <Trend
      value={
        streamingPrice[ticker]
          ? streamingPrice[ticker][`${symbol}usdt`.toUpperCase()]?.percent || 0
          : fallbackValue
      }
    />
  );
};
const SmartphoneOrTabletTopRealTimeCurrencies = ({
  topCurrencies,
  isTablet,
}) => {
  return (
    <Flex className="flex-col gap-3 w-full">
      {topCurrencies &&
        topCurrencies.map(
          ({
            id,
            name,
            symbol,
            image,
            sparkline_in_7d,
            price_change_percentage_24h,
            current_price,
          }) => (
            <Link
              className=" flex justify-center p-5 bg-blackest hover:bg-blacker cursor-pointer"
              key={id}
              to={`/market/currencies/${id}`}
            >
              <Coin
                className="w-[100px]"
                name={name}
                shortName={symbol.toUpperCase()}
                src={image}
              />
              <Flex className="flex-1 justify-center">
                {isTablet && <Sparkline data={sparkline_in_7d.price} />}
              </Flex>
              <Flex className="flex-col gap-3 flex-end w-[150px] ">
                <RealtimePriceCell
                  symbol={symbol}
                  fallbackValue={current_price}
                />
                <RealtimeTrendCell
                  symbol={symbol}
                  ticker={"hour"}
                  fallbackValue={price_change_percentage_24h}
                />
              </Flex>
            </Link>
          )
        )}
    </Flex>
  );
};
const DesktopTopRealTimeCurrencies = ({ topCurrencies }) => {
  const TheadComponent = React.forwardRef((props, ref) => (
    <Thead width="1121px" className={props.className} ref={ref}>
      {props.children}
    </Thead>
  ));
  TheadComponent.displayName = "TheadComponent";
  const MemoizedThead = React.memo(TheadComponent);
  const navigate = useNavigate();
  // Usage
  const { fixedTheadRef, relativeTheadRef } = useStickyTableHeader();
  const fixedThead = (
    <MemoizedThead
      className="z-30 bg-blackest fixed top-[89px] invisible  w-[1121px]"
      ref={fixedTheadRef}
    >
      <Tr>
        <Th style={{ width: "196.175px" }} className="text-left">
          Name
        </Th>
        <Th style={{ width: "196.175px" }}>Price</Th>
        <Th style={{ width: "140.125px" }}>1h</Th>
        <Th style={{ width: "140.125px" }}>24h</Th>
        <Th style={{ width: "196.175px" }}>Volume</Th>
        <Th style={{ width: "196.175px" }}>Cap</Th>
        <Th style={{ width: "196.175px" }}>Last 7 days</Th>
      </Tr>
    </MemoizedThead>
  );
  const relativeThead = (
    <MemoizedThead
      className="z-30 bg-blackest relative top-0  w-[1121px]"
      ref={relativeTheadRef}
    >
      <Tr>
        <Th colspan="2">Name</Th>
        <Th colspan="2">Price</Th>
        <Th>1h</Th>
        <Th>24h</Th>
        <Th colspan="2">Volumn</Th>
        <Th colspan="2">Cap</Th>
        <Th colspan="2">Lasted 7 days</Th>
      </Tr>
    </MemoizedThead>
  );
  return (
    <Table
      width="1121px"
      variant="simple"
      className="relative bg-blackest z-10  bg-blackest m-auto table-fixed"
    >
      {/*fixedThead*/}
      {relativeThead}
      <Tbody>
        {topCurrencies &&
          topCurrencies.map(
            ({
              id,
              name,
              symbol,
              image,
              total_volume,
              market_cap,
              sparkline_in_7d,
              price_change_percentage_24h,
              current_price,
            }) => (
              <Tr
                key={id}
                onClick={() => navigate(`currencies/${id}`)}
                className="cursor-pointer bg-blackest hover:bg-blacker"
              >
                <Td className="text-left" colspan="2">
                  {
                    <Coin
                      name={name}
                      shortName={symbol.toUpperCase()}
                      src={image}
                    />
                  }
                </Td>
                <Td colspan="2">
                  <RealtimePriceCell
                    symbol={symbol}
                    fallbackValue={current_price}
                  />
                </Td>
                <Td>
                  <RealtimeTrendCell
                    symbol={symbol}
                    ticker={"hour"}
                    fallbackValue={price_change_percentage_24h}
                  />
                </Td>
                <Td>
                  <RealtimeTrendCell
                    symbol={symbol}
                    ticker={"day"}
                    fallbackValue={price_change_percentage_24h}
                  />
                </Td>
                <Td colspan="2">
                  {" "}
                  <Price
                    amount={total_volume}
                    currencyCode="USD"
                    className="text-lightstar font-medium text-xs"
                    currencyCodeClassName="hidden"
                  />
                </Td>
                <Td colspan="2">
                  {" "}
                  <Price
                    amount={market_cap}
                    currencyCode="USD"
                    className="text-lightstar font-medium text-xs"
                    currencyCodeClassName="hidden"
                  />
                </Td>
                <Td colspan="2">
                  {/*<Rank value={market_cap_rank} />*/}

                  <Sparkline data={sparkline_in_7d.price} />
                </Td>
              </Tr>
            )
          )}
      </Tbody>
    </Table>
  );
};
const TopRealTimeCurrencies = React.forwardRef((props, ref) => {
  const inView = useInView(ref);
  const { topCurrencies } = useGetTopCurrencies({ pageIndex: 1 });
  const dispatch = useDispatch();
  const { isSm, isMd } = useMediaQueries();
  useEffect(() => {
    inView && topCurrencies && dispatch(startStreaming({ topCurrencies }));
    !inView && dispatch(stopStreaming());
    // Cleanup function
    return () => dispatch(stopStreaming());
  }, [inView, topCurrencies]);

  return (
    <section className="w-full bg-blackest">
      <Flex
        ref={ref}
        className="border-t border-t-white/[0.2] border-dashed  scroll-mt-[89px] bg-blackest flex-col gap-10 py-10 relative z-20 font-medium rounded-lg container mx-auto overflow-hidden"
      >
        <Text
          as="h2"
          className="text-2xl block font-medium ml-20 w-full text-left"
        >
          Top trending realtime
        </Text>
        {isMd ? (
          <DesktopTopRealTimeCurrencies topCurrencies={topCurrencies} />
        ) : (
          <SmartphoneOrTabletTopRealTimeCurrencies
            topCurrencies={topCurrencies}
            isTablet={isSm}
          />
        )}
      </Flex>
    </section>
  );
});
TopRealTimeCurrencies.displayName = "TopRealTimeCurrencies";
export default TopRealTimeCurrencies;
