import React from 'react';

const LandingContent = () => {
  function getScrollOffsets(w) {
    // Use the specified window or the current window if no argument
    w = w || window;
    // This works for all browsers except IE versions 8 and before
    if (w.pageXOffset != null) return {
      x: w.pageXOffset,
      y: w.pageYOffset
    };
    // For IE (or any browser) in Standards mode
    var d = w.document;
    if (document.compatMode == "CSS1Compat") {
      return {
        x: d.documentElement.scrollLeft,
        y: d.documentElement.scrollTop
      };
    }
    // For browsers in Quirks mode
    return {
      x: d.body.scrollLeft,
      y: d.body.scrollTop
    };
  }

  return (
    <div id="main-content">
      <section id="intro">
        <h1 className="text-center">Our Story</h1>
        <h2 className="text-center">in our own words</h2>
      </section>
      <section id="story1" className="section-content">
        <div className="succulent-flower">
          <img className="hidden-xs flower" src="/images/s1-5.png" alt="succulent" />
          <img className="hidden-xs flower" src="/images/s1-3.png" alt="succulent" />
          <img className="hidden-xs flower" src="/images/s1-2.png" alt="succulent" />
        </div>
        <h2 className="text-center">How We Met</h2>
        <div className="container-fluid">
          <h3>By Joanna</h3>
          <p>
            Our love is a love that dates back years and years ago. We first met as kids in Ms. Shiroke’s 5th grade
            class at Trabuco Mesa Elementary School. We were an unlikely pair, as Alfredo was loud and rambunctious,
            while I was quiet and studious. However, we gravitated toward each other as we soon realized we were the
            only two Filipino students in the class. We bonded over recess, playing handball and sitting on the rainbow
            rings. We then attended the same junior high school and high school. We were in the same high school history
            class for three years in a row. It was not until our senior year of high school in which we both realized
            that our years of close friendship had turned into something more. We finally started dating just before our
            senior prom and the rest they say is history. Nearly 9 ½ years later, Alfredo and I are engaged and cannot
            wait to spend the rest of our lives together.
          </p>
        </div>
      </section>
      <section id="story2" className="section-content">
        <div className="succulent-flower">
          <img src="/images/s15.png" className="flower"  alt="succulent" />
          <img src="/images/s13.png" className="flower" alt="succulent" />
          <img src="/images/s12.png" className="flower" alt="succulent" />
        </div>
        <h2 className="text-center">How We Got Engaged</h2>
        <div className="container-fluid">
          <h3>By Alfredo</h3>
          <p>
            After much personal reflection, I made the decision to propose to Joanna. At the time, we had been together
            for nearly 8 ½ years. I believed she deserved more than a simple question on a bended knee so I started to
            work on an elaborate proposal. Months before I proposed, I asked her parents and family for their blessing
            to propose to Joanna, which they joyfully gave.
          </p>
          <p>
            In November 2013, I informed Joanna that I planned to celebrate my 27th birthday at a nightclub in Los
            Angeles with our close friends. If you know Joanna, she has no interest in nightclubs. In fact, she despises
            them. The event was an opportunity to distract Joanna so that she would focus on preparing for my birthday.
          </p>
          <p>
            On November 29, 2013, the day of the event, Joanna had just finished working three night shifts in a row,
            which made it difficult for her to wake up on time that day. The day started off with some difficulty as
            Joanna was really irritable. She had overslept, skipped lunch, and couldn’t find anything to wear. However,
            after a few hours we eventually arrived at the event’s location in Los Angeles. Joanna thought I had rented
            a table in the nightclub for the evening. However, I actually reserved a penthouse. As we entered the
            penthouse, she responded with confusion and reluctance under the assumption we were in another guest’s
            suite. She immediately requested that we leave. As she paced around the room in both panic and confusion, I
            dropped down on one knee and popped the question. Joanna was caught completely off-guard and was speechless.
            Luckily, after the initial shock wore off she said, “Yes!” Later that evening, our friends came by the
            penthouse still under the impression that we were celebrating my birthday. Little did they know that the
            birthday party had become an engagement party.
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingContent;