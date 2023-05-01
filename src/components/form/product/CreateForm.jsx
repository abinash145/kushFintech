import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  useGetCategoriesQuery,
  useAddProductMutation,
} from '../../../features/api'
import Btn from '../../button/Btn'
import Input from '../../input/Input'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function CreateForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    control,
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  const { data: categoriesData } = useGetCategoriesQuery()
  const [
    addProduct,
    { data, isError, isSuccess, error, isLoading },
  ] = useAddProductMutation()
  const [imgUrl, setImgUrl] = useState(null)
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    const imageUrl = URL.createObjectURL(file)
    setImgUrl(imageUrl)
    setValue('image', e.target.files[0])
  }
  useEffect(() => {
    if (isSuccess) {
      toast('New Product Added')
      navigate(`/dashboard`)
    }
    if (error) {
      toast(error.data)
    }
  }, [isError, isSuccess, error])
  const onSubmit = (data) => {
    console.log(data)
    const formData = new FormData()
    formData.append('image', data.image[0])
    formData.append('category', data.category)
    formData.append('description', data.description)
    formData.append('price', data.price)
    formData.append('title', data.title)
    addProduct(JSON.stringify(formData))
  }

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
      <form
        className="pt-[24px] pb-[26px] flex flex-col gap-5 max-w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={`flex flex-col justify-start items-start gap-1 w-full transition-all ease-in-out duration-700 translate-x-0 `}
        >
          <Controller
            name="title"
            // defaultValue=""
            control={control}
            rules={{
              required: 'This field is required',
              minLength: {
                value: 1,
                message: 'Min character length required',
              },
              maxLength: {
                value: 99,
                message: 'Max character length exceded',
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="Enter your title"
                label="Title"
                errorMessage={errors.title && errors.title.message}
                field={field}
              />
            )}
          />
        </div>
        <div className={`w-full  ease-in-out  `}>
          <Controller
            name="category"
            // defaultValue=""
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({ field }) => (
              <>
                <label
                  htmlFor=""
                  className={`font-[700] text-[14px] leading-[20px] select-none flex items-center gap-4 mb-4`}
                >
                  Categories
                  {errors.category && (
                    <p className="text-[#fd8686]">{errors.category.message}</p>
                  )}
                </label>
                <Select
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      width: '100%',
                      backgroundColor: '#F3F4F6',
                      padding: '4px 12px',
                    }),
                    menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
                    menu: (provided) => ({
                      ...provided,
                      zIndex: '9999 !important',
                    }),
                  }}
                  options={categoriesData?.map((data) => {
                    return { label: data, value: data }
                  })}
                  {...field}
                />
              </>
            )}
          />
        </div>
        <div
          className={`flex flex-col justify-start items-start gap-1 w-full transition-all ease-in-out duration-700 translate-x-0 `}
        >
          <Controller
            name="price"
            // defaultValue=""
            control={control}
            rules={{
              required: 'This field is required',
              minLength: {
                value: 1,
                message: 'Min character length required',
              },
              maxLength: {
                value: 99,
                message: 'Max character length exceded',
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="Enter your price"
                label="Price"
                errorMessage={errors.price && errors.price.message}
                field={field}
                type="number"
              />
            )}
          />
        </div>
        <div
          className={`flex flex-col justify-start items-start gap-1 w-full transition-all ease-in-out duration-700 translate-x-0 `}
        >
          <Controller
            name="description"
            // defaultValue=""
            control={control}
            rules={{
              required: 'This field is required',
              minLength: {
                value: 1,
                message: 'Min character length required',
              },
              maxLength: {
                value: 99,
                message: 'Max character length exceded',
              },
            }}
            render={({ field }) => (
              <Input
                placeholder="Enter your description"
                label="Description"
                errorMessage={errors.description && errors.description.message}
                field={field}
              />
            )}
          />
        </div>

        <div
          className={`flex flex-col justify-start items-start gap-1 w-full transition-all ease-in-out duration-700 translate-x-0 `}
        >
          <div
            className={`flex flex-col justify-start items-start gap-1 w-full transition-all ease-in-out duration-700 translate-x-0 `}
          >
            <>
              <label
                htmlFor="editImage"
                className={`font-[700] text-[14px] leading-[20px] select-none flex items-center gap-4 `}
              >
                Image
                {errors.image && <p className="text-[#fd8686]">ddsdsf</p>}
                {imgUrl && <img src={imgUrl} className="w-28 h-28" alt="" />}
                <input
                  type="file"
                  id="editImage"
                  accept="image/*"
                  className={`w-full  ${imgUrl ? 'hidden' : ''}`}
                  onChange={handleFileChange}
                />
              </label>
            </>
          </div>
        </div>

        <Btn
          title={isLoading ? 'Submitting...' : 'Submit'}
          className=""
          disabled={isLoading ? true : false}
        />
      </form>
    </>
  )
}

export default CreateForm
