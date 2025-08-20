"use client";

import Available from "./available";
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

      <div className="w-full flex items-center gap-2 justify-between flex-wrap">
        <h1 className="font-medium text-lg">Ahmed Gaeedy</h1>

        <div className="mr-auto flex items-center gap-2">
          <Connect />
          <Available color="green" />
        </div>

        <nav aria-label="Social links">
          <div className="flex gap-1 items-center">
            <Social />
          </div>
        </nav>
      </div>

      <hr className="opacity-45 bg-ring" />

      <p className="text-sm font-medium text-muted-foreground text-balance">
        Front-End Developer / UI Designer
      </p>
    </header>
  );
}

export default Profile;
