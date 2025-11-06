import { Create, Datagrid, DataTable, DateField, Edit, EditButton, List, NumberField, ReferenceField, ReferenceInput, ShowButton, SimpleForm, TextField, TextInput } from "react-admin";

export const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <ReferenceField source="category_id" reference="categories">    
                <TextField source="name" />
            </ReferenceField>
            <NumberField source="price"/>
            <TextField source="id" />
            <TextField source="created_at" />
            <EditButton />
            <ShowButton />            
        </Datagrid>
    </List>
);

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="description"/>
            <ReferenceInput source="category_id" reference="categories"/>
            <TextInput source="price"/>
            <TextInput source="created_at"/>
        </SimpleForm>
    </Create>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="description"/>
            <ReferenceInput source="category_id" reference="categories"/>
            <TextInput source="price"/>
            <TextInput source="created_at"/>
        </SimpleForm>
    </Edit>
);