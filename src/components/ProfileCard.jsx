import profilePic from "../assets/profile.png";

function ProfileCard() {
  return (
    <div className="w-full bg-blue-500 rounded-xl text-white p-3">
      <div className="text-center flex flex-col justify-center items-center">
        <img src={profilePic} />
        <span>Robin Singh</span>
        <span className="text-[#ccc]">+91 9876543210</span>
        <div className="flex gap-3 flex-wrap justify-center">
          <p className="bg-white text-black h-6 flex justify-center items-center m-1 px-2 py-1 rounded-2xl">
            UI/UX
          </p>
          <p className="bg-white text-black h-6 flex justify-center items-center m-1 px-2 py-1 rounded-2xl">
            Full-Time
          </p>
          <p className="bg-white text-black h-6 flex justify-center items-center m-1 px-2 py-1 rounded-2xl">
            Perks
          </p>
          <p className="bg-white text-black h-6 flex justify-center items-center m-1 px-2 py-1 rounded-2xl">
            Canteen
          </p>
        </div>
        <a className="text-lg">Update Personal Details&gt; </a>
      </div>
    </div>
  );
}
export default ProfileCard;
