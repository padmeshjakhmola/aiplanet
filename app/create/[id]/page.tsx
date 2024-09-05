"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import downarrow from "@/public/assets/icons/filter.svg";
import Image from "next/image";
import { tempData } from "@/constants/tempdata";
import { useRouter } from "next/navigation";

export default function Create({ params }: { params: { id: string } }) {
  const router = useRouter();

  const [dropdownTitle, setDropdownTitle] = useState("Open");

  const eventData = tempData.find((event) => event.id === params.id);

  return (
    <div className="pb-20">
      <div className="bg-[#F8F9FD]">
        <p className="text-2xl font-bold px-24 py-14">Challenge Details</p>
      </div>
      <div className="px-24 max-w-[40%] space-y-6 py-8">
        <p>Challenge Name</p>
        <Input placeholder={eventData?.title} className="py-5" />
      </div>
      <div className="px-24 max-w-[40%] space-y-6 pb-8">
        <p>Start Date</p>
        <Input placeholder={eventData?.status} className="py-5" />
      </div>
      <div className="px-24 max-w-[40%] space-y-6 pb-8">
        <p>End Date</p>
        <Input placeholder="21st Jun'22 11:00 PM" className="py-5" />
      </div>
      <div className="px-24 max-w-[60%] space-y-6 pb-8">
        <p>Description</p>
        <Textarea
          placeholder="Identify the class to which each butterfly belongs to"
          rows={10}
        />
      </div>
      <div className="px-24 max-w-[40%] space-y-6 pb-8">
        <p>Level Type</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              {dropdownTitle}
              {dropdownTitle === "Open" && (
                <Image src={downarrow} width={12} height={12} alt="more" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setDropdownTitle("Easy")}>
              Easy
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDropdownTitle("Medium")}>
              Medium
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDropdownTitle("Hard")}>
              Hard
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="px-24">
        <Button
          className="bg-green-2 hover:bg-green-900"
          size="lg"
          onClick={() => router.push("/")}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
