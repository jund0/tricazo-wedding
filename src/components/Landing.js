import React, { useState, useRef } from 'react';
import useWindowDimensions from './WindowSize';
import {useTransition, animated, useChain} from "react-spring";
const Landing = () => {
  // approach using react hooks
  const { height, width } = useWindowDimensions();
  // considering
  const [show, set] = useState(false);

  const dateTransRef = useRef()
  const [showDate, setShowDate] = useState(false)
  const dateTransitions = useTransition(showDate, null, {
    ref: dateTransRef,
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
  })
  const groomTransRef = useRef()
  const [showGroom, setShowGroom] = useState(false)
  const groomTransitions = useTransition(showGroom, null, {
    ref: groomTransRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const brideTransRef = useRef()
  const [showBride, setShowBride] = useState(false)
  const brideTransitions = useTransition(showBride, null, {
    ref: brideTransRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  // const centerPieceTransRef = useRef()
  // const [showCenterPiece, setShowCenterPiece] = useState(true)
  // const centerPieceTransitions = useTransition(showCenterPiece, null, {
  //   ref: centerPieceTransRef,
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // })
  const heartTransRef = useRef()
  const [showHeart, setShowHeart] = useState(true)
  const heartTransitions = useTransition(showHeart, null, {
    ref: heartTransRef,
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const flowerTransRef = useRef()
  const [transitionFlower, setTransitionFlower] = useState(true)
  const flowerTransitions = useTransition(transitionFlower, null, {
    from: { opacity: 0, transform: 'scale(.2) rotate(0deg)', transition: 'all .4s ease-in-out' },
    enter: { opacity: 1, transform: 'scale(.8) rotate(45deg)', transition: 'all .4s ease-in-out' },
    leave: { opacity: 0 },
  })

  const announcementTransRef = useRef()
  const [showAnnouncement, setShowAnnouncement] = useState(false)
  const announcementTransitions = useTransition(showAnnouncement, null, {
    ref: announcementTransRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  useChain([dateTransRef, groomTransRef, brideTransRef, heartTransRef, flowerTransRef, announcementTransRef] , [0, 0.5, 0.5, 1, 1.5, 2])






  if (!showDate) setShowDate(true);
  if (!showGroom) setShowGroom(true);
  if (!showBride) setShowBride(true);
  //if (showCenterPiece) setShowCenterPiece(true);
  if (showHeart) setShowHeart(false);
  if (!transitionFlower) setTransitionFlower(true);
  if (!showAnnouncement) setShowAnnouncement(true);



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