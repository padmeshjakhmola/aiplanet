"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import participate from "@/public/assets/icons/participate.svg";
import Image from "next/image";
import { CustomCardProps } from "@/types";
import { useRouter } from "next/navigation";

const CustomCard = ({
  id,
  image,
  status,
  title,
  startEnd,
  days,
  hours,
  mins,
}: CustomCardProps) => {
  const router = useRouter();
  const getStatusClassName = () => {
    switch (status) {
      case "Upcoming":
        return "bg-yellow-100 text-gray-600";
      case "Active":
        return "bg-green-100 text-green-2";
      case "Past":
        return "bg-red-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const handleParticipateClick = () => {
    router.push(`/participate/${id}`);
  };
  return (
    <div>
      <Card>
        <div className="relative w-full h-48">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt="card_image"
            className="rounded-t-xl"
          />
        </div>
        <CardHeader className="">
          <div className="text-xs flex items-center justify-center my-3">
            <p className={`${getStatusClassName()} p-1 px-3 rounded-md`}>
              {status}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CardTitle className="max-w-52 text-base flex justify-center items-center text-center">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex items-center justify-center flex-col">
          <p className="mb-2 text-gray-700">{startEnd} in</p>
          <div className="flex flex-row text-gray-700">
            <div className="flex justify-center items-center flex-col">
              <p className="text-xl font-bold">{days}</p>
              <p className="text-[10px]">Days</p>
            </div>
            <p className="mx-3 font-bold">:</p>
            <div className="flex justify-center items-center flex-col">
              <p className="text-xl font-bold">{hours}</p>
              <p className="text-[10px]">Hours</p>
            </div>
            <p className="mx-3 font-bold">:</p>
            <div className="flex justify-center items-center flex-col">
              <p className="text-xl font-bold">{mins}</p>
              <p className="text-[10px]">Mins</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button
            className="bg-green-2 hover:bg-green-900 rounded-lg pr-6 py-5"
            onClick={handleParticipateClick}
          >
            <Image
              src={participate}
              width={15}
              height={15}
              alt="participate"
              objectFit="contain"
              className="mr-3"
            />
            Participate Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomCard;
