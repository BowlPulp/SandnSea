// App.jsx
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomeLayout from './layouts/HomeLayout'
import ContactUsPage from './pages/ContactUsPage'
import NotFoundPage from './pages/NotFoundPage'
import AboutUsPage from './pages/AboutUsPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<HomePage />} />
         <Route path='/contact' element={<ContactUsPage/>}/>
          <Route path='/aboutus' element={<AboutUsPage/>}/>
       <Route path='*' element={<NotFoundPage/>}/>
      </Route>

    </Routes>
  )
}

export default App
