import { Admin, Resource } from "react-admin"
import { createTrailbaseProvider } from "../ra-trailbase"
import { CategoriesCreate, CategoriesEdit, CategoriesList, CategoriesShow } from "./categories"
import { ProductCreate, ProductEdit, ProductList, ProductShow } from "./products"
import { ProfilesEdit, ProfilesList } from "./profiles"
import PeopleIcon from '@mui/icons-material/People';

const {dataProvider,authProvider} = await createTrailbaseProvider("https://urban-invention-wrvqq597j4rjcg7pv-4000.app.github.dev/")

function App() {

  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="profiles" list={ProfilesList} edit={ProfilesEdit} options={{ label: 'My Profile' }} icon={PeopleIcon}/>
      <Resource name="categories" list={CategoriesList} show={CategoriesShow} edit={CategoriesEdit} create={CategoriesCreate} />
      <Resource name="products" list={ProductList} show={ProductShow} edit={ProductEdit} create={ProductCreate} />
      <Resource name="users"/>
    </Admin>
  )
}

export default App
