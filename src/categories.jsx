import { Create, Datagrid, Edit, List, ReferenceManyField, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";

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

export const CategoriesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name"/>
            <ReferenceManyField
                label="products"
                reference="products"            
                target="category_id"
            >
                <Datagrid>
                    <TextField source="name" />
                    <TextField source="description" />
                    <TextField source="price" />
                    <TextField source="created_at" />
                    <ShowButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);

export const CategoriesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="created_at"/>
        </SimpleForm>
    </Edit>
);