import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProjectMediaResolverBase } from "./base/projectMedia.resolver.base";
import { ProjectMedia } from "./base/ProjectMedia";
import { ProjectMediaService } from "./projectMedia.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProjectMedia)
export class ProjectMediaResolver extends ProjectMediaResolverBase {
  constructor(
    protected readonly service: ProjectMediaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
