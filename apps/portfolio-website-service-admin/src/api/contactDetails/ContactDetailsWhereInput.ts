import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContactDetailsWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  phone?: StringNullableFilter;
  email?: StringNullableFilter;
};
