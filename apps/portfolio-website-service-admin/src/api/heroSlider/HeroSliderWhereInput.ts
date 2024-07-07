import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type HeroSliderWhereInput = {
  id?: StringFilter;
  heading?: StringNullableFilter;
  buttonText?: StringNullableFilter;
  buttonLink?: StringNullableFilter;
  image?: JsonFilter;
  subHeading?: StringNullableFilter;
};
