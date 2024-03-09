import React, { useState } from 'react'
import questions from '../../react-question/question';
import AccordionDropdown from './AccordionDropdown';
import './accordion.css'

export default function Accordion() {

  const [ques, setQues] = useState(questions);

  return (
    <section className='acc-section'>
      <div className="container">
        <h2>React Accordion</h2>
        <ul className='acc-main'>
          {
            ques.map(question => {
              const id = question.id;
              return <AccordionDropdown key={id} {...question} />
            })
          }
        </ul>
      </div>
    </section>
  )
}
