
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div>
    
    <div className="bg-black w-24 h-12 m-auto mt-80 text-white rounded-md ">
    <div className="p-3 font-bold ">
      <SignInButton />
      </div>
      </div>
   </div>
  );
}