import { SortOrder } from "../../util/SortOrder";

export type TestimonialOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  clientImage?: SortOrder;
  clientName?: SortOrder;
};
