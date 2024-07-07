import { InputJsonValue } from "../../types";
import { ProjectMediaUpdateManyWithoutProjectsInput } from "./ProjectMediaUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  title?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  url?: string | null;
  projectMedias?: ProjectMediaUpdateManyWithoutProjectsInput;
};
