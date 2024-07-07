import { ContactDetails as TContactDetails } from "../api/contactDetails/ContactDetails";

export const CONTACTDETAILS_TITLE_FIELD = "address";

export const ContactDetailsTitle = (record: TContactDetails): string => {
  return record.address?.toString() || String(record.id);
};
