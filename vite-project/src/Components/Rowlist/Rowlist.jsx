import React from 'react'
import Row from '../Rows/Row/Row';
import requests from  '../../utils/requests'
function Rowlist() {
  
  return (

    <>
        <Row 
          title = "NETFLIX ORIGINALS"
          fetchUrl = {requests.fetchNetflixOriginals}
          isLargeRow = {true}
        />
        <Row 
          title = "TRENDING NOW"
          fetchUrl = {requests.fetchTrending}
        />
        <Row 
          title = "TOP RATED"
          fetchUrl = {requests.fetchTopRated}
        />
        <Row 
          title = "ACTION MOVIES"
          fetchUrl = {requests.fetchActionMovies}
        />
        <Row 
          title = "COMEDY MOVIES"
          fetchUrl = {requests.fetchComedyMovies}
        />
        
        <Row 
          title = "ROMANCE MOVIES"
          fetchUrl = {requests.fetchRomanceMovies}
        />
        <Row 
          title = "DOCUMENTARIES"
          fetchUrl = {requests.fetchDocumentaries}
        />

    </>
  )
}

export default Rowlist