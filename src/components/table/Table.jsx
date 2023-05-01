import { EditIcon, DeleteIcon } from '../../utils/icons'
import { useNavigate } from 'react-router-dom'
import { useDeleteProductMutation } from '../../features/api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
export default function Table({ tableData }) {
  const navigate = useNavigate()
  const [deleteProduct, { data, isSuccess }] = useDeleteProductMutation()
  useEffect(() => {
    if (isSuccess) {
      toast('Delete Successfully in Api')
    }
  }, [isSuccess])
  return (
    <>
      <div className="flex justify-between items-end mb-4">
        <p>Produce Table</p>
        <button
          className={`bg-brand_primaryFade pt-[14px] pb-[12px] px-[48px] h-[44px] w-full  text-[#ffffff] rounded-[8px] text-[14px] font-[700] leading-[20px] transition-all ease-in-out duration-300 active:scale-90 hover:scale-105 hover:shadow-md select-none max-w-[200px]`}
          onClick={() => navigate('/dashboard/create')}
        >
          Add Product
        </button>
      </div>
      <table className="table-auto w-full ">
        <thead>
          <tr className="[&>th]:text-left [&>th]:p-4 border-b border-dashed ">
            <th>ID</th>
            <th>Artist</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item) => (
            <tr key={item.id} className="[&>td]:text-left [&>td]:p-4">
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <div className="flex items-center gap-2">
                  <EditIcon
                    className="cursor-pointer"
                    onClick={() => navigate(`/dashboard/edit/${item.id}`)}
                  />
                  <DeleteIcon
                    className="cursor-pointer"
                    onClick={() => deleteProduct(item.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
