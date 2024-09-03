import { StaticImageData } from "next/image";

export interface WebsiteProductDetailsProps {
  image: string;
  heading: string;
  subheading: string;
  border?: boolean;
}

export interface AiChallangeCardProps {
  image: string;
  heading: string;
  description: string;
}

export interface CustomCardProps {
  id: string;
  image: StaticImageData;
  status: string;
  title: string;
  startEnd: string;
  days: string;
  hours: string;
  mins: string;
}
