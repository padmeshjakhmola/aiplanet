import Image from "next/image";
import React from "react";

import logo from "../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="w-full py-4 px-24">
        <Link href="/">
          <Image src={logo} alt="company logo" width={100} height={100} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
