import { Banner, ProductCategories } from "../../components"
import Layout from "../../layout/Layout"

const Home = () => {

  return (
    <Layout>
      <div className="pt-2 flex flex-col gap-4">
        <Banner />
        <div className="grid grid-cols-3 gap-2 justify-center pt-16">
          <div className="col-span-1">
            <ProductCategories />
          </div>
          <div className="col-span-2 border">

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home