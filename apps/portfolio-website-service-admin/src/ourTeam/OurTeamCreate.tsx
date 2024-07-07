import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OurTeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="name" source="name" />
        <TextInput label="position" source="position" />
      </SimpleForm>
    </Create>
  );
};
