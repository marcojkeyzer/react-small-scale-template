import { Create, Datagrid, Edit, List, SimpleForm, TextField, TextInput } from "react-admin";

export const CategoriesList = () => (
    <List>
        <Datagrid>
            <TextField source="name" />
            <TextField source="id" />
            <TextField source="created_at" />
        </Datagrid>
    </List>
);

export const CategoriesCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="created_at"/>
        </SimpleForm>
    </Create>
);

export const CategoriesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="created_at"/>
        </SimpleForm>
    </Edit>
);