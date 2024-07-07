import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HeroSliderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="heading" source="heading" />
        <TextInput label="buttonText" source="buttonText" />
        <TextInput label="buttonLink" source="buttonLink" />
        <div />
        <TextInput label="subHeading" source="subHeading" />
      </SimpleForm>
    </Create>
  );
};
