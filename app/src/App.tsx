import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Menu, { loader as menuLoader } from './features/menu/Menu'
import { Provider } from 'react-redux'
import store from './Store/store'
import { Toaster } from 'react-hot-toast'

export default function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: '/', element: <Menu />, loader: menuLoader }
      ]
    }
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  )
}
