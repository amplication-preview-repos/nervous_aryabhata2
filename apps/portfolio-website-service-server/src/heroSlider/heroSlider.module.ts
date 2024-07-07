import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HeroSliderModuleBase } from "./base/heroSlider.module.base";
import { HeroSliderService } from "./heroSlider.service";
import { HeroSliderController } from "./heroSlider.controller";
import { HeroSliderResolver } from "./heroSlider.resolver";

@Module({
  imports: [HeroSliderModuleBase, forwardRef(() => AuthModule)],
  controllers: [HeroSliderController],
  providers: [HeroSliderService, HeroSliderResolver],
  exports: [HeroSliderService],
})
export class HeroSliderModule {}
