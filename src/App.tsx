import { configure } from 'axios-hooks'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in src/hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

export default function App() {
  return <></>
}
