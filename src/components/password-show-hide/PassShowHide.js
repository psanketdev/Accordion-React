import React, { useState } from 'react';
import "./PassShowHide.css";

const PassShowHide = () => {

  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="container">
        <h2>Password Show Hide</h2>

        <div className='form-group password'>
          <input type={show ? 'text' : 'password'} className='form-control' />
          <a href="#" onClick={() => setShow(!show)}>
              { show ? '😐' : '😑' }
          </a>
        </div>
      </div>
    </section>
  )
}

export default PassShowHide
