import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContactDetailsModuleBase } from "./base/contactDetails.module.base";
import { ContactDetailsService } from "./contactDetails.service";
import { ContactDetailsController } from "./contactDetails.controller";
import { ContactDetailsResolver } from "./contactDetails.resolver";

@Module({
  imports: [ContactDetailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContactDetailsController],
  providers: [ContactDetailsService, ContactDetailsResolver],
  exports: [ContactDetailsService],
})
export class ContactDetailsModule {}
