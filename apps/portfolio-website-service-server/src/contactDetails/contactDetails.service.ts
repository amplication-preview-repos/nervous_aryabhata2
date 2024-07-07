import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactDetailsServiceBase } from "./base/contactDetails.service.base";

@Injectable()
export class ContactDetailsService extends ContactDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
