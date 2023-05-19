import React, { useState } from 'react';
import Header from "../components/Header"
function ClassifierPage(){



const [url, setUrl] = useState('');
const [predictedCategory, setPredictedCategory] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestBody = {
      url: url
     };

    try {
      const response = await fetch('/classifier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requestBody }),
      });
      
      const data = await response.json();
      setPredictedCategory(data.predictedCategory);
      
    } catch (error) {
      console.error('Error:', error);
    }


        try {
      const response = await fetch('/classifier', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requestBody }),
      });
      
      const data2 = await response.json();
      
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
    return <div>
        <Header></Header>
       <form class="text-center mt-5"onSubmit={handleSubmit}>
         <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
         <button type="submit">Scrape Article</button>
       </form>
      
       <div class="text-center">
         <h6 class="mt-2">Predicted Category:</h6>
         <p>{predictedCategory}</p>
       </div>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">URL</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody>
    for i in data.value:
    <tr>
      <th scope="row">{data2.url}</th>
      <td>{data2.predictedCategory}</td>
    </tr>
  </tbody>
</table>
     </div>
}

export default ClassifierPage