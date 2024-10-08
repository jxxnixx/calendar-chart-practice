import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className='absolute bg-white h-[100px] w-screen text-black flex flex-row gap-40 justify-center items-center'>
      <Link href={"/calendar"}>Calendar</Link>
      <Link href={"/chart"}>Chart</Link>
    </div>
  );
};

export default Nav;
