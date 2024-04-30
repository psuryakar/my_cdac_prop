import CategoryList from '../components/categoryList'
import PropertyList from '../components/propertyList'

function Home() {
  return (
    <div>
    <h2 className='page-title'>My_99acres</h2>

    <div className="row">
      <div className="col-lg-3">
        {/* Filter components */}
        {/* <CategoryList /> */}
      </div>

      <div className="col-lg-8">
        {/* Property list */}
        <PropertyList />
      </div>
    </div>
  </div>
  )
}

export default Home
