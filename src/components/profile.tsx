"use client";

import Connect from "./connect";
import ProfileImage from "./profileImage";
import Social from "./social";

function Profile() {
  return (
    <header
      id="site-header"
      className="flex flex-col justify-between gap-2 pt-14"
    >
      <ProfileImage />

      <div className="w-full flex  items-center flex-wrap gap-2 justify-between ">
        <h1 className="font-medium shrink-0 text-lg ">Ahmed Gaeedy</h1>
        <Connect />
      </div>

      <hr className="opacity-45 bg-ring" />

      <div className="flex justify-between items-center flex-wrap gap-2 text-sm">
        <p className="text-muted-foreground text-balance font-medium">
          Front-End Developer
        </p>
        <Social />
      </div>
    </header>
  );
}

export default Profile;
