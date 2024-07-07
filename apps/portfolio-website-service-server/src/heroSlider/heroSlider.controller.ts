import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HeroSliderService } from "./heroSlider.service";
import { HeroSliderControllerBase } from "./base/heroSlider.controller.base";

@swagger.ApiTags("heroSliders")
@common.Controller("heroSliders")
export class HeroSliderController extends HeroSliderControllerBase {
  constructor(
    protected readonly service: HeroSliderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
