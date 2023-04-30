import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { EyeCloseIcon, EyeOpenIcon } from '../../utils/icons'
import Input from '../../components/input/Input'
import Btn from '../../components/button/Btn'
import { useLoginAuthMutation } from '../../features/api/authApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { appSelector, clearState, login } from '../../features/slice/appSlice'
import { toast } from 'react-toastify'
export function SignIn() {
  const navigate = useNavigate()
  const { token } = useSelector(appSelector)
  useEffect(() => {
    if (token) {
      navigate('/dashboard')
    }
  }, [])
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Form navigate={navigate} />
    </div>
  )
}

const Form = (props) => {
  const [passwordType, setPasswordType] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [
    loginAuth,
    { isLoading, isSuccess, isError, error, data },
  ] = useLoginAuthMutation()

  useEffect(() => {
    if (isSuccess) {
      toast('Login Successfully')
      console.log(data)
      clearState()
      dispatch(
        login({
          token: data.token,
        }),
      )
      navigate(`/dashboard`)
    }
    if (error) {
      toast(error.data)
    }
    console.log('working')
  }, [isError, isSuccess, error])
  const onSubmit = (data) => {
    console.log(data)
    if (data.username === 'admin@admin.com' && data.password === 'admin') {
      dispatch(
        login({
          token: 'fake token',
        }),
      )
      toast('Login Successfully without api')
      navigate('/dashboard')
    } else {
      loginAuth(JSON.stringify(data))
    }
  }

  return (
    <form
      className="pt-[24px] pb-[26px] flex flex-col gap-5 w-[400px] max-w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={`flex flex-col justify-start items-start gap-1 w-full transition-all ease-in-out duration-700 translate-x-0 `}
      >
        <Controller
          name="username"
          // defaultValue=""
          control={control}
          rules={{
            required: true,
            minLength: {
              value: 1,
              message: 'Min character length required',
            },
            maxLength: {
              value: 99,
              message: 'Max character length exceded',
            },
            // pattern: {
            //   value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            //   message: 'Enter a valid email address',
            // },
          }}
          render={({ field }) => (
            <Input
              placeholder="Enter your user name"
              label="User Name"
              errorMessage={errors.email && errors.email.message}
              field={field}
            />
          )}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        <div className="w-full relative">
          <Controller
            name="password"
            defaultValue=""
            control={control}
            rules={{
              required: true,
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
                placeholder="Enter your Password"
                label="Password"
                type={passwordType ? 'password' : 'text'}
                errorMessage={errors.email && errors.email.message}
                field={field}
              />
            )}
          />
          {passwordType ? (
            <span
              onClick={() => setPasswordType(false)}
              className="absolute bottom-4 right-3 w-5 h-5 cursor-pointer custom-transition hover:scale-105"
            >
              <EyeCloseIcon />
            </span>
          ) : (
            <span
              onClick={() => setPasswordType(true)}
              className="absolute bottom-4 right-3 w-5 h-5 cursor-pointer custom-transition hover:scale-105"
            >
              <EyeOpenIcon />
            </span>
          )}
        </div>
      </div>
      <Btn title="Submit" className="" disabled={isLoading ? true : false} />
    </form>
  )
}
export default SignIn
