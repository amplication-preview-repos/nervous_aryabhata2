import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectMediaTitle } from "../projectMedia/ProjectMediaTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="url" source="url" />
        <ReferenceArrayInput
          source="projectMedias"
          reference="ProjectMedia"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectMediaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
