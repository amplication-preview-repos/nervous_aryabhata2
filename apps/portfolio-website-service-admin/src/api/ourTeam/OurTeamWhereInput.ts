import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OurTeamWhereInput = {
  id?: StringFilter;
  image?: JsonFilter;
  bio?: StringNullableFilter;
  name?: StringNullableFilter;
  position?: StringNullableFilter;
};
