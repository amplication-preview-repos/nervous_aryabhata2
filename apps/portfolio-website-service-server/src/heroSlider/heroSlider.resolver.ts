import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HeroSliderResolverBase } from "./base/heroSlider.resolver.base";
import { HeroSlider } from "./base/HeroSlider";
import { HeroSliderService } from "./heroSlider.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HeroSlider)
export class HeroSliderResolver extends HeroSliderResolverBase {
  constructor(
    protected readonly service: HeroSliderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
