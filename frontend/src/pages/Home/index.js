import { React, useEffect, useState} from 'react';
import { listsTitles } from '../../data/listsTitles';

import './styles.css';


function Home() {

  const [list, setList] = useState("hardcover-fiction")

  const handleButtonClick = () => {
    // TODO: add navigation passing list value as param
    console.log(list)
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