import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DqdNavBar from './components/DqdNavBar'
import DqdHome from './pages/DqdHome'
import DqdAbout from './pages/DqdAbout'
import DqdContact from './pages/DqdContact'
import DqdProduct from './pages/DqdProduct'
import DqdProductDetail from './pages/DqdProductDetail'
import DqdNotFound from './pages/DqdNotFound'
import DqdUsers from './pages/DqdUsers'
import DqdUserAdd from './pages/DqdUserAdd'
import DqdUserEdit from './pages/DqdUserEdit'
import DqdCategories from './pages/DqdCategories'

export default function DqdApp() {
  return (
    <div className='container border'>
        <h1>React Route - Demo [Đinh Quốc Đạt]</h1>
        <hr/>
        <BrowserRouter>
            <DqdNavBar />
            <Routes>
                <Route path='/' element={<DqdHome />} />
                <Route path='/about' element = {<DqdAbout />} />
                <Route path='/contact' element = {<DqdContact />} />

                {/* Nested route  */}
                <Route path='/products' element = {<DqdProduct />} >
                  <Route path=":id" element = {<DqdProductDetail />} />
                </Route>

                <Route path='/users' element = {<DqdUsers />}> </Route>
                <Route path="/users/add" element = {<DqdUserAdd />} />
                <Route path="/users/edit/:id" element = {<DqdUserEdit />} />

                <Route path='/categories' element = {<DqdCategories />}> </Route>

                {/* 404 page  */}
                <Route path='*' element = {<DqdNotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}