import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProjectMediaService } from "./projectMedia.service";
import { ProjectMediaControllerBase } from "./base/projectMedia.controller.base";

@swagger.ApiTags("projectMedias")
@common.Controller("projectMedias")
export class ProjectMediaController extends ProjectMediaControllerBase {
  constructor(
    protected readonly service: ProjectMediaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
