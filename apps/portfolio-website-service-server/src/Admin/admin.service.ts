import { Injectable } from "@nestjs/common";
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

@Injectable()
export class AdminService {
  constructor() {}
  async CreateAppUser(args: CreateAppUserArgs): Promise<AppUser> {
    throw new Error("Not implemented");
  }
  async CreateContactDetails(args: CreateContactDetailsArgs): Promise<ContactDetails> {
    throw new Error("Not implemented");
  }
  async CreateContactForm(args: CreateContactFormArgs): Promise<ContactForm> {
    throw new Error("Not implemented");
  }
  async CreateHeroSlider(args: CreateHeroSliderArgs): Promise<HeroSlider> {
    throw new Error("Not implemented");
  }
  async CreateOurTeam(args: CreateOurTeamArgs): Promise<OurTeam> {
    throw new Error("Not implemented");
  }
  async CreateProject(args: CreateProjectArgs): Promise<Project> {
    throw new Error("Not implemented");
  }
  async CreateSkill(args: CreateSkillArgs): Promise<Skill> {
    throw new Error("Not implemented");
  }
  async CreateTestimonial(args: CreateTestimonialArgs): Promise<Testimonial> {
    throw new Error("Not implemented");
  }
  async DeleteAppUser(args: string): Promise<AppUser> {
    throw new Error("Not implemented");
  }
  async DeleteContactDetails(args: string): Promise<ContactDetails> {
    throw new Error("Not implemented");
  }
  async DeleteContactForm(args: string): Promise<ContactForm> {
    throw new Error("Not implemented");
  }
  async DeleteHeroSlider(args: string): Promise<HeroSlider> {
    throw new Error("Not implemented");
  }
  async DeleteOurTeam(args: string): Promise<OurTeam> {
    throw new Error("Not implemented");
  }
  async DeleteProject(args: string): Promise<Project> {
    throw new Error("Not implemented");
  }
  async DeleteSkill(args: string): Promise<Skill> {
    throw new Error("Not implemented");
  }
  async DeleteTestimonial(args: string): Promise<Testimonial> {
    throw new Error("Not implemented");
  }
  async GetAppUser(args: string): Promise<AppUser> {
    throw new Error("Not implemented");
  }
  async GetContactDetails(args: string): Promise<ContactDetails> {
    throw new Error("Not implemented");
  }
  async GetContactForm(args: string): Promise<ContactForm> {
    throw new Error("Not implemented");
  }
  async GetHeroSlider(args: string): Promise<HeroSlider> {
    throw new Error("Not implemented");
  }
  async GetOurTeam(args: string): Promise<OurTeam> {
    throw new Error("Not implemented");
  }
  async GetProject(args: string): Promise<Project> {
    throw new Error("Not implemented");
  }
  async GetSkill(args: string): Promise<Skill> {
    throw new Error("Not implemented");
  }
  async GetTestimonial(args: string): Promise<Testimonial> {
    throw new Error("Not implemented");
  }
  async UpdateAppUser(args: UpdateAppUserArgs): Promise<AppUser> {
    throw new Error("Not implemented");
  }
  async UpdateContactDetails(args: UpdateContactDetailsArgs): Promise<ContactDetails> {
    throw new Error("Not implemented");
  }
  async UpdateContactForm(args: UpdateContactFormArgs): Promise<ContactForm> {
    throw new Error("Not implemented");
  }
  async UpdateHeroSlider(args: UpdateHeroSliderArgs): Promise<HeroSlider> {
    throw new Error("Not implemented");
  }
  async UpdateOurTeam(args: UpdateOurTeamArgs): Promise<OurTeam> {
    throw new Error("Not implemented");
  }
  async UpdateProject(args: UpdateProjectArgs): Promise<Project> {
    throw new Error("Not implemented");
  }
  async UpdateSkill(args: UpdateSkillArgs): Promise<Skill> {
    throw new Error("Not implemented");
  }
  async UpdateTestimonial(args: UpdateTestimonialArgs): Promise<Testimonial> {
    throw new Error("Not implemented");
  }
}
