import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  useGetCategoriesQuery,
  useGetProductQuery,
  useEditProductMutation,
} from '../../../features/api'
import Btn from '../../button/Btn'
import Input from '../../input/Input'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function EditForm() {
  const { id } = useParams()
  const [imgUrl, setImgUrl] = useState(null)
  const navigate = useNavigate()
  const {
    control,
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  //getting data from api
  const { data: categoriesData } = useGetCategoriesQuery()
  const { data: productDetail } = useGetProductQuery({ id })
  const [
    editProduct,
    { data, isError, isSuccess, error, isLoading },
  ] = useEditProductMutation()
  useEffect(() => {
    if (isSuccess) {
      toast('Product Detail Change')
      navigate(`/dashboard`)
    }
    if (error) {
      toast(error.data)
    }
  }, [isError, isSuccess, error])
  if (!productDetail) {
    return <></>
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    const imageUrl = URL.createObjectURL(file)
    setImgUrl(imageUrl)
    setValue('image', e.target.files[0])
  }
  const onSubmit = (data) => {
    const formData = new FormData()
    if (data.image) {
      formData.append('image', data.image)
    } else {
      formData.append('image', productDetail?.image)
    }
    formData.append('category', data.category)
    formData.append('description', data.description)
    formData.append('price', data.price)
    formData.append('title', data.title)
    console.log(id)
    editProduct(id, JSON.stringify(formData))
  }
  return (
    <>
      <div className="flex justify-between items-end mb-4">
        <p>Edit Product</p>
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
            defaultValue={productDetail?.title}
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
            defaultValue={{
              label: productDetail?.category,
              value: productDetail?.category,
            }}
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
                    control: (provided) => ({
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
            defaultValue={productDetail?.price}
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
            defaultValue={productDetail?.description}
            control={control}
            rules={{
              required: 'This field is required',
              minLength: {
                value: 1,
                message: 'Min character length required',
              },
              maxLength: {
                value: 9099,
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
          <>
            <label
              htmlFor="editImage"
              className={`font-[700] text-[14px] leading-[20px] select-none flex items-center gap-4 `}
            >
              Image
              {errors.image && (
                <p className="text-[#fd8686]">{errors.image.message}</p>
              )}
              <img
                src={imgUrl ? imgUrl : productDetail?.image}
                className="w-28 h-28"
                alt=""
              />
              <input
                type="file"
                id="editImage"
                accept="image/*"
                className="w-full hidden"
                onChange={handleFileChange}
                // {...register('image')}
              />
            </label>
          </>
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
export default EditForm
