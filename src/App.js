import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Page404 from './components/404/Page404';
import Nothing from './components/Nothing/Nothing';
import QuizSingle from './components/QuizSingle/QuizSingle';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path:'/quiz/:quizId',
          loader:async ({params})=> {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<QuizSingle></QuizSingle>
        },
        {
          path:'*',
          element:<Page404></Page404>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
