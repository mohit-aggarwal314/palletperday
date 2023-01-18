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
            Palletperday is not only on a mission to provide top-quality services to the customers and fulfill all their storage and warehousing needs seemlessly, but to get the warehouses in front of potential customers. 
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
            To become the leading warehouse operator and a single source for availing flexible warehousing services at the right price and for the right duration as and when required by businesses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
