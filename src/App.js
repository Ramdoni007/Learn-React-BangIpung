import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Fungsional/Home";
import Beranda from "./Component/Kelas/Beranda";

function WelcomeMessage() {
    return <p > Welcome! < /p>;
}

function App() {
    return ( <
        div className = "App" >
        <
        Home / >
        <
        Beranda / >
        <
        /div>
    );
}

export default App;