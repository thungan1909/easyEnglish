import { useUser } from "../../../hooks/user.hook";

const CUserProfile = () => {
  const user = useUser();
  console.log(user, "useruser");

  return (
    <div className="bg-pink-500 text-white px-3 py-2 rounded-full font-bold cursor-pointer hover:bg-pink-600 transition">
      DO
    </div>
  );
};

export default CUserProfile;
