import { Banner, ProductCategories } from "../../components"
import Layout from "../../layout/Layout"

const Home = () => {

  return (
    <Layout>
      <div className="pt-2">
        <Banner />

        <ProductCategories />
      </div>
    </Layout>
  )
}

export default Home