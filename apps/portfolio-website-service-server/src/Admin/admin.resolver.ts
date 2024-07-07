import * as graphql from "@nestjs/graphql";
import { CreateAppUserArgs } from "../appUser/base/CreateAppUserArgs";
import { AppUser } from "../appUser/base/AppUser";
import { CreateContactDetailsArgs } from "../contactDetails/base/CreateContactDetailsArgs";
import { ContactDetails } from "../contactDetails/base/ContactDetails";
import { CreateContactFormArgs } from "../contactForm/base/CreateContactFormArgs";
import { ContactForm } from "../contactForm/base/ContactForm";
import { CreateHeroSliderArgs } from "../heroSlider/base/CreateHeroSliderArgs";
import { HeroSlider } from "../heroSlider/base/HeroSlider";
import { CreateOurTeamArgs } from "../ourTeam/base/CreateOurTeamArgs";
import { OurTeam } from "../ourTeam/base/OurTeam";
import { CreateProjectArgs } from "../project/base/CreateProjectArgs";
import { Project } from "../project/base/Project";
import { CreateSkillArgs } from "../skill/base/CreateSkillArgs";
import { Skill } from "../skill/base/Skill";
import { CreateTestimonialArgs } from "../testimonial/base/CreateTestimonialArgs";
import { Testimonial } from "../testimonial/base/Testimonial";
import { UpdateAppUserArgs } from "../appUser/base/UpdateAppUserArgs";
import { UpdateContactDetailsArgs } from "../contactDetails/base/UpdateContactDetailsArgs";
import { UpdateContactFormArgs } from "../contactForm/base/UpdateContactFormArgs";
import { UpdateHeroSliderArgs } from "../heroSlider/base/UpdateHeroSliderArgs";
import { UpdateOurTeamArgs } from "../ourTeam/base/UpdateOurTeamArgs";
import { UpdateProjectArgs } from "../project/base/UpdateProjectArgs";
import { UpdateSkillArgs } from "../skill/base/UpdateSkillArgs";
import { UpdateTestimonialArgs } from "../testimonial/base/UpdateTestimonialArgs";
import { AdminService } from "./admin.service";

export class AdminResolver {
  constructor(protected readonly service: AdminService) {}

  @graphql.Mutation(() => AppUser)
  async CreateAppUser(
    @graphql.Args()
    args: CreateAppUserArgs
  ): Promise<AppUser> {
    return this.service.CreateAppUser(args);
  }

  @graphql.Mutation(() => ContactDetails)
  async CreateContactDetails(
    @graphql.Args()
    args: CreateContactDetailsArgs
  ): Promise<ContactDetails> {
    return this.service.CreateContactDetails(args);
  }

  @graphql.Mutation(() => ContactForm)
  async CreateContactForm(
    @graphql.Args()
    args: CreateContactFormArgs
  ): Promise<ContactForm> {
    return this.service.CreateContactForm(args);
  }

  @graphql.Mutation(() => HeroSlider)
  async CreateHeroSlider(
    @graphql.Args()
    args: CreateHeroSliderArgs
  ): Promise<HeroSlider> {
    return this.service.CreateHeroSlider(args);
  }

  @graphql.Mutation(() => OurTeam)
  async CreateOurTeam(
    @graphql.Args()
    args: CreateOurTeamArgs
  ): Promise<OurTeam> {
    return this.service.CreateOurTeam(args);
  }

  @graphql.Mutation(() => Project)
  async CreateProject(
    @graphql.Args()
    args: CreateProjectArgs
  ): Promise<Project> {
    return this.service.CreateProject(args);
  }

  @graphql.Mutation(() => Skill)
  async CreateSkill(
    @graphql.Args()
    args: CreateSkillArgs
  ): Promise<Skill> {
    return this.service.CreateSkill(args);
  }

  @graphql.Mutation(() => Testimonial)
  async CreateTestimonial(
    @graphql.Args()
    args: CreateTestimonialArgs
  ): Promise<Testimonial> {
    return this.service.CreateTestimonial(args);
  }

  @graphql.Mutation(() => AppUser)
  async DeleteAppUser(
    @graphql.Args()
    args: string
  ): Promise<AppUser> {
    return this.service.DeleteAppUser(args);
  }

  @graphql.Mutation(() => ContactDetails)
  async DeleteContactDetails(
    @graphql.Args()
    args: string
  ): Promise<ContactDetails> {
    return this.service.DeleteContactDetails(args);
  }

