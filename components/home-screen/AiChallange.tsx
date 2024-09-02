import Image from "next/image";
import carbon_notebook_reference from "../../public/assets/icons/carbon_notebook_reference.svg";
import Vector from "../../public/assets/icons/Vector.svg";
import Robot from "../../public/assets/icons/Robot.svg";
import IdentificationCard from "../../public/assets/icons/IdentificationCard.svg";
import { AiChallangeCardProps } from "@/types";

const AiChallangeCard = ({
  image,
  heading,
  description,
}: AiChallangeCardProps) => {
  return (
    <>
      <div className="bg-gray-1 rounded-3xl">
        <div className="px-8 py-16">
          <Image
            src={image}
            alt="notebook"
            width={43}
            height={43}
            objectFit="contain"
          />
          <p className="text-2xl font-bold py-4">{heading}</p>
          <p className="text-lg text-gray-text">{description}</p>
        </div>
      </div>
    </>
  );
};

const AiChallange = () => {
  return (
    <div className="mx-80">
      <div className="flex justify-center items-center py-20">
        <p className="text-4xl font-bold flex flex-row items-center">
          Why Participate in{" "}
          <span className="text-green-1 ml-2">AI Challenges?</span>
        </p>
      </div>
      <div className="pb-10 grid grid-rows-2 grid-flow-col gap-10">
        <AiChallangeCard
          image={carbon_notebook_reference}
          heading="Prove your skills"
          description="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
        />
        <AiChallangeCard
          image={Robot}
          heading="Challenge yourself"
          description="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
        />
        <AiChallangeCard
          image={Vector}
          heading="Learn from community"
          description="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
        />
        <AiChallangeCard
          image={IdentificationCard}
          heading="Earn recognition"
          description="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
        />
      </div>
    </div>
  );
};

export default AiChallange;
