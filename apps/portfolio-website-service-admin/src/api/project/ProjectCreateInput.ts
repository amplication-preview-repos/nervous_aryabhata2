import { InputJsonValue } from "../../types";
import { ProjectMediaCreateNestedManyWithoutProjectsInput } from "./ProjectMediaCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  title?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  url?: string | null;
  projectMedias?: ProjectMediaCreateNestedManyWithoutProjectsInput;
};
