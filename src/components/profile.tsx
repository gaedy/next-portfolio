"use client";

import { useEffect, useState } from "react";
import Available from "./available";
import Connect from "./connect";
import ProfileImage from "./profileImage";
import Social from "./social";

function Profile() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between gap-2 pt-14">
        <ProfileImage />

        <div className="w-full flex items-center gap-2 justify-between  flex-wrap">
          <div className="font-medium text-lg flex">Ahmed Gaeedy</div>

          <div className="mr-auto flex items-center gap-2">
            <Connect />
            <Available color="green" />
          </div>

          <div className="flex gap-1 justify-between items-center ">
            <Social />
          </div>
        </div>

        <hr className="opacity-45 bg-ring"></hr>

        <div className="text-base text-[14px] text-neutral-400 text-balance">
          Front-End Developer / UI Designer
        </div>
      </div>
    </>
  );
}

export default Profile;
