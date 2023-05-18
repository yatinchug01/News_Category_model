import React, { useState } from 'react';
import Header from "../components/Header"
function ClassifierPage(){



     const [url, setUrl] = useState('');
  const [predictedCategory, setPredictedCategory] = useState('');

//   useEffect(() => {
//     // Fetch history data from the backend when the component mounts
//     fetch('/api/history')
//       .then((response) => response.json())
//       .then((data) => setHistory(data));
//   }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/classifier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      const data = await response.json();
      
      // Update the predicted category state with the response data
      setPredictedCategory(data.predictedCategory);

      // Fetch updated history data from the backend
    //   fetch('/api/history')
    //     .then((response) => response.json())
    //     .then((data) => setHistory(data));
      
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
      
     </div>
}

export default ClassifierPage