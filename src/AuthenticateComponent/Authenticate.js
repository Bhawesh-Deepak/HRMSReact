import React, { useState } from 'react';

const Authenticate = (props) => {
    const [isLogged, setIsLogged] = useState(props.logName);
    return (
        <div className="content-wrapper" style={{ 'minheight': 870 }} >
            <section className='content'>
                Authenticate {isLogged}
                <button onClick={() => props.logName('Surbhi')}>Change</button>
            </section>

        </div >
    );
}

export default Authenticate;
