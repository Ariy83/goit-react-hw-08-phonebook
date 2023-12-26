import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Header } from "./Header/Header";
import { refreshThunk } from "../redux/auth/operations";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PhoneBook from "../pages/PhoneBook/PhoneBook";
import NotFound from "../pages/NotFound";
import Contacts from "../pages/Contacts/Contacts";

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])
    
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PhoneBook />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}