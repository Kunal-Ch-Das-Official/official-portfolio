import React from "react";
interface ProfileBoxProps {
  currentUsername: string | null;
  registerEmail: string | null;
}
const ProfileBox: React.FC<ProfileBoxProps> = ({
  currentUsername,
  registerEmail,
}) => {
  return (
    <section className="w-[210px] h-[3.7rem] shadow-md py-2 text-center overflow-hidden">
      <h1 className="text-gray-700 font-medium">{currentUsername}</h1>
      <p className="text-xs">{registerEmail}</p>
    </section>
  );
};

export default ProfileBox;
