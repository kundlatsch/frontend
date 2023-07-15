import { React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { listsTitles } from '../../data/listsTitles';

import './styles.css';


function Home() {

  let navigate = useNavigate();

  const [list, setList] = useState("hardcover-fiction")

  const handleButtonClick = () => {
    navigate(`/list/${list}`)
  }

  return (
    <div className="Home">
      <h1>The New York Times Best Sellers</h1>
      <h3>Journey into Literary Triumph: Unveiling the Epitome of Modern Success</h3>
      <div className="SearchRow">
        <select onChange={(e) => setList(e.target.value)}>
          {
            listsTitles.map(list => {
              return <option value={list.value}>{list.display}</option>
            })
          }
        </select>
        <button onClick={handleButtonClick}>See list</button>
      </div>
      
    </div>
  )
}

export default Home