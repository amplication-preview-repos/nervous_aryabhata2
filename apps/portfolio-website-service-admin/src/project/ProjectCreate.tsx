import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectMediaTitle } from "../projectMedia/ProjectMediaTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
