"use client";

import { tempData } from "@/constants/tempdata";
import Image from "next/image";
import clock from "@/public/assets/icons/clock.svg";
import eventlevel from "@/public/assets/icons/eventlevel.svg";
import { Button } from "@/components/ui/button";
import { inter } from "@/app/fonts";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const eventData = tempData.find((event) => event.id === params.id);

  if (!eventData) {
    return (
      <div className="flex justify-center items-center">Event not found</div>
    );
  }

  const handleCreate = () => {
    router.push(`/create/${eventData.id}`);
  };

  return (
    <>
      <div className="bg-blue-1">
        <div className="mx-36 py-24">
          <p className="bg-yellow-1 py-2 px-2 pr-16 rounded-md w-fit flex flex-row">
            <Image
              src={clock}
              width={16}
              height={16}
              alt="event details"
              objectFit="contain"
              className="mx-4"
            />
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </p>
          <p className="text-white text-4xl font-bold py-8">
            {eventData.title}
          </p>
          <p className="text-white text-lg pb-8">
            Identify the class to which each butterfly belongs to
          </p>
          <Button
            className={`${inter.className} bg-[#F8F9FD] text-[#003145] pr-6`}
          >
            <Image
              src={eventlevel}
              width={16}
              height={16}
              alt="event details"
              objectFit="contain"
              className="mx-2"
            />
            Easy
          </Button>
        </div>
      </div>
      <div className="px-36 flex justify-between items-center flex-row shadow-lg">
        <p
          className={`${inter.className} text-xl font-bold border-b-4 border-green-1 px-5 py-2 pt-6`}
        >
          Overview
        </p>
        <div className="space-x-5">
          <Button
            className={`bg-green-2 hover:bg-green-800 text-white pr-6 rounded-xl px-8 py-5`}
            onClick={handleCreate}
          >
            Edit
          </Button>
          <Button
            className={`text-red-600 pr-6 rounded-xl px-5 py-5 border-red-600 hover:text-red-800 hover:bg-white`}
            variant="outline"
          >
            Delete
          </Button>
        </div>
      </div>
      <p className="mx-36 text-[#64607D] text-lg my-16 max-w-[70%]">
        Butterflies are the adult flying stage of certain insects belonging to
        an order or group called Lepidoptera. The word "Lepidoptera" means
        "scaly wings" in Greek. This name perfectly suits the insects in this
        group because their wings are covered with thousands of tiny scales
        overlapping in rows.
        <br />
        <br />
        An agency of the Governmental Wildlife Conservation is planning to
        implement an automated system based on computer vision so that it can
        identify butterflies based on captured images. As a consultant for this
        project, you are responsible for developing an efficient model.
        <br />
        <br />
        Your task is to build an Image Classification Model using CNN that
        classifies to which class of weather each image belongs to.
      </p>
    </>
  );
}
