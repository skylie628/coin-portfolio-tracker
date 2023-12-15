import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import Rank from "../../components/ui/Rank";
import Trend from "../../components/ui/Trend";
import Coin from "../../components/ui/Coin";
import Price from "../../components/ui/Price";
import { useRef, useLayoutEffect } from "react";
import React from "react";
const TopLists = React.forwardRef((props, ref) => {
  const fixedTheadRef = useRef();
  const relativeTheadRef = useRef();
  const coinsList = new Array(20).fill(0).map((x, index) => ({
    rank: index + 1,
    name: "Bitcoin",
    hour: Math.pow(-1, index + 1) * 1.2,
    day: Math.pow(-1, index + 2) * 2.4,
    month: Math.pow(-1, index + 3) * 3.5,
    vol: 14323,
    price: 15.1,
    cap: 12421,
    shortName: "BTC",
    src: "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400",
  }));
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
            <Tr key={coin.rank}>
              <Td>
                <Rank value={coin.rank} />
              </Td>
              <Td className="text-left">
                {
                  <Coin
                    name={coin.name}
                    shortName={coin.shortName}
                    src={coin.src}
                  />
                }
              </Td>
              <Td>
                <Price
                  amount={coin.price}
                  currencyCode="USD"
                  className="text-lightstar font-medium"
                  currencyCodeClassName="hidden"
                />
              </Td>
              <Td>
                <Trend value={coin.hour} />
              </Td>
              <Td>
                <Trend value={coin.day} />
              </Td>
              <Td>
                <Trend value={coin.month} />
              </Td>
              <Td>
                {" "}
                <Price
                  amount={coin.vol}
                  currencyCode="USD"
                  className="text-lightstar font-medium"
                  currencyCodeClassName="hidden"
                />
              </Td>
              <Td>
                {" "}
                <Price
                  amount={coin.cap}
                  currencyCode="USD"
                  className="text-lightstar font-medium"
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
