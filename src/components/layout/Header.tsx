import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <div className="navbar flex-col items-end justify-start bg-green-600">
        <div className="">
          {sessionData?.user && <Image src={sessionData?.user.image as string} alt="Avatar" width="60" height="60" className="rounded-full p-2" />}
          <h2 className="">Welcome, {sessionData?.user?.name}</h2>

        </div>
        <div className="">
          {sessionData?.user ? (
            <button className="btn h-1 p-0" onClick={() => void signOut()}>
              Sign Out
            </button>
          ) : (
            <button className="btn" onClick={() => void signIn()}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
