import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getItem } from './helpers/persistance';
import AuthService from './service/auth';
import { signUserSuccess } from './slice/auth';

// components
import ArticleDetail from './components/ArticleDetail';
import Login from './components/Login';
import Main from './components/main';
import Navbar from './components/Navbar';
import Register from './components/Register';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

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

	useEffect(() => {
		const token = getItem('token')
		if (token) {
			getUser()
		}
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
          <Route path='/edit-article/:slug' element={ <EditArticle/> } />
        </Routes>
      </div>
    </div>
  )
}

export default App