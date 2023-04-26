import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/main';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { getItem } from './helpers/persistance';
import ArticleService from './service/article';
import AuthService from './service/auth';
import { getArticlesStart, getArticlesSucces } from './slice/article';
import { signUserSuccess } from './slice/auth';

const App = () => {
  const dispatch = useDispatch()

	const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(signUserSuccess(response.user))
		} catch (error) {
			console.log(error)
		}
	}

  const getArticles = async() => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticlesSucces(response.articles))

    } catch (error) {
      console.log(error)
    }
  }

	useEffect(() => {
		const token = getItem('token')
		if (token) {
			getUser()
		}
    getArticles()
	}, [])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </div>
  )
}

export default App