import { OurTeam as TOurTeam } from "../api/ourTeam/OurTeam";

export const OURTEAM_TITLE_FIELD = "name";

export const OurTeamTitle = (record: TOurTeam): string => {
  return record.name?.toString() || String(record.id);
};
