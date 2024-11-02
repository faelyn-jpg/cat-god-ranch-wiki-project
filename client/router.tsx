/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'

import Home from './components/Home'
import Layout from './components/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      createRoutesFromElements([
      <Route path="/" element={<App />} />
      ])
      <Route index element={<Home />} />
    </Route>,
  ),
)
export default router
