import React, {memo} from 'react';
import Button from './components/Button.jsx';

const App = () => {

    const handleClick = () => {
        console.log('Click in parent');
    };

    return (
        <Button
            onClick={handleClick}
        >
            Continue
        </Button>
    );
};

export default App;
