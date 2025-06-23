// App.jsx
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomeLayout from './layouts/HomeLayout'
import ContactUsPage from './pages/ContactUsPage'
import NotFoundPage from './pages/NotFoundPage'
import AboutUsPage from './pages/AboutUsPage'
import ClientsPage from './pages/ClientsPage'
import PropertiesPage from './pages/PropertiesPage'
import ContactFormPopup from './components/ContactFormPopup'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<HomePage />} />
         <Route path='/contact' element={<ContactUsPage/>}/>
          <Route path='/aboutus' element={<AboutUsPage/>}/>
          <Route path='/clients' element={<ClientsPage/>}/>
           <Route path='/properties' element={<PropertiesPage/>}/>
           <Route path='/contactform' element={<ContactFormPopup/>}/>
       <Route path='*' element={<NotFoundPage/>}/>
      </Route>

    </Routes>
  )
}

export default App
