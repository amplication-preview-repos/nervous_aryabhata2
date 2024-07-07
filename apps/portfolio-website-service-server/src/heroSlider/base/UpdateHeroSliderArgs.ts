/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HeroSliderWhereUniqueInput } from "./HeroSliderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HeroSliderUpdateInput } from "./HeroSliderUpdateInput";

@ArgsType()
class UpdateHeroSliderArgs {
  @ApiProperty({
    required: true,
    type: () => HeroSliderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HeroSliderWhereUniqueInput)
  @Field(() => HeroSliderWhereUniqueInput, { nullable: false })
  where!: HeroSliderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HeroSliderUpdateInput,
  })
  @ValidateNested()
  @Type(() => HeroSliderUpdateInput)
  @Field(() => HeroSliderUpdateInput, { nullable: false })
  data!: HeroSliderUpdateInput;
}

export { UpdateHeroSliderArgs as UpdateHeroSliderArgs };
