import React, { useState, useRef } from 'react';
import useWindowDimensions from '../hooks/WindowSize';
import {useTransition, animated, useChain} from "react-spring";
const Landing = () => {
  // approach using react hooks
  const { height, width } = useWindowDimensions();
  const [landingPage, setLandingPage] = useState(false);

  const dateTransRef = useRef()
  const dateTransitions = useTransition(landingPage, null, {
    ref: dateTransRef,
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
  })
  const groomTransRef = useRef()
  const groomTransitions = useTransition(landingPage, null, {
    ref: groomTransRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const brideTransRef = useRef()
  const brideTransitions = useTransition(landingPage, null, {
    ref: brideTransRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const centerPieceTransRef = useRef()
  const centerPieceTransitions = useTransition(landingPage, null, {
    ref: centerPieceTransRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  })
  const heartTransRef = useRef()
  const heartTransitions = useTransition(!landingPage, null, {
    ref: heartTransRef,
    from: { opacity: 1, transition: 'all .3s ease-in-out' },
    enter: { opacity: 1, transition: 'all .3s ease-in-out' },
    leave: { opacity: 0 },
  })
  const flowerTransRef = useRef()
  const flowerTransitions = useTransition(landingPage, null, {
    ref:flowerTransRef,
    from: { opacity: 0, transform: 'scale(.2) rotate(0deg)', transition: 'all .4s ease-in-out' },
    enter: { opacity: 1, transform: 'scale(.8) rotate(45deg)', transition: 'all .4s ease-in-out' },
    leave: { opacity: 0 },
  })

  const announcementTransRef = useRef()
  const announcementTransitions = useTransition(landingPage, null, {
    ref: announcementTransRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  useChain([dateTransRef, groomTransRef, brideTransRef, centerPieceTransRef, heartTransRef, flowerTransRef, announcementTransRef] , [0, 0.5, 0.5, 1, 1.5, 1.5, 2.5])
  if (!landingPage) setLandingPage(true);

  return (
    <section
      style={{height: height}}
      className="container"
    >
      <div id="home-landscape" >
        <div className="wrapper">
          <div className='flex-grid'>
            <div className="col-3">
              { groomTransitions.map(({ item, key, props }) =>
                item &&
                <animated.h1
                  key={key}
                  style={props}
                >Alfredo</animated.h1>
              ) }
            </div>
            <div className="col-3">
              { centerPieceTransitions.map(({ item, key, props }) =>
                item &&
                <animated.div
                  key={key}
                  style={props}
                >
                  <div id="wedding-piece">
                    { heartTransitions.map(({ item, key, props }) =>
                      item &&
                      <animated.img
                        key={key}
                        style={props}
                        src="/images/CenterHeart.png"
                        id="center-heart"
                        className="img-responsive"
                        alt="Center Piece"
                      ></animated.img>
                    ) }
                    { flowerTransitions.map(({ item, key, props }) =>
                      item &&
                      <animated.img
                        key={key}
                        style={props}
                        src="/images/CenterFlower.png"
                        id="center-flower"
                        className="img-responsive"
                        alt="Center Piece"
                      ></animated.img>
                    ) }
                  </div>
                </animated.div>
              ) }
            </div>
            <div className="col-3">
              { brideTransitions.map(({ item, key, props }) =>
                item &&
                <animated.h1
                  key={key}
                  style={props}
                >Joanna</animated.h1>
              ) }
            </div>
          </div>
          <div className='flex-grid'>
            <div className="col-1">
              { dateTransitions.map(({ item, key, props }) =>
                item &&
                <animated.h2
                  key={key}
                  style={props}
                >
                  April 25, 2015
                </animated.h2>
              ) }
            </div>
          </div>
          <div className='flex-grid'>
            <div className="col-1">
              { announcementTransitions.map(({ item, key, props }) =>
                item &&
                <animated.h3
                  key={key}
                  style={props}
                >
                  ARE GETTING MARRIED
                </animated.h3>
              ) }
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}

export default Landing;