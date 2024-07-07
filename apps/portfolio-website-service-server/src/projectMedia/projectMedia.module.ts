import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProjectMediaModuleBase } from "./base/projectMedia.module.base";
import { ProjectMediaService } from "./projectMedia.service";
import { ProjectMediaController } from "./projectMedia.controller";
import { ProjectMediaResolver } from "./projectMedia.resolver";

@Module({
  imports: [ProjectMediaModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProjectMediaController],
  providers: [ProjectMediaService, ProjectMediaResolver],
  exports: [ProjectMediaService],
})
export class ProjectMediaModule {}
