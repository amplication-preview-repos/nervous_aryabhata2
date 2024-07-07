import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppUserWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  role?: "Option1";
};
