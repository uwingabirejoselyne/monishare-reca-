import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginValues } from '../util/type'
import { loginValidationSchema } from '../util/ValidationSchema'
import TextInputField from '../components/UI/TextInputField'
import ProfileIcon from '../assets/ProfileIcon'
import KeyIcon from '../assets/KeyIcon'
import Button from '../components/UI/Button'

const Login = () => {
  const { register } = useForm<LoginValues>({ resolver: zodResolver(loginValidationSchema) })
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <p className="flex flex-col items-center pt-24 font-lora text-5xl text-white ">
        <span className="font-bold uppercase">moni</span>
        <span className="font-medium italic">share</span>
      </p>
      <div className="mx-auto flex w-full max-w-md flex-col gap-12 px-4">
        <div className="pt-8 text-center">
          <span className="font-lora text-xl font-thin text-white">Login</span>
        </div>
        <form>
          <div className="flex flex-col gap-5">
            <div>
              <TextInputField
                placeholder="username/ email"
                name="username"
                type="text"
                label={undefined}
                register={register('username')}
              >
                <ProfileIcon className="ml-8 h-5 w-5 text-gray-100" />
              </TextInputField>

              <TextInputField
                placeholder="Password"
                name="password"
                type="password"
                label={undefined}
                register={register('password')}
              >
                <KeyIcon className="ml-8 h-5 w-5 text-gray-100" />
              </TextInputField>
            </div>
          </div>
          <Button type="submit" color="filled" className="mx-auto mt-8 w-full max-w-md">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
