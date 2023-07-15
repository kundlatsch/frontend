import React, { useState, useEffect } from 'react';

import './styles.css';

export default function Book({ data, amazon_url, rank }) {
    console.log(amazon_url)
    return <div className="Book">
        #{rank}
        <h1>{data.title}</h1>
        <h2>{data.contributor}</h2>
        <p>{data.description}</p>
        <div className="bottom"><a href={amazon_url} target="_blank">Buy on amazon</a></div>
    </div>
}