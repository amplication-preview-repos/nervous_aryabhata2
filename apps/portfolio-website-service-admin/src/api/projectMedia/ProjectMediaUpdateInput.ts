import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectMediaUpdateInput = {
  description?: string | null;
  mediaType?: "Option1" | null;
  mediaUrl?: InputJsonValue;
  project?: ProjectWhereUniqueInput | null;
};
