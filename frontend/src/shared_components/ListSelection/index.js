import { React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { listsTitles } from '../../data/listsTitles';

import './styles.css';


export default function ListSelection() {
  
  let navigate = useNavigate();

  const [list, setList] = useState("hardcover-fiction")

  const handleButtonClick = () => {
    navigate(`/list/${list}`)
  }

  return <div className="ListSelection">
    <select onChange={(e) => setList(e.target.value)}>
      {
        listsTitles.map(list => {
          return <option value={list.value}>{list.display}</option>
        })
      }
    </select>
    <button onClick={handleButtonClick}>See list</button>
  </div>
}
