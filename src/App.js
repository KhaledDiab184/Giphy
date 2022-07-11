import React, {useEffect, useState} from 'react'
import './App.css';
import Search from './components/Search';
// import axios from 'axios';
import { Box } from '@mui/system';
import CRUDRequest from './API';
import Cards from './components/Cards';
import { SearchIconWrapper, StyledInputBase } from './components/Styles';

// https://api.giphy.com/v1/gifs/search?api_key=mr4LUvhEU2DwJk5gzkgac9aInYyM8Ars&q=cats&limit=50&offset=0&rating=g&lang=en





function App() {

const [giphy, setGiphy] = useState([])
const[search, setSearch] = useState('')



const dataList = giphy.map((item) => {
  // console.log(item.images.original.url)
  return (<Cards item={item} key={item.id} />)
})

useEffect(() => {
  CRUDRequest.get(`search?api_key=mr4LUvhEU2DwJk5gzkgac9aInYyM8Ars&q=${search || 'computer'}&limit=50&offset=0&rating=g&lang=en`).then((response) => {
    // console.log(response.data.data)
    setGiphy(response.data.data)
  }).catch((error) => {
    console.log(error);
  })
}, [search])





  return (
    <div className="App">

      <Box sx={{  minHeight: '100vh', paddingBottom:5 }} >
      <Box sx={{ flexGrow: 1, border:"5px"}}>
        <input type='text' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
      </Box>
        {dataList}
        </Box>
    </div>
  );
}

export default App;
