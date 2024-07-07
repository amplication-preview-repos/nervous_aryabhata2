import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OurTeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="image" source="image" />
        <TextField label="bio" source="bio" />
        <TextField label="name" source="name" />
        <TextField label="position" source="position" />
      </SimpleShowLayout>
    </Show>
  );
};
