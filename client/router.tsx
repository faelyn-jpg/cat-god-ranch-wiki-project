/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import CatGod from './components/CatGod'
import Animal from './components/Animal'
import Item from './components/Item'
import Ranch from './components/Ranch'
import Home from './components/Home'
import Layout from './components/Layout'

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
