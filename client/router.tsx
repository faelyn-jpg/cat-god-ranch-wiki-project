/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import CatGod from './pages/CatGod'
import Animal from './pages/Animal'
import Item from './pages/Item'
import Ranch from './pages/Ranch'
import Home from './pages/Home'
import Layout from './pages/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/gods/:catgod" element={<CatGod />} />
      <Route path="/animals/:animal" element={<Animal />} />
      <Route path="/items/:item" element={<Item />} />
      <Route path="/ranches/:ranch" element={<Ranch />} />
    </Route>,
  ),
)
export default router
