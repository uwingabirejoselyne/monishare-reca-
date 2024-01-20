import useGetUserName from '../hooks/useGetUserName'
import { useReadLocalStorage } from 'usehooks-ts'

const LandingPage = () => {
  const userId = useReadLocalStorage('userId')
  const userName = useGetUserName(Number(userId))

  return (
    <div>
      <p className="flex flex-col items-center pt-24 font-lora text-5xl text-white">
        <span className="font-bold uppercase">MONI</span>
        <span className="font-medium italic">Share</span>
      </p>
      <p>
        <span>Start Sharing Your Monis{userName}</span>
        <span></span>
      </p>
    </div>
  )
}

export default LandingPage
