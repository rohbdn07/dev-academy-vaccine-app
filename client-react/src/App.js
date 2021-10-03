import "./App.css";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./Redux/store";

function App() {
    return (
        <Provider store={Store}>
            <Router>
                <div className="App">
                    <HomePage />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
