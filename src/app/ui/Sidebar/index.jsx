import React from 'react'
import Div from '../Div'
import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import TagWidget from '../Widget/TagWidget'
import { categories, tags } from '@/assets/blogData'

export default function Sidebar() {
  
  const tagData = tags.map(d => ({
    title : d,
    url : '/'
  }))

  const categoryData = categories.map(d => ({
    title : d,
    url : '/'
  }))

  const archiveData = [
    {
      title: '2026',
      url:'/'
    },
    {
      title: '2025',
      url:'/'
    },
    {
      title: '2024',
      url:'/'
    }
  ]
  
  return (
    <>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Archives' data={archiveData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <TagWidget title='Tags' data={tagData}/>
      </Div>
    </>
  )
}
