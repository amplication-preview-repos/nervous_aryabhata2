import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TestimonialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <div />
        <TextInput label="clientName" source="clientName" />
      </SimpleForm>
    </Edit>
  );
};
