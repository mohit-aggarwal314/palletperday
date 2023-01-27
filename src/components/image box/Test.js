import React from "react";
import "../image box/Test.css";
import aim from "../../images/target.png"
import mission from "../../images/flag.png"
import vision from "../../images/eye.png"

function Test() {
  return (
    <>
      <div class="cardss">
        <div class="card">
          <div class="imgbox">
            <img className="im" src={aim} />
          </div>

          <h2 className="amv">Aim</h2>
          <div class="content">
            <p>
            To develop a marketplace that offers a flexible warehouse support system that allows our clients to concentrate on their key competencies.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
            <img className="im" src={mission}/>
          </div>
          <h2 className="amv">Mission</h2>
          <div class="content">
            <p>
            We in Palletperday strive to provide our customers with best-in-class warehousing services, and to help them find the right warehouse online at an affordable price and fulfill their storage needs seamlessly.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
            <img className="im" src={vision} />
          </div>
          <h2 className="amv">Vision</h2>
          <div class="content">
            <p>
            Our vision is to be the leading warehouse operator and a single source for availing flexible warehousing services for your all warehousing needs to ensure complete transparency, accountability alongside giving comfort to our warehouse owners on a global level.  
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
