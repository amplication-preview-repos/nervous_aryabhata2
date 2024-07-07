import { SortOrder } from "../../util/SortOrder";

export type OurTeamOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  image?: SortOrder;
  bio?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
};
