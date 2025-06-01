// App.jsx
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomeLayout from './layouts/HomeLayout'
import ContactUsPage from './pages/ContactUsPage'
import NotFoundPage from './pages/NotFoundPage'
import AboutUsPage from './pages/AboutUsPage'
import ClientsPage from './pages/ClientsPage'
import PropertiesPage from './pages/PropertiesPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<HomePage />} />
         <Route path='/contact' element={<ContactUsPage/>}/>
          <Route path='/aboutus' element={<AboutUsPage/>}/>
          <Route path='/clients' element={<ClientsPage/>}/>
           <Route path='/properties' element={<PropertiesPage/>}/>
       <Route path='*' element={<NotFoundPage/>}/>
      </Route>

    </Routes>
  )
}

export default App
