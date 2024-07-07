import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OurTeamService } from "./ourTeam.service";
import { OurTeamControllerBase } from "./base/ourTeam.controller.base";

@swagger.ApiTags("ourTeams")
@common.Controller("ourTeams")
export class OurTeamController extends OurTeamControllerBase {
  constructor(
    protected readonly service: OurTeamService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
