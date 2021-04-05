import React, {useEffect} from 'react';
import axios from 'axios';

const Test = props => {

    useEffect(() => {
        const func = async () =>{
            return await axios.get('http://localhost:5005/api/heroes/').then(func)
        }

        func().then()

    }, []);


    return (
        <div>

        </div>
    );
};

Test.propTypes = {

};

export default Test;
