import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Sidebar from './components/sidebar'
import { Grid } from '@mui/material'
import Experience from './pages/Experience'
import Hobbies from './pages/Hobbies'
import Academics from './pages/Academics'
import Contact from './pages/Contact'


export default function Rotas() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Grid container md={12}>
                <Grid item md={3} className='grid-sidebar'><Sidebar /></Grid>
                <Grid item md={9} className='grid-rotas'>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/experience" element={<Experience/>}/>
                        <Route path="/academics" element={<Academics/>}/>
                        <Route path="/hobbies" element={<Hobbies/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </Grid>
            </Grid>
        </Router>
    )
}
