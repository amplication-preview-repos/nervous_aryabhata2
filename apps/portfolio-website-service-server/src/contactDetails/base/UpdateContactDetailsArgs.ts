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
import { ContactDetailsWhereUniqueInput } from "./ContactDetailsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ContactDetailsUpdateInput } from "./ContactDetailsUpdateInput";

@ArgsType()
class UpdateContactDetailsArgs {
  @ApiProperty({
    required: true,
    type: () => ContactDetailsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactDetailsWhereUniqueInput)
  @Field(() => ContactDetailsWhereUniqueInput, { nullable: false })
  where!: ContactDetailsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ContactDetailsUpdateInput,
  })
  @ValidateNested()
  @Type(() => ContactDetailsUpdateInput)
  @Field(() => ContactDetailsUpdateInput, { nullable: false })
  data!: ContactDetailsUpdateInput;
}

export { UpdateContactDetailsArgs as UpdateContactDetailsArgs };
