import Header from "../components/Header"
import Main from "../components/Main"
function App() {

    return (
        <div className="page__container">
            <div className="header">
                <Header />
            </div>
            <div className="main__container">
                <Main />
            </div>
        </div>
    )
}

export default App
