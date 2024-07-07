import { ProjectMedia as TProjectMedia } from "../api/projectMedia/ProjectMedia";

export const PROJECTMEDIA_TITLE_FIELD = "id";

export const ProjectMediaTitle = (record: TProjectMedia): string => {
  return record.id?.toString() || String(record.id);
};
