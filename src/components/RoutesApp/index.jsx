import React from 'react'
import { Route, Routes, HashRouter, BrowserRouter } from 'react-router-dom'

import Home from '../../containers/Home'
import Register from '../../containers/Register'
import Login from '../../containers/Login'
import { LoadingProvider } from '../../context/LoadingContext'
import { AuthProvider } from '../../context/AuthContext'
import ProtectedRoute from '../ProtectedRoute'
import Dashboard from '../../containers/Dashboard'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LoadingProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </LoadingProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default RoutesApp
