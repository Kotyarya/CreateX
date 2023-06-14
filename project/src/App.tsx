import React from 'react';
import "./App.scss"
import Button, {ButtonSize, ButtonVariant} from "./Components/Button/Button";

function App() {
    return (
        <div className="app">
            <Button text={"hello"}
                    variant={ButtonVariant.solid}
                    size={ButtonSize.large}
                    onClick={() => console.log("click")}
            />
        </div>
    );
}

export default App;
