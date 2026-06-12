import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStories } from './storiesSlice'
import type { RootState, AppDispatch } from '../../store'

export default function StoriesList(){
  const dispatch = useDispatch<AppDispatch>()
  const items = useSelector((s: RootState) => s.stories.items)
  const status = useSelector((s: RootState) => s.stories.status)

  useEffect(()=>{ dispatch(fetchStories()) }, [dispatch])

  if(status === 'loading') return <div>Loading...</div>

  return (
    <div>
      {items.map((st: any) => (
        <div key={st.id} className="border p-2 mb-2">
          <h3 className="font-semibold">{st.title}</h3>
          <p className="text-sm">By {st.author}</p>
          <p className="mt-2">{st.content}</p>
        </div>
      ))}
    </div>
  )
}
