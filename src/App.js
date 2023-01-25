import TopInfo from "./TopInfo";
import ContactInfo from "./ContactInfo";
import Description from "./Description";

function App() {
    return (
        <div className="app">
            <div className="background">
                <TopInfo />
                <ContactInfo />
                <Description />
            </div>
        </div>
    );
}

export default App;
