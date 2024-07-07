import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HeroSliderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="heading" source="heading" />
        <TextInput label="buttonText" source="buttonText" />
        <TextInput label="buttonLink" source="buttonLink" />
        <div />
        <TextInput label="subHeading" source="subHeading" />
      </SimpleForm>
    </Edit>
  );
};
