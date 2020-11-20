import React from 'react';
import useWindowDimensions from './WindowSize';
const Landing = () => {
  // approach using react hooks
  const { height, width } = useWindowDimensions();
  return (
    <section
      style={{height: height}}
      className="container"
    >
      <div id="home-landscape" >
        <div className="wrapper">
          <div className='flex-grid'>
            <div className="col-3">
              <h1>Alfredo</h1>
            </div>
            <div className="col-3">
              <div id="wedding-piece">
                <div>
                  <img src="/images/CenterHeart.png" id="center-heart" className="img-responsive" alt="Center Piece" />
                  <img src="/images/CenterFlower.png" id="center-flower" className="img-responsive" alt="Center Piece" />
                </div>
              </div>
            </div>
            <div className="col-3"><h1>Joanna</h1></div>
          </div>
          <div className='flex-grid'>
            <div className="col-1"><h2 id="wDate" style={{opacity: 1}}>April 25, 2015</h2></div>
          </div>
          <div className='flex-grid'>
            <div className="col-1"><h3 id="wMsg" style={{opacity: 1}}>ARE GETTING MARRIED</h3></div>
          </div>
        </div>
      </div>

    </section>

  );
}

export default Landing;