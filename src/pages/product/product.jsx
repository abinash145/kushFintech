import { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../../features/api/productApi'
import ProductCard from '../../components/card/ProductCard'
import Pagination from '../../components/pagination/Pagination'
export function Product() {
  const { data } = useGetProductsQuery()
  //for pagination
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 5
  useEffect(() => {
    if (data) {
      const endOffset = itemOffset + itemsPerPage
      setCurrentItems(data?.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(data.length / itemsPerPage))
    }
  }, [itemOffset, itemsPerPage, data])

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="mb-4 text-center font-semibold text-2xl">Item List</h1>
        <div className="flex gap-10 flex-wrap mx-auto justify-around">
          {currentItems?.map((cardData) => (
            <div
              key={cardData.id}
              className="w-[260px] rounded-lg shrink-0 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
            >
              <ProductCard cardData={cardData} />
            </div>
          ))}
        </div>
        {pageCount > 1 && (
          <Pagination
            pageCount={pageCount}
            setItemOffset={setItemOffset}
            filteredData={data}
            itemsPerPage={itemsPerPage}
          />
        )}
      </div>
    </div>
  )
}

export default Product
