/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Article from './pages/Article'
import Home from './pages/Home'
import Layout from './pages/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/:category/:article" element={<Article />} />
    </Route>,
  ),
)
export default router
