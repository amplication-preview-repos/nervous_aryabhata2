import { InputJsonValue } from "../../types";

export type HeroSliderCreateInput = {
  heading?: string | null;
  buttonText?: string | null;
  buttonLink?: string | null;
  image?: InputJsonValue;
  subHeading?: string | null;
};
