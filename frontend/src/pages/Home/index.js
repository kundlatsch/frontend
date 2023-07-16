import { React } from 'react';

import ListSelection from '../../shared_components/ListSelection';

import './styles.css';


function Home() {


  return (
    <div className="Home">
      <h1>The New York Times Best Sellers</h1>
      <h3>Journey into Literary Triumph: Unveiling the Epitome of Modern Success</h3>
      <ListSelection></ListSelection>
    </div>
  )
}

export default Home