import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContactDetailsResolverBase } from "./base/contactDetails.resolver.base";
import { ContactDetails } from "./base/ContactDetails";
import { ContactDetailsService } from "./contactDetails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContactDetails)
export class ContactDetailsResolver extends ContactDetailsResolverBase {
  constructor(
    protected readonly service: ContactDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
