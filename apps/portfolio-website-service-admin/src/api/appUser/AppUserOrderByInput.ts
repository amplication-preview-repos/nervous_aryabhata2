import { SortOrder } from "../../util/SortOrder";

export type AppUserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
};
