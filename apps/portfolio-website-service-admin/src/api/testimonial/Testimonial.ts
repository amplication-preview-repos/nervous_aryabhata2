import { JsonValue } from "type-fest";

export type Testimonial = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  clientImage: JsonValue;
  clientName: string | null;
};
