import React from 'react';
import '../styles/homepage.css'
function HomepageHero(props) {
    return (
        <div className='homepage-hero'>
            <div className='hero-container'>
                <div className='hero-heading-container'>
                    <h1 className='primary-heading hero-heading'>SpaceHub</h1>
                    <div className='heading-orbiter orbiter-1'>
                        <div className='box'></div>
                    </div>
                    <div className='heading-orbiter orbiter-2'>
                        <div className=' box box-2'></div>

                    </div>
                    <div className='heading-orbiter orbiter-3'>
                        <div className=' box box-3'></div>

                    </div>
                    <div className='heading-orbiter orbiter-4'>
                        <div className=' box box-4'></div>

                    </div>
                </div>
                <div className='hero-textbox'>
                    <p className='hero-text'>Embark on a cosmic voyage with us as we unveil the secrets of our solar system's planets. Explore their wonders, from fiery Mercury to icy Neptune, and become an interstellar explorer!</p>
                    <a className='btn hero-btn'>Learn More</a>
                </div>
            </div>

        </div>
    );
}

export default HomepageHero;