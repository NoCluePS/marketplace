import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import hive from "@hiveio/hive-js";

const AppDetails = () => {
  const [showApp, setShowApp] = useState(true);
  const [username, setUsername] = useState("");
  const [contentResult, setContentResult] = useState<any>(null);
  const router = useRouter();
  const { permlink, author } = router.query;

  const handleRunApp = () => {
    document.title = `DLUX | ${contentResult.title}`;
    var metadata = contentResult.json_metadata;
    var hashy = JSON.parse(metadata).vrHash;
    var scrolling = JSON.parse(metadata).scrolling;
    var vars = location.href.split("?")[1];
    var iframe = document.createElement("iframe");
    iframe.id = "theIframe";
    iframe.setAttribute("scrolling", scrolling || "yes");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute(
      "allow",
      "gyroscope; accelerometer; microphone; camera"
    );
    iframe.src = `https://anywhere.ipfs.dlux.io/ipfs/${hashy}?${vars}`;
    if (document.getElementById("iframe-app")) {
      document.getElementById("iframe-app")!.appendChild(iframe);
    }
  };

  useEffect(() => {
    if ((author! as string).substr(0, 1) === "@") {
      setUsername((author! as string).substr(1, author!.length));
    }
  }, []);

  useEffect(() => {
    if (contentResult) {
      handleRunApp();
    }
  }, [contentResult]);

  useEffect(() => {
    if (username !== "") {
      hive.api.getContent(username, permlink, (err: any, result: any) => {
        if (err) console.log(err);
        console.log(result);
        setContentResult(result);
      });
    }
  }, [username]);

  return showApp ? (
    <div className="w-full h-screen fixed top-0 left-0 bg-black text-white text-2xl font-bold bg-opacity-70">
      <div className="flex px-10 justify-between w-full bg-blue-500">
        <span
          className="hover:text-gray-500 cursor-pointer"
          onClick={() => setShowApp(false)}
        >
          DLUX
        </span>
        <span>{contentResult?.title}</span>
      </div>
      <div className="w-full h-full" id="iframe-app"></div>
    </div>
  ) : (
    <div>
      <h1>Comments / votes</h1>
    </div>
  );
};

export default AppDetails;
