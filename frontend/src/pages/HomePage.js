import Header from "../components/Header"
import { Link } from "react-router-dom"

function HomePage(){
    return (<div>

        <Header/>
        <h1 class="text-center mt-2">Intructions</h1>
        <div class="text-center"><h3>how to use this news article model
            <p>Go to the Classifier button below and You will see a empty blank box, With a predict button. go to any  news article in google and paste the link here. this will predict the correct Category from the link. by scraping the words from website and using model to find the correct result.
                SO what are you still waiting?? 
                tap on the Classifier button now. GOOO
                  </p>
        </h3>
        <Link to='/classifier' type="button" class="btn btn-secondary">Classifier</Link>
        </div>
    </div>
    
    )  
}
 export default HomePage