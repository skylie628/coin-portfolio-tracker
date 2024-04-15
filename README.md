# About CoiPort Project v1.1

- CoiPort offers an approach for tracking your portfolio and staying up-to-date with recently trending coins and trending categories. Additionally, real-time information on the top marketcap coins is also available.
- When it comes to handling data flow, I have designed a pooling system, with the help of AWS scheduled cron job and Redis database, that gathers data from multiple resources on their free tier. By this way, we are able to get unlimited lasted crypto data without violating providers's privicy rules.
- The current architecture still has some drawbacks. The system has to rely on Binance Web Socket to get streamlined data on frontend. Gathering information in multiple resources because of unsupported websocket make it violate 'Single source of truth' practice resulting in inconsistency in some cases. In the future, my strategy is decoupling provider - consumer by replacing Redis with Kafka and creating WebSocket server as a Kafka's consumer.

## Web Technologies

- Client: ReactJs, Redux Toolkit, ChakraUI, React Query, HighCharts, Framer Motion, Tailwind CSS.
- Server: Express, Mongoose, AWS scheduled cron job + Redis.
- Deploy: Vercel, AWS S3.

## Key Features

- Sign in, Sign up
- View Trending Coins, Trending Categories, Top Marketcap Coins.
- View detail coin information including price, marketcap in interactive sparkline chart (per day, month, year).
- View portfolio stats.
- Add/remove new asset into/from portfolio.
- Add new transaction into assets.
- Analyze portfolio with interactive pie chart.

## Architecture

![ảnh](https://github.com/skylie628/coin-portfolio-tracker/assets/37264206/882b0794-59e9-4e70-ac1a-796db6eeda57)

## Methodology

- CP: realtime price of a coin.
- H (holding) : total amount of buy transactions - total amount of sell transactions.
- HV (holding value) = H\*CP.
- P (proceeds): total money of sell transactions.
- TC (total cost) = total money of buy transactions.
- P (Profit): (HV + P - TC)/TC\*100%.

## Getting Started

0. Clone the repo.

```sh
   git clone https://github.com/skylie628/coin-portfolio-tracker.git
```

1. Setup and run cron job with code inside aws folder to populate data, you may use AWS lambda and AWS scheduler service.
2. Install NPM packages.

```sh
npm i
```

3. Add variables:

````js
MONGO_CONNECTION_STRING: "YOUR MONGO CONNECTION STRING"
CLIENT_URL: "YOUR CLIENT URL"
SECRET_TOKEN: "YOUR SECRET STRING"
REDIS_URL: "YOUR REDIS URL"
REDIS_PORT: "YOUR REDIS PORT"
REDIS_PASSWORD: "YOUR REDIS PASSWORD"
COINGECKO_API_URL: "API COINGECKO URL"
COINGECKO_API_KEY: "YOUR COINGECKO API KEY"
CRYPTO_COMPARE_API_URL: "CRYPTO COMPARE API URL"
CRYPTO_COMPARE_API_KEY: "YOUR CRYPTO COMPARE API KEY"
 ```
````
