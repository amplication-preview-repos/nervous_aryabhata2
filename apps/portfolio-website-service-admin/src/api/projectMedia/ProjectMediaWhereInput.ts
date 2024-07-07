import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectMediaWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  mediaType?: "Option1";
  mediaUrl?: JsonFilter;
  project?: ProjectWhereUniqueInput;
};
