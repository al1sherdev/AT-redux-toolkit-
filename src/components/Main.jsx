import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ArticleService from '../service/article';
import { getArticlesStart, getArticlesSucces } from '../slice/article';
import Loader from '../ui/Loader'

const Main = () => {
  const {articles, isLoading} = useSelector(state => state.article)
  const {loggedIn, user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getArticles = async() => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticlesSucces(response.articles))
    } catch (error) {
      console.log(error)
    }
  }

  const deleteArticles = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug)
      getArticles()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      <div className="album py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles.map(item => {
            return (
              <div className="col" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" 
                      width="100%" 
                      height="225"  
                      role="img" 
                      aria-label="Placeholder: Thumbnail" 
                      preserveAspectRatio="xMidYMid slice" 
                      focusable="false"><rect width="100%" height="100%" fill="#55595c"></rect>
                    </svg>
                  <div className="card-body">
                    <p className="card-text fw-bold">{item.title}</p>
                    <p className="card-text">{item.description}</p>
                    <div className="card-footer d-flex justify-content-between align-items-center ">
                      <div className="btn-group">
                        <button 
                          type="button" 
                          className="btn btn-sm btn-outline-success"
                          onClick={() => navigate(`/article/${item.slug}`)}
                        >
                          View
                        </button>
                        { loggedIn && user.username === item.author.username && (
                          <>
                            <button 
                              onClick={() => navigate(`edit-article/${item.slug}`)} 
                              type="button" 
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={() => deleteArticles(item.slug)} 
                              type="button" 
                              className="btn btn-sm btn-outline-danger"
                            >
                              Delete
                            </button>  
                          </>
                        ) }
                      </div>
                      <small className="text-body-secondary">{item.author.username}</small>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Main