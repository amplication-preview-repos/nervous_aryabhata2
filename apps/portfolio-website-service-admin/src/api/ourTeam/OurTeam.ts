import { JsonValue } from "type-fest";

export type OurTeam = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  image: JsonValue;
  bio: string | null;
  name: string | null;
  position: string | null;
};
