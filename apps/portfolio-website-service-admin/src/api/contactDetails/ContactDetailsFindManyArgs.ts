import { ContactDetailsWhereInput } from "./ContactDetailsWhereInput";
import { ContactDetailsOrderByInput } from "./ContactDetailsOrderByInput";

export type ContactDetailsFindManyArgs = {
  where?: ContactDetailsWhereInput;
  orderBy?: Array<ContactDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
