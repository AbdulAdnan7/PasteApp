
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Pastes from './Components/Pastes'
import ViewPastes from './Components/ViewPastes'

function App() {

  let route = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/pastes',
      element: <div>
        <Navbar />
        <Pastes />
      </div>
    },
    {
      path: '/pastes/:id',
      element: <div>
        <Navbar />
        <ViewPastes />
      </div>
    }
  ])

  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App
