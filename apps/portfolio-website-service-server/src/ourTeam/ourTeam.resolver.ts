import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OurTeamResolverBase } from "./base/ourTeam.resolver.base";
import { OurTeam } from "./base/OurTeam";
import { OurTeamService } from "./ourTeam.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OurTeam)
export class OurTeamResolver extends OurTeamResolverBase {
  constructor(
    protected readonly service: OurTeamService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
