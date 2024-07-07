import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ProjectModule } from "./project/project.module";
import { SkillModule } from "./skill/skill.module";
import { ContactFormModule } from "./contactForm/contactForm.module";
import { AppUserModule } from "./appUser/appUser.module";
import { OurTeamModule } from "./ourTeam/ourTeam.module";
import { HeroSliderModule } from "./heroSlider/heroSlider.module";
import { TestimonialModule } from "./testimonial/testimonial.module";
import { ContactDetailsModule } from "./contactDetails/contactDetails.module";
import { CategoryModule } from "./category/category.module";
import { ProjectMediaModule } from "./projectMedia/projectMedia.module";
import { AdminModule } from "./Admin/admin.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    ACLModule,
    AuthModule,
    UserModule,
    ProjectModule,
    SkillModule,
    ContactFormModule,
    AppUserModule,
    OurTeamModule,
    HeroSliderModule,
    TestimonialModule,
    ContactDetailsModule,
    CategoryModule,
    ProjectMediaModule,
    AdminModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
