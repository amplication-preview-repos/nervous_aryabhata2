import { SortOrder } from "../../util/SortOrder";

export type HeroSliderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  heading?: SortOrder;
  buttonText?: SortOrder;
  buttonLink?: SortOrder;
  image?: SortOrder;
  subHeading?: SortOrder;
};
