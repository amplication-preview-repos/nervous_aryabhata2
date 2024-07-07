import { OurTeamWhereInput } from "./OurTeamWhereInput";
import { OurTeamOrderByInput } from "./OurTeamOrderByInput";

export type OurTeamFindManyArgs = {
  where?: OurTeamWhereInput;
  orderBy?: Array<OurTeamOrderByInput>;
  skip?: number;
  take?: number;
};
