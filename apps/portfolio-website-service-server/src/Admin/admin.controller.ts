import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminService } from "./admin.service";
import { UpdateTestimonialArgs } from "../testimonial/base/UpdateTestimonialArgs";
import { AppUser } from "../appUser/base/AppUser";
import { ContactDetails } from "../contactDetails/base/ContactDetails";
import { ContactForm } from "../contactForm/base/ContactForm";
import { HeroSlider } from "../heroSlider/base/HeroSlider";
import { OurTeam } from "../ourTeam/base/OurTeam";
import { Project } from "../project/base/Project";
import { Skill } from "../skill/base/Skill";
import { Testimonial } from "../testimonial/base/Testimonial";

@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminController {
  constructor(protected readonly service: AdminService) {}

  @common.Post("/appUser")
  @swagger.ApiOkResponse({
    type: AppUser
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateAppUser(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<AppUser> {
        return this.service.CreateAppUser(body);
      }

  @common.Post("/contactDetails")
  @swagger.ApiOkResponse({
    type: ContactDetails
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateContactDetails(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<ContactDetails> {
        return this.service.CreateContactDetails(body);
      }

  @common.Post("/contactForm")
  @swagger.ApiOkResponse({
    type: ContactForm
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateContactForm(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<ContactForm> {
        return this.service.CreateContactForm(body);
      }

  @common.Post("/heroSlider")
  @swagger.ApiOkResponse({
    type: HeroSlider
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateHeroSlider(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<HeroSlider> {
        return this.service.CreateHeroSlider(body);
      }

  @common.Post("/ourTeam")
  @swagger.ApiOkResponse({
    type: OurTeam
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateOurTeam(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<OurTeam> {
        return this.service.CreateOurTeam(body);
      }

  @common.Post("/project")
  @swagger.ApiOkResponse({
    type: Project
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateProject(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Project> {
        return this.service.CreateProject(body);
      }

  @common.Post("/skill")
  @swagger.ApiOkResponse({
    type: Skill
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSkill(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Skill> {
        return this.service.CreateSkill(body);
      }

  @common.Post("/testimonial")
  @swagger.ApiOkResponse({
    type: Testimonial
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateTestimonial(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Testimonial> {
        return this.service.CreateTestimonial(body);
      }

  @common.Delete("/appUser/:id")
  @swagger.ApiOkResponse({
    type: AppUser
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteAppUser(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<AppUser> {
        return this.service.DeleteAppUser(body);
      }

  @common.Delete("/contactDetails/:id")
  @swagger.ApiOkResponse({
    type: ContactDetails
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteContactDetails(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<ContactDetails> {
        return this.service.DeleteContactDetails(body);
      }

  @common.Delete("/contactForm/:id")
  @swagger.ApiOkResponse({
    type: ContactForm
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteContactForm(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<ContactForm> {
        return this.service.DeleteContactForm(body);
      }

  @common.Delete("/heroSlider/:id")
  @swagger.ApiOkResponse({
    type: HeroSlider
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteHeroSlider(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<HeroSlider> {
        return this.service.DeleteHeroSlider(body);
      }

  @common.Delete("/ourTeam/:id")
  @swagger.ApiOkResponse({
    type: OurTeam
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteOurTeam(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<OurTeam> {
        return this.service.DeleteOurTeam(body);
      }

  @common.Delete("/project/:id")
  @swagger.ApiOkResponse({
    type: Project
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteProject(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Project> {
        return this.service.DeleteProject(body);
      }

  @common.Delete("/skill/:id")
  @swagger.ApiOkResponse({
    type: Skill
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteSkill(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Skill> {
        return this.service.DeleteSkill(body);
      }

  @common.Delete("/testimonial/:id")
  @swagger.ApiOkResponse({
    type: Testimonial
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteTestimonial(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Testimonial> {
        return this.service.DeleteTestimonial(body);
      }

  @common.Get("/appUser/:id")
  @swagger.ApiOkResponse({
    type: AppUser
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAppUser(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<AppUser> {
        return this.service.GetAppUser(body);
      }

  @common.Get("/contactDetails/:id")
  @swagger.ApiOkResponse({
    type: ContactDetails
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetContactDetails(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<ContactDetails> {
        return this.service.GetContactDetails(body);
      }

  @common.Get("/contactForm/:id")
  @swagger.ApiOkResponse({
    type: ContactForm
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetContactForm(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<ContactForm> {
        return this.service.GetContactForm(body);
      }

  @common.Get("/heroSlider/:id")
  @swagger.ApiOkResponse({
    type: HeroSlider
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetHeroSlider(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<HeroSlider> {
        return this.service.GetHeroSlider(body);
      }

  @common.Get("/ourTeam/:id")
  @swagger.ApiOkResponse({
    type: OurTeam
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetOurTeam(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<OurTeam> {
        return this.service.GetOurTeam(body);
      }

  @common.Get("/project/:id")
  @swagger.ApiOkResponse({
    type: Project
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetProject(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Project> {
        return this.service.GetProject(body);
      }

  @common.Get("/skill/:id")
  @swagger.ApiOkResponse({
    type: Skill
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetSkill(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Skill> {
        return this.service.GetSkill(body);
      }

  @common.Get("/testimonial/:id")
  @swagger.ApiOkResponse({
    type: Testimonial
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTestimonial(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Testimonial> {
        return this.service.GetTestimonial(body);
      }

  @common.Put("/appUser/:id")
  @swagger.ApiOkResponse({
    type: AppUser
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateAppUser(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<AppUser> {
        return this.service.UpdateAppUser(body);
      }

  @common.Put("/contactDetails/:id")
  @swagger.ApiOkResponse({
    type: ContactDetails
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateContactDetails(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<ContactDetails> {
        return this.service.UpdateContactDetails(body);
      }

  @common.Put("/contactForm/:id")
  @swagger.ApiOkResponse({
    type: ContactForm
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateContactForm(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<ContactForm> {
        return this.service.UpdateContactForm(body);
      }

  @common.Put("/heroSlider/:id")
  @swagger.ApiOkResponse({
    type: HeroSlider
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateHeroSlider(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<HeroSlider> {
        return this.service.UpdateHeroSlider(body);
      }

  @common.Put("/ourTeam/:id")
  @swagger.ApiOkResponse({
    type: OurTeam
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateOurTeam(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<OurTeam> {
        return this.service.UpdateOurTeam(body);
      }

  @common.Put("/project/:id")
  @swagger.ApiOkResponse({
    type: Project
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateProject(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Project> {
        return this.service.UpdateProject(body);
      }

  @common.Put("/skill/:id")
  @swagger.ApiOkResponse({
    type: Skill
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateSkill(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Skill> {
        return this.service.UpdateSkill(body);
      }

  @common.Put("/testimonial/:id")
  @swagger.ApiOkResponse({
    type: Testimonial
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateTestimonial(
    @common.Body()
    body: UpdateTestimonialArgs
  ): Promise<Testimonial> {
        return this.service.UpdateTestimonial(body);
      }
}
