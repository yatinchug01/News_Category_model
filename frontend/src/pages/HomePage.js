import Header from "../components/Header"
import { Link } from "react-router-dom"

function HomePage(){
    return (<div>

        <Header/>
        <h1 class="text-center mt-2">Intructions</h1>
        <div class="text-center"><p>how to use this news article model
            
        </p>
        <Link to='/classifier' type="button" class="btn btn-secondary">Classifier</Link>
        </div>
    </div>
    
    )  
}
 export default HomePage