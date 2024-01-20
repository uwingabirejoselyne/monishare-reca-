import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const ProtectedRoutes = () => (
  <>
    <Navigation />
    <Outlet />
  </>
)

export default ProtectedRoutes
