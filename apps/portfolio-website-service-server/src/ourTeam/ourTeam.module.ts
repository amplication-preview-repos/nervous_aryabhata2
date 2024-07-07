import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OurTeamModuleBase } from "./base/ourTeam.module.base";
import { OurTeamService } from "./ourTeam.service";
import { OurTeamController } from "./ourTeam.controller";
import { OurTeamResolver } from "./ourTeam.resolver";

@Module({
  imports: [OurTeamModuleBase, forwardRef(() => AuthModule)],
  controllers: [OurTeamController],
  providers: [OurTeamService, OurTeamResolver],
  exports: [OurTeamService],
})
export class OurTeamModule {}
