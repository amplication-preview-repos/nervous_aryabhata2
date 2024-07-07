import { InputJsonValue } from "../../types";

export type OurTeamCreateInput = {
  image?: InputJsonValue;
  bio?: string | null;
  name?: string | null;
  position?: string | null;
};
