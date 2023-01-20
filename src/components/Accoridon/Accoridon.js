import React from "react";
import "./Accoridon.css";
import { Row, Heading, Section } from '../../globalStyles';

function Accoridon() {
  return (
    <>
      <Section   padding="50px 70px" inverse>
      <Row   wrap="wrap">
				<Heading width="auto" inverse>
				Benefits of Partnering with Palletperday 
				</Heading>
        </Row>
        </Section>
        <div class="row mt-5 acc">
          <div class="col-md-12">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#home">
                  For Customers
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link nav-linkee"
                  data-bs-toggle="tab"
                  href="#menu1"
                >
                  For Warehouse Owners
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link nav-linkrr"
                  data-bs-toggle="tab"
                  href="#menu2"
                >
                  For Brokers
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane container active" id="home">
                <p>
                  <ul>
                    <li>Pay-Per-Usage</li>
                    <li>Security Deposit Free</li>
                    <li>No Commitment To Storage Days</li>
                    <li>Free Expansion Scope</li>
                    <li>Can Multiply And Grow At Any Time</li>
                    <li>Get Warehouses At The Click Of A Button</li>
                  </ul>
                </p>
              </div>
              <div class="tab-pane container fade" id="menu1">
                <p>
                  <li>
                    No more fear of losing a client, as you will have multiple
                    clients on the same floor.
                  </li>
                  <li>Achieve higher yields per square foot.</li>
                  <li>
                    Get more visibility and chances of new business connections.
                  </li>
                  <li>
                    Get the opportunity to move away from the broker market to
                    self-reliant marketing.
                  </li>
                  <li>
                    You can choose the price of the flexible warehouse rather
                    than getting market-driven.
                  </li>
                  <li>Worry-free warehouse operations.</li>
                  <li>
                    Online WMS ( warehouse management system) can manage your
                    inventory online.
                  </li>
                </p>
              </div>
              <div class="tab-pane container fade" id="menu2">
                <p>
                  <li>Get additional surplus income for warehouse space.</li>
                  <li>Free-of-cost marketing for your property.</li>
                  <li>Get a list of warehouses.</li>
                  <li>Separate listing of your warehouse on our portal.</li>
                  <li>New business opportunities</li>
                  <li>Lockdown-proof business model.</li>
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Accoridon;
