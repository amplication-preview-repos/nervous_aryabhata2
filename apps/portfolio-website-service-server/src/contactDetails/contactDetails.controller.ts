import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContactDetailsService } from "./contactDetails.service";
import { ContactDetailsControllerBase } from "./base/contactDetails.controller.base";

@swagger.ApiTags("contactDetails")
@common.Controller("contactDetails")
export class ContactDetailsController extends ContactDetailsControllerBase {
  constructor(
    protected readonly service: ContactDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
