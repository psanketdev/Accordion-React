import React, { useState } from 'react'
import questions from '../../react-question/question';
import AccordionDropdown from './AccordionDropdown';
import './accordion.css'

export default function Accordion() {

  const [showAns, setShowAns] = useState(0);

  const handleClick = (id) => {
    setShowAns((preValue) => preValue === id ? null : id);
  }

  return (
    <section className='acc-section'>
      <div className="container">
        <h2>React Accordion</h2>
        <ul className='acc-main'>
          {
            questions.map((question, index) => {
              const id = question.id;
              return <AccordionDropdown key={id} {...question} showAns={index === showAns} onClick={() => handleClick(index)} />
            })
          }
        </ul>
      </div>
    </section>
  )
}
