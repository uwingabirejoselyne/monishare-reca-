import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
const ProtectedRoute = () => (
  <>
    <Navigation />
    <Outlet />
  </>
)

export default ProtectedRoute
