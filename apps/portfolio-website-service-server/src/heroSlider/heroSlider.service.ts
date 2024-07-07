import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HeroSliderServiceBase } from "./base/heroSlider.service.base";

@Injectable()
export class HeroSliderService extends HeroSliderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
