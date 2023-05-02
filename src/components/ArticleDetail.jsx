import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ArticleService from '../service/article'
import { getArticleDetailFailed, getArticleDetailStart, getArticleDetailSuccess } from '../slice/article'

const ArticleDetail = () => {
    const {slug} = useParams()
    const dispatch = useDispatch(state = state.article)

    const getArticleDetail = async () => {
        dispatch(getArticleDetailStart())
        try {
            const response = await ArticleService.getArticleDetail(slug)
            dispatch(getArticleDetailSuccess(response.article))
        } catch (error) {
            getArticleDetailFailed()
        }
    }

    useEffect(() => {
        getArticleDetail()
    }, [slug])

  return (
    <div>
        ID
    </div>
  )
}

export default ArticleDetail
