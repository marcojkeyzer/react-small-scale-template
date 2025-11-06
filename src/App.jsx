import { Admin, ListGuesser, Resource } from "react-admin"
import { createTrailbaseProvider } from "../ra-trailbase"
import { CategoriesCreate, CategoriesEdit, CategoryList } from "../public/categories"

const {dataProvider,authProvider} = await createTrailbaseProvider("https://urban-invention-wrvqq597j4rjcg7pv-4000.app.github.dev/")

function App() {

  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="categories" list={CategoryList} edit={CategoriesEdit} create={CategoriesCreate} />
    </Admin>
  )
}

export default App
