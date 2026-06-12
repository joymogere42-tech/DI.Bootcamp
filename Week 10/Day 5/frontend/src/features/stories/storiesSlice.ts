import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchStories = createAsyncThunk('stories/fetch', async () => {
  const res = await axios.get('/api/stories')
  return res.data
})

const slice = createSlice({
  name: 'stories',
  initialState: { items: [], status: 'idle' as string },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStories.pending, (s) => { s.status = 'loading' })
    builder.addCase(fetchStories.fulfilled, (s, a) => { s.status = 'idle'; s.items = a.payload })
  }
})

export default slice.reducer
