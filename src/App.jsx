import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getItem } from './helpers/persistance';
import ArticleService from './service/article';
import AuthService from './service/auth';
import { signUserSuccess } from './slice/auth';
import { getArticlesStart, getArticlesSucces } from './slice/article';

// components
import ArticleDetail from './components/ArticleDetail';
import Login from './components/Login';
import Main from './components/main';
import Navbar from './components/Navbar';
import Register from './components/Register';
import CreateArticle from './components/CreateArticle';

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
      <div className='container'>
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/article/:slug' element={ <ArticleDetail /> } />
          <Route path='/create-article' element={ <CreateArticle /> } />
        </Routes>
      </div>
    </div>
  )
}

export default App