import { JsonValue } from "type-fest";
import { ProjectMedia } from "../projectMedia/ProjectMedia";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  image: JsonValue;
  url: string | null;
  projectMedias?: Array<ProjectMedia>;
};
