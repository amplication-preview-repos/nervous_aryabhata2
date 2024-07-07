import { ProjectMediaWhereInput } from "./ProjectMediaWhereInput";
import { ProjectMediaOrderByInput } from "./ProjectMediaOrderByInput";

export type ProjectMediaFindManyArgs = {
  where?: ProjectMediaWhereInput;
  orderBy?: Array<ProjectMediaOrderByInput>;
  skip?: number;
  take?: number;
};
