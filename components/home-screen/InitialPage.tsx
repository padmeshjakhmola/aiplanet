"use client"

import Image from "next/image";
import rocket from "@/public/assets/icons/rocket.svg";
import textborder from "@/public/assets/icons/textline.svg";
import detailtextline from "@/public/assets/icons/detailtextline.svg";
import ai from "@/public/assets/icons/ai.svg";
import Group_1000002516 from "@/public/assets/icons/Group_1000002516.svg";
import Group_1000002518 from "@/public/assets/icons/Group_1000002518.svg";
import { WebsiteProductDetailsProps } from "@/types";
import { inter, poppins } from "@/app/fonts";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const WebsiteProductDetails = ({
  image,
  heading,
  subheading,
  border,
}: WebsiteProductDetailsProps) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center w-96">
        <Image
          src={image}
          alt="rocket"
          width={60}
          height={60}
          className="mx-8"
        />
        <div className={inter.className}>
          <p className="text-2xl font-bold">{heading}</p>
          <p className="text-lg font-bold">{subheading}</p>
        </div>
      </div>
      <div className="pl-10">
        {border && (
          <Image
            src={detailtextline}
            alt="text"
            width={1}
            height={1}
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
    </>
  );
};

const InitialPage = () => {
  const router = useRouter();

  return (
    <main className="bg-blue-1">
      <div className="mx-36 py-36 flex space-x-96 px-8">
        <div className="flex flex-row w-[45%]">
          <div className="pr-14">
            <Image
              src={textborder}
              alt="text"
              width={26}
              height={26}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="">
            <h1 className="text-5xl text-white font-bold">
              Accelerate Innovation
            </h1>
            <h1 className="text-5xl text-white font-bold">
              with Global AI Challenges
            </h1>
            <p className="text-xl my-10 text-white justify-start font-medium pr-4">
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
            <Button
              size="lg"
              className={`${poppins.className} rounded-xl bg-white hover:bg-slate-200 text-blue-1 capitalize text-lg font-bold py-6 px-5`}
              onClick={() => router.push("/create/0")}
            >
              Create Challenge
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={rocket} alt="rocket" width={300} height={300} />
        </div>
      </div>
      {/* dark blue area */}
      <div className="bg-blue-2 py-20">
        <div className="flex flex-row justify-between items-center text-white gap-4 mx-36">
          <WebsiteProductDetails
            image={ai}
            heading="100K+"
            subheading="AI model submissions"
            border
          />
          <WebsiteProductDetails
            image={Group_1000002516}
            heading="100K+"
            subheading="Data Scientists"
            border
          />
          <WebsiteProductDetails
            image={Group_1000002518}
            heading="100K+"
            subheading="AI Challenges hosted"
          />
        </div>
      </div>
    </main>
  );
};

export default InitialPage;
