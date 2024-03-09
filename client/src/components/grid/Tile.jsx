import { Flex, GridItem, Text } from "@chakra-ui/react";
import Tooltip from "@/components/ui/Tooltip";
import RandomRevealText from "@/components/ui/RandomRevealText";
import Price from "../ui/Price";
import Trend from "../ui/Trend";
import Image from "../ui/Image";
import constants from "@/utils/constants";
import { Link } from "react-router-dom";
//hooks
import { useState } from "react";
//others
import { iconsHelper } from "@/config/icons";
import clsx from "clsx";
export default function Tile({
  variant,
  name,
  symbol,
  label,
  src,
  data,
  to = "#",
}) {
  const { tileType } = constants;
  const [hover, setHover] = useState(false);
  const bgColor =
    variant === tileType.trendingCategories ? "bg-black" : " bg-black ";
  const stats =
    variant === tileType.portOption ? (
      <Flex className="py-2 flex-col gap-2">
        <Flex gap="1" className=" flex " textAlign={"left"}>
          <Price
            amount={data.balance || 0}
            currencyCode="USD"
            className="font-light text-dimgray"
            currencyCodeClassName=" hidden"
          />
          <Text className="text-sm text-dimgray "> balance</Text>
        </Flex>
        <Flex gap="3">
          <Price
            amount={data.revenue || 0}
            currencyCode="USD"
            className="font-light text-dimgray"
            currencyCodeClassName="hidden"
          />
          <Trend className="!mr-auto" value={data.pnl_percentage} />
        </Flex>
      </Flex>
    ) : (
      <Image alt="sparkline" className="w-full" src={data.sparkline} />
    );
  const footer =
    variant === tileType.trendingCategories ? (
      <></>
    ) : (
      <div className="border-t border-t-lightstar/[0.2] p-4 rounded-b-lg flex justify-between">
        <div>{data.eco}</div>
        <Flex gap="3">
          {" "}
          {variant == tileType.portOption && iconsHelper.DeleteCircle}{" "}
          {iconsHelper.RightChevronCircle({ colorTheme: "dark" })}
        </Flex>
      </div>
    );
  const subheader =
    variant === tileType.trendingCategories
      ? `${data.market_cap_1h_change}%`
      : symbol;
  return (
    <GridItem className="w-full">
      <Link to={to} state={{ shortName: symbol }}>
        <Flex
          as="article"
          className="relative 
           flex-1 flex-col hover:border rounded-lg hover:border-1 hover:border-meshgrid group cursor-pointer "
        >
          <Tooltip label={label}>
            <div
              className={clsx(
                "w-full hover:translate-x-2 hover:-translate-y-2 transition-transform duration-[400ms] ease-out rounded-lg  ",
                bgColor
              )}
              onMouseEnter={() => {
                setHover((prev) => true);
              }}
            >
              <Flex
                className="w-full relative   p-5  flex-col justify-start text-left cursor-pointer"
                gap="10"
              >
                <Flex className="flex-row justify-between">
                  <Image
                    src={src}
                    alt={name}
                    className="w-[72px] h-[72px] rounded-full -mt-10 shadow-moonlight block  bg-orange"
                  />
                </Flex>
                {stats}
                <Flex className="flex-col">
                  <RandomRevealText
                    className="text-dimgray break-all"
                    hover={hover}
                    setHover={setHover}
                    characters={subheader || " "}
                  />
                  <RandomRevealText
                    hover={hover}
                    setHover={setHover}
                    characters={name || " "}
                    className="text-lg break-all"
                  />
                </Flex>
              </Flex>
              {footer}
            </div>
          </Tooltip>
        </Flex>
      </Link>
    </GridItem>
  );
}
