import React from 'react'

export default async function ProductPage({params}: {params: any}) {
  const myApiKey = process.env.API_TOKEN_AUTH;
  const url = `http://localhost:3000/api/products/${params.id}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${myApiKey}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const product = data.master;
  console.log('data: ', data)
  
  return (
    <div>{product.name}</div>
  )
}
