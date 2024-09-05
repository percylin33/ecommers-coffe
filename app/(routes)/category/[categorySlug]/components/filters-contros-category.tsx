import FilterOrigin from "./filter-origin"

type FiltersControlsCategoryProps= {
  setFilterOrigin: (origin: string) =>void
}

const FiltersControsCategory = (props: FiltersControlsCategoryProps) => {
  const {setFilterOrigin}= props
  return (
  <div className="sm:w-[350px] sm:mt-5 p-6">
    <FilterOrigin setFilterOrigin={setFilterOrigin}/>
    
  </div>
  )
}

export default FiltersControsCategory