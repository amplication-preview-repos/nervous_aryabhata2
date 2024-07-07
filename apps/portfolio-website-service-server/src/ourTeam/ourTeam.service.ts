import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OurTeamServiceBase } from "./base/ourTeam.service.base";

@Injectable()
export class OurTeamService extends OurTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
