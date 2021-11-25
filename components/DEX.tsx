import React, { useState, useEffect } from "react";

export const DEX = () => {
  const [bidPrice, setBidPrice] = useState({ dollars: 0, dlux: 0 });
  const [askPrice, setAskPrice] = useState({ dollars: 0, dlux: 0 });
  const [lastPrice, setLastPrice] = useState({ dollars: 0, dlux: 0 });
  const [vwmaPrice, setVwmaPrice] = useState({ dollars: 0, dlux: 0 });
  const [volumenPrice, setVolumenPrice] = useState({ dollars: 0, dlux: 0 });

  return (
    <div className="flex w-full justify-center">
      <div className="flex justify-center items-center gap-9">
        <div className="flex flex-col bg-gray-600 border-2 rounded-xl border-gray-800 p-5">
          <div className="flex gap-3 text-white text-xl">
            <div className="mx-3 flex flex-col justify-center items-center gap-3">
              <h1 className="px-5 py-2 bg-gray-500 rounded-xl">Bid</h1>
              <div className="flex flex-col justify-center items-center text-md">
                <h1>{bidPrice.dlux}</h1>
                <h1>${bidPrice.dollars}</h1>
              </div>
            </div>
            <div className="mx-3 flex flex-col justify-center items-center gap-3">
              <h1 className="px-5 py-2 bg-gray-500 rounded-xl">Ask</h1>
              <div className="flex flex-col justify-center items-center text-md">
                <h1>{askPrice.dlux}</h1>
                <h1>${askPrice.dollars}</h1>
              </div>
            </div>
            <div className="mx-3 flex flex-col justify-center items-center gap-3">
              <h1 className="px-5 py-2 bg-gray-500 rounded-xl">Last</h1>
              <div className="flex flex-col justify-center items-center text-md">
                <h1>{lastPrice.dlux}</h1>
                <h1>${lastPrice.dollars}</h1>
              </div>
            </div>
            <div className="mx-3 flex flex-col justify-center items-center gap-3">
              <h1 className="px-5 py-2 bg-gray-500 rounded-xl">VWMA</h1>
              <div className="flex flex-col justify-center items-center text-md">
                <h1>{vwmaPrice.dlux}</h1>
                <h1>${vwmaPrice.dollars}</h1>
              </div>
            </div>
            <div className="mx-3 flex flex-col justify-center items-center gap-3">
              <h1 className="px-5 py-2 bg-gray-500 rounded-xl">24h Volume</h1>
              <div className="flex flex-col justify-center items-center text-md">
                <h1>{volumenPrice.dlux}</h1>
                <h1>${volumenPrice.dollars}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
