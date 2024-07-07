import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectMediaListRelationFilter } from "../projectMedia/ProjectMediaListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  image?: JsonFilter;
  url?: StringNullableFilter;
  projectMedias?: ProjectMediaListRelationFilter;
};
