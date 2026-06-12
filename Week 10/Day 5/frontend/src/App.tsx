import React from 'react'
import StoriesList from './features/stories/StoriesList'

export default function App(){
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Collaborative Stories</h1>
      <StoriesList />
    </div>
  )
}
