import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type ProjectMedia = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  mediaType?: "Option1" | null;
  mediaUrl: JsonValue;
  project?: Project | null;
};
