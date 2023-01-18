import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { Fragment, useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import './CounterStyles.css'

function Counter({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <Fragment>
      <section className="counter">
        <div className="counter-row">
          <div className="counter-column">
            <strong data-number="400">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={400}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={
                        (isVisible => {
                          if(isVisible) {
                            setViewPortEntered(true);
                          }
                        })
                      }
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              Warehouses
            </span>
          </div>
          <div className="counter-column">
            <strong data-number="305">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={305}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={
                        (isVisible => {
                          if(isVisible) {
                            setViewPortEntered(true);
                          }
                        })
                      }
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              Listings
            </span>
          </div>
          <div className="counter-column">
            <strong data-number="305">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={305}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={
                        (isVisible => {
                          if(isVisible) {
                            setViewPortEntered(true);
                          }
                        })
                      }
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              Clients
            </span>
          </div>
          <div className="counter-column">
            <strong data-number="305">
              <CountUp {...rest} start={viewPortEntered ? null : 0} end={305}>
                {({ countUpRef }) => {
                  return (
                    <ReactVisibilitySensor
                      active={!viewPortEntered}
                      onChange={
                        (isVisible => {
                          if(isVisible) {
                            setViewPortEntered(true);
                          }
                        })
                      }
                      delayedCall
                    >
                      <span className="number" ref={countUpRef} />
                    </ReactVisibilitySensor>
                  );
                }}
              </CountUp>
            </strong>
            <span>
              Locations
            </span>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Counter;
