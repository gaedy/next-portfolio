import Connect from "./connect";
import ProfileImage from "./profileImage";
import Social from "./social";
import Joystick from "./joystick";

function Profile() {
  return (
    <header
      id="site-header"
      className="flex mt-0 flex-col justify-between gap-4"
    >
      <ProfileImage />

      <div className="w-full flex items-center flex-wrap gap-2 justify-between ">
        <h1 className="font-medium shrink-0 text-lg ">Ahmed Gaeedy</h1>
        <Joystick />
        <Connect />
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2 text-sm">
        <Social />
      </div>
    </header>
  );
}

export default Profile;
