"use client";
import React, { useEffect } from 'react';

const FetchData = () => {
  useEffect(() => {
    const getData = async () => {
      const api = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await api.json();
      console.log(result);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Fetch Data</h1>
    </div>
  );
};

export default FetchData;
