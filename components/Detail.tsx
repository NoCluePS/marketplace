import React, { MouseEventHandler, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

import hive from "@hiveio/hive-js";
import { attributeColors } from "../constants";
import axios from "axios";
import { apiLinkState } from "../atoms";
import { useRecoilValue } from "recoil";

type AuctionDetailProps = {
  onExit: MouseEventHandler;
  nft: any;
};

export const AuctionDetail = ({ onExit, nft }: AuctionDetailProps) => {
  const [details, setDetails] = useState<any>(null);
  const [attributes, setAttributes] = useState<any>({});
  const apiLink: string = useRecoilValue(apiLinkState);

  const fetchDetails = () => {
    axios.get(`${apiLink}api/nft/${nft.uid}`).then(({ data }) => {
      const author = data.set.author;
      const link = data.set.link;

      hive.api.getContent(author, link, (err: any, result: any) => {
        if (err) throw new Error(err);
        setDetails(result);
      });
    });
  };

  const fetchImage = () => {
    fetch(`https://ipfs.io/ipfs/${nft.script}?${nft.uid}`)
      .then((response) => response.text())
      .then((data) => {
        const code = `(//${data}\n)("${nft.uid}")`;
        const SVG = eval(code);
        let attributeObj = {};
        SVG.attributes.forEach((attr: any) => {
          attributeObj = { ...attributeObj, ...attr };
        });
        setAttributes(attributeObj);
        document.getElementById(`${nft.set}-${nft.uid}-details`)!.innerHTML =
          SVG.HTML;
      });
  };

  useEffect(() => {
    hive.api.setOptions({ url: "https://api.deathwing.me/" });
    hive.config.set("address_prefix", "STM");
    hive.config.set(
      "chain_id",
      "beeab0de00000000000000000000000000000000000000000000000000000000"
    );
    hive.config.set("alternative_api_endpoints", [
      "https://rpc.ecency.com/",
      "https://hived.emre.sh/",
      "https://rpc.ausbit.dev/",
      "https://api.hive.blog/",
    ]);

    if (nft.set !== undefined && nft.uid !== undefined) {
      fetchDetails();
      fetchImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nft]);
  return (
    <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-gray-700 bg-opacity-50 z-0">
      <div className="w-full flex flex-col justify-center items-center h-full">
        <div className="bg-gray-600 relative p-1 sm:p-10 rounded-xl text-center border-4 border-gray-700">
          <button className="m-2 absolute top-0 right-0 z-50">
            <ImCross size={15} color="white" onClick={onExit} />
          </button>
          <div
            id={`${nft.set}-${nft.uid}-details`}
            className="w-1/2 mx-auto mb-10"
          ></div>
          <div className="text-white text-md sm:text-xl">
            <h1 className="text-white text-xl font-bold mt-5">
              {nft.set} : {nft.uid}
            </h1>
            <h2 className="text-white text-sm sm:text-md font-semibold">
              {details?.title}
            </h2>
            {Object.keys(attributes).map((attr: any) => (
              <div className="mx-20 flex my-2 items-center gap-5">
                <h1
                  className={"text-white text-left px-2 py-1 w-auto rounded-xl"}
                  style={{ backgroundColor: attributeColors[attr] }}
                >
                  {attr}
                </h1>
                <h1 className="text-white text-center">{attributes[attr]}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};