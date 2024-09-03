import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Search from "../../public/assets/icons/search.svg";
import filter from "../../public/assets/icons/filter.svg";
import Image from "next/image";

const ExploreChallenges = () => {
  return (
    <div className="bg-blue-2">
      <div className="mx-36">
        <div className="flex flex-col justify-center items-center">
          <p className="my-20 text-3xl text-white">Explore Challenges</p>
          <div className="flex w-full max-w-4xl max-h-40 items-center space-x-6 relative mb-20">
            <Input
              type="text"
              placeholder="Search"
              className="w-full rounded-xl bg-white py-3 pl-20 h-full text-lg"
            />
            <div className="absolute left-4">
              <Image src={Search} width={20} height={20} alt="search icon" />
            </div>
            <div className="flex justify-center items-center">
              <Button
                type="button"
                className="bg-white text-black py-7 rounded-xl text-lg px-7 hover:bg-slate-300"
              >
                Filter
                <Image
                  src={filter}
                  width={20}
                  height={20}
                  objectFit="contain"
                  alt="filter icon"
                  className="ml-3"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreChallenges;
