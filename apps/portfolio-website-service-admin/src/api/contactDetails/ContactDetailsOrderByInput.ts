import { SortOrder } from "../../util/SortOrder";

export type ContactDetailsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  phone?: SortOrder;
  email?: SortOrder;
};
