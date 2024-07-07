import { SortOrder } from "../../util/SortOrder";

export type ProjectMediaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  mediaType?: SortOrder;
  mediaUrl?: SortOrder;
  projectId?: SortOrder;
};
