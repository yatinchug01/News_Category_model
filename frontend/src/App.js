import React, { useState, useEffect } from 'react';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClassifierPage from './pages/ClassifierPage';


const router=createBrowserRouter([
  {path:'/', element:<HomePage/>},
  {path:'/classifier',element:<ClassifierPage/>}
])

function App() {
  // const [url, setUrl] = useState('');
  // const [predictedCategory, setPredictedCategory] = useState('');
  // const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   // Fetch history data from the backend when the component mounts
  //   fetch('/api/history')
  //     .then((response) => response.json())
  //     .then((data) => setHistory(data));
  // }, []);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch('/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ url }),
  //     });
      
  //     const data = await response.json();
      
  //     // Update the predicted category state with the response data
  //     setPredictedCategory(data.predictedCategory);

  //     // Fetch updated history data from the backend
  //     fetch('/api/history')
  //       .then((response) => response.json())
  //       .then((data) => setHistory(data));
      
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return <RouterProvider router={router}/>
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
  //       <button type="submit">Scrape Article</button>
  //     </form>
      
  //     <div>
  //       <h2>Predicted Category:</h2>
  //       <p>{predictedCategory}</p>
  //     </div>
      
  //     <div>
  //       <h2>History:</h2>
  //       <ul>
  //         {history.map((item) => (
  //           <li key={item.id}>
  //             <p>URL: {item.url}</p>
  //             <p>Predicted Category: {item.predictedCategory}</p>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );
}

export default App;
