import { configure } from 'axios-hooks'
import Layout from './components/Layout'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in src/hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})
const router = createBrowserRouter(
  createRoutesFromElements(<Route element={<Layout />} errorElement={'hhh'}></Route>),
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
