import React from 'react';

function PlanetsList(props) {
    return (
        <section className='planets-list-section'>
            <div className='planets-container'>
                <div className='planets-row'>
                    <a href='/' className='planet-heading'>Jupiter</a>
                    <a href='/' className='planet-heading'>Earth</a>
                    <a href='/' className='planet-heading'>Saturn</a>
                </div>
                <div className='planets-row'>
                    <a href='/' className='planet-heading'>Mars</a>
                    <a href='/' className='planet-heading'>Sun</a>
                    <a href='/' className='planet-heading'>Venus</a>
                </div>
                <div className='planets-row'>
                    <a href='/' className='planet-heading'>Neptune</a>
                    <a href='/' className='planet-heading'>Mercury</a>
                    <a href='/' className='planet-heading'>Uranus</a>
                </div>
            </div>

        </section>
    );
}

export default PlanetsList;