"use client";
import { CircleSmall, Equal, EqualApproximately } from "lucide-react";
import Connect from "./connect";
import ProfileImage from "./profileImage";
import Social from "./social";

function Profile() {
  return (
    <header
      id="site-header"
      className="flex mt-0 flex-col justify-between gap-4"
    >
      <ProfileImage />

      <div className="w-full flex items-center flex-wrap gap-2 justify-between ">
        <h1 className="font-medium shrink-0 text-lg ">Ahmed Gaeedy</h1>
        <CircleSmall
          size={18}
          className=" mr-auto text-chart-1 cursor-pointer hover:scale-110 active:scale-100"
        />
        {/* <button
          type="button"
          aria-label="Toggle site font"
          className="mr-auto text-ring cursor-pointer hover:scale-110 active:scale-100 transition-transform"
        >
          <Equal size={18} />
          <EqualApproximately size={18} />
        </button> */}
        <Connect />
      </div>

      {/* <hr className="opacity-45 bg-ring" /> */}

      <div className="flex justify-between items-center flex-wrap gap-2 text-sm">
        {/* <p className="text-muted-foreground text-balance font-medium">
          Front-End Developer
        </p> */}
        <Social />
      </div>
    </header>
  );
}

export default Profile;
