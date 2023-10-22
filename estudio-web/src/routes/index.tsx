import App from '../App.tsx'

import { createBrowserRouter } from 'react-router-dom'
import Servico from '../pages/Servicos/index.tsx'
import LandingPage from '../pages/LandingPage/index.tsx'
import Error404 from '../pages/Error404/index.tsx'
import Login from '../pages/Login/index.tsx'
import Sobre from '../pages/Sobre/index.tsx'
import FlashCards from '../pages/FlashCards/index.tsx'
import Podmodoro from '../pages/Pomodoro/index.tsx'
import ToDoList from '../pages/ToDoList/index.tsx'
import Cornell from '../pages/Cornell/index.tsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <LandingPage/>
      },
      {
        path: "/login",
        element: <Login />
      }, 
      {
        path: "/about",
        element: <Sobre />
      },
      {
        path: "/services",
        element: <Servico />,
      },
      // Services Path
      {
        path: "/services/flashcards",
        element: <FlashCards />
      },
      {
        path: "/services/pomodoro",
        element: <Podmodoro />
      },
      {
        path: "/services/todolist",
        element: <ToDoList />
      },
      {
        path: "/services/cornell",
        element: <Cornell />
      }
    ]
  }
])