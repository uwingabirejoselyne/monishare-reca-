import { configure } from 'axios-hooks'
import Layout from './components/Layout'
import ProtectedRoutes from './Routes/ProtectedRoutes'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in src/hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={'hhh'}>
      <Route path="user" element={<ProtectedRoutes />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Route>,
  ),
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
