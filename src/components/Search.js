import * as React from 'react';
import Box from '@mui/material/Box';
import { Search, SearchIconWrapper, StyledInputBase } from './Styles';



export default function SearchAppBar(props) {
  // console.log(props.search)

  // const handleChange =(e) => {
  //    props.setSearch(e.target.value)
  // }
  return (
    <Box sx={{ flexGrow: 1, border:"5px"}}>
      
          {/* <Search>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
            value={props.search}
              placeholder="Search…"
              bgcolor=""
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </Search> */}
    </Box>
  );
}
