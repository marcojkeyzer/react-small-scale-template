import { Admin, ListGuesser, Resource } from "react-admin"
import { createTrailbaseProvider } from "../ra-trailbase"
import { CategoriesCreate, CategoriesEdit, CategoriesList } from "./categories"
import { ProductCreate, ProductEdit, ProductList } from "./products"

const {dataProvider,authProvider} = await createTrailbaseProvider("https://urban-invention-wrvqq597j4rjcg7pv-4000.app.github.dev/")

function App() {

  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="categories" list={CategoriesList} edit={CategoriesEdit} create={CategoriesCreate} />
      <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />
    </Admin>
  )
}

export default App
