import { JsonValue } from "type-fest";

export type HeroSlider = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  heading: string | null;
  buttonText: string | null;
  buttonLink: string | null;
  image: JsonValue;
  subHeading: string | null;
};
