import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginValues } from '../util/type'
import { loginValidationSchema } from '../util/ValidationSchema'
import TextInputField from '../components/UI/TextInputField'

const Login = () => {
  const { register } = useForm<LoginValues>({ resolver: zodResolver(loginValidationSchema) })
  return (
    <div className="text-white">
      <p className="flex flex-col items-center pt-24 font-lora text-5xl  ">
        <span className="font-bold uppercase">moni</span>
        <span className="font-medium italic">share</span>
      </p>
      <div className="mx-auto flex w-full max-w-md flex-col gap-12 px-4">
        <div className="pt-8 text-center">
          <span className="font-lora text-xl font-thin">Login</span>
        </div>
      </div>
      <form>
        <div>
          <div>
            <TextInputField
              placeholder="username/ email"
              name="username"
              type="text"
              label={undefined}
              register={register('username')}
            ></TextInputField>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
