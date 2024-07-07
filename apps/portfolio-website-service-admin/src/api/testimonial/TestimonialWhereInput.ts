import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type TestimonialWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  clientImage?: JsonFilter;
  clientName?: StringNullableFilter;
};
