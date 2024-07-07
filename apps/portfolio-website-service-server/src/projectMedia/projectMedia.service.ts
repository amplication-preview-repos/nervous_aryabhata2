import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectMediaServiceBase } from "./base/projectMedia.service.base";

@Injectable()
export class ProjectMediaService extends ProjectMediaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
