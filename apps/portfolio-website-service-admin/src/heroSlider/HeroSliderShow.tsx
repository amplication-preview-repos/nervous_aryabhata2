import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HeroSliderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="heading" source="heading" />
        <TextField label="buttonText" source="buttonText" />
        <TextField label="buttonLink" source="buttonLink" />
        <TextField label="image" source="image" />
        <TextField label="subHeading" source="subHeading" />
      </SimpleShowLayout>
    </Show>
  );
};
