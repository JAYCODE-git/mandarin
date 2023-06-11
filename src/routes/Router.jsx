import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { Splash } from '../pages/splash/Splash';
import { Login } from '../pages/login/Login';
import Profile from '../pages/profile/Profile';
import { ProfileUpload } from '../pages/profile/profileUpload/ProfileUpload';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/*" element={<Outlet />} >
        <Route path=":account" element={<Profile />} />
        <Route path=":account/upload" element={<ProfileUpload />} />
      </Route>
    </Routes >
  )
}
