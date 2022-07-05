import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LoginPage /> } />
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/home" element={ <HomePage /> } />
                </Routes>
            </div>
        </Router>
    )
}