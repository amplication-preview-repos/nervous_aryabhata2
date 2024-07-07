import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OurTeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="name" source="name" />
        <TextInput label="position" source="position" />
      </SimpleForm>
    </Edit>
  );
};
