import React, { useState } from 'react'

export default function About(props) {

    return (
    <div>
    <div className="accordion" id="accordionExample">
        <h1 className ="my-3">About</h1>
        <div className ="accordion-item">
            <h2 className ="accordion-header" id="headingOne">
                <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionCollapseOne" aria-expanded="false" aria-controls="accordionCollapseOne" style = {props.myStyle}> 
                Accordion Item #1
                </button>
            </h2>
            <div id="accordionCollapseOne" className ="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style = {props.myStyle}>
                <div className ="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam dolore ea pariatur veniam rem voluptatibus harum magni reiciendis maiores!</div>
            </div>
        </div>
        <div className ="accordion-item">
            <h2 className ="accordion-header" id="headingTwo">
                <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionCollapseTwo" aria-expanded="false" aria-controls="accordionCollapseTwo" style = {props.myStyle}>
                Accordion Item #2
                </button>
            </h2>
            <div id="accordionCollapseTwo" className ="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style = {props.myStyle}>
                <div className ="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea nam exercitationem alias ad, repellendus eligendi ipsa rerum voluptatum aperiam.</div>
            </div>
        </div>
        <div className ="accordion-item">
            <h2 className ="accordion-header" id="headingThree">
                <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionCollapseThree" aria-expanded="false" aria-controls="accordionCollapseThree" style = {props.myStyle}>
                Accordion Item #3
                </button>
            </h2>
            <div id="accordionCollapseThree" className ="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style = {props.myStyle}>
                <div className ="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea nam exercitationem alias ad, repellendus eligendi ipsa rerum voluptatum aperiam.</div>
            </div>
        </div>
    </div>
    </div>
  )
}
