import { List, Datagrid, TextField, ImageField, ReferenceField, EditButton, useGetIdentity, ReferenceManyField, Edit, SimpleForm, TextInput, ImageInput} from "react-admin";

export const ProfilesList = () => {

const { identity } = useGetIdentity();
const filter = { user_id: identity?.id };

if (identity) return(
    <List filter={filter} title="My Profile">
        <Datagrid>
            <ImageField source="avatar_url"/>
            <TextField source="full_name" />
            <EditButton />
        </Datagrid>
    </List>
)
};

export const ProfilesEdit = () => (
    <Edit>
        <SimpleForm>
            <ImageField source="avatar_url"/>
            <TextInput source="avatar_url"/>
            <TextInput source="full_name" />
        </SimpleForm>
    </Edit>
);