import React from "react";
import { iconsHelper } from "@/config/icons";
const Footer = () => {
  const { Github, Facebook, Linkedin } = iconsHelper;
  return (
    <footer className="w-full min-h-[10rem] grid place-items-center  text-orange    bg-blackest ">
      <div className="h-full w-full md:w-11/12 max-w-[1920px] min-w-[300px] grid place-items-center">
        <div className="flex flex-col justify-center items-center gap-6 min-h-[15rem] md:h-3/4 w-5/6">
          <div className="flex flex-col md:flex-row w-1/2 gap-2">
            <a
              className="text-center grow text-base hover:underline cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/skylie628/coin-portfolio-tracker"
            >
              About this project
            </a>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a
                className="grid place-items-center "
                target="_blank"
                rel="noreferrer"
                href="https://github.com/skylie628/coin-portfolio-tracker"
              >
                <Github />
              </a>
              <a
                className="grid place-items-center"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/divikun/"
              >
                <Facebook />
              </a>
              <a
                className="grid place-items-center"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/dinhvinhkhuong/"
              >
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="w-5/6">
            <p className="text-center text-sm">
              Copyright © 1/2024 D.V.Khuong{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
