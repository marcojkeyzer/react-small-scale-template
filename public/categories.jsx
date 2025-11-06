import { Create, DataTable, Edit, List, SimpleForm, TextInput } from "react-admin";

export const CategoryList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="created_at" />
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
        </DataTable>
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