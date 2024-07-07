import { InputJsonValue } from "../../types";

export type OurTeamUpdateInput = {
  image?: InputJsonValue;
  bio?: string | null;
  name?: string | null;
  position?: string | null;
};