  @graphql.Mutation(() => ContactForm)
  async DeleteContactForm(
    @graphql.Args()
    args: string
  ): Promise<ContactForm> {
    return this.service.DeleteContactForm(args);
  }

  @graphql.Mutation(() => HeroSlider)
  async DeleteHeroSlider(
    @graphql.Args()
    args: string
  ): Promise<HeroSlider> {
    return this.service.DeleteHeroSlider(args);
  }

  @graphql.Mutation(() => OurTeam)
  async DeleteOurTeam(
    @graphql.Args()
    args: string
  ): Promise<OurTeam> {
    return this.service.DeleteOurTeam(args);
  }

  @graphql.Mutation(() => Project)
  async DeleteProject(
    @graphql.Args()
    args: string
  ): Promise<Project> {
    return this.service.DeleteProject(args);
  }

  @graphql.Mutation(() => Skill)
  async DeleteSkill(
    @graphql.Args()
    args: string
  ): Promise<Skill> {
    return this.service.DeleteSkill(args);
  }

  @graphql.Mutation(() => Testimonial)
  async DeleteTestimonial(
    @graphql.Args()
    args: string
  ): Promise<Testimonial> {
    return this.service.DeleteTestimonial(args);
  }

  @graphql.Query(() => AppUser)
  async GetAppUser(
    @graphql.Args()
    args: string
  ): Promise<AppUser> {
    return this.service.GetAppUser(args);
  }

  @graphql.Query(() => ContactDetails)
  async GetContactDetails(
    @graphql.Args()
    args: string
  ): Promise<ContactDetails> {
    return this.service.GetContactDetails(args);
  }

  @graphql.Query(() => ContactForm)
  async GetContactForm(
    @graphql.Args()
    args: string
  ): Promise<ContactForm> {
    return this.service.GetContactForm(args);
  }

  @graphql.Query(() => HeroSlider)
  async GetHeroSlider(
    @graphql.Args()
    args: string
  ): Promise<HeroSlider> {
    return this.service.GetHeroSlider(args);
  }

  @graphql.Query(() => OurTeam)
  async GetOurTeam(
    @graphql.Args()
    args: string
  ): Promise<OurTeam> {
    return this.service.GetOurTeam(args);
  }

  @graphql.Query(() => Project)
  async GetProject(
    @graphql.Args()
    args: string
  ): Promise<Project> {
    return this.service.GetProject(args);
  }

  @graphql.Query(() => Skill)
  async GetSkill(
    @graphql.Args()
    args: string
  ): Promise<Skill> {
    return this.service.GetSkill(args);
  }

  @graphql.Query(() => Testimonial)
  async GetTestimonial(
    @graphql.Args()
    args: string
  ): Promise<Testimonial> {
    return this.service.GetTestimonial(args);
  }

  @graphql.Mutation(() => AppUser)
  async UpdateAppUser(
    @graphql.Args()
    args: UpdateAppUserArgs
  ): Promise<AppUser> {
    return this.service.UpdateAppUser(args);
  }

  @graphql.Mutation(() => ContactDetails)
  async UpdateContactDetails(
    @graphql.Args()
    args: UpdateContactDetailsArgs
  ): Promise<ContactDetails> {
    return this.service.UpdateContactDetails(args);
  }

  @graphql.Mutation(() => ContactForm)
  async UpdateContactForm(
    @graphql.Args()
    args: UpdateContactFormArgs
  ): Promise<ContactForm> {
    return this.service.UpdateContactForm(args);
  }

  @graphql.Mutation(() => HeroSlider)
  async UpdateHeroSlider(
    @graphql.Args()
    args: UpdateHeroSliderArgs
  ): Promise<HeroSlider> {
    return this.service.UpdateHeroSlider(args);
  }

  @graphql.Mutation(() => OurTeam)
  async UpdateOurTeam(
    @graphql.Args()
    args: UpdateOurTeamArgs
  ): Promise<OurTeam> {
    return this.service.UpdateOurTeam(args);
  }

  @graphql.Mutation(() => Project)
  async UpdateProject(
    @graphql.Args()
    args: UpdateProjectArgs
  ): Promise<Project> {
    return this.service.UpdateProject(args);
  }

  @graphql.Mutation(() => Skill)
  async UpdateSkill(
    @graphql.Args()
    args: UpdateSkillArgs
  ): Promise<Skill> {
    return this.service.UpdateSkill(args);
  }

  @graphql.Mutation(() => Testimonial)
  async UpdateTestimonial(
    @graphql.Args()
    args: UpdateTestimonialArgs
  ): Promise<Testimonial> {
    return this.service.UpdateTestimonial(args);
  }
}
