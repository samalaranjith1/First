import React from 'react';

function Hero() {
  return (
    <div className='hero-container'>
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
    </div>
  )
}

function Turn() {
  return (
    <div className='turn-container'>
       hi
    </div>
  )
}

function Continue() {
  return (
    <div>Continue</div>
  )
}

function Footer() {
    return (
      <div>
        <p>All images are from
            <a href="https://www.wiki.com">Wiki</a>
        and are in the public domain
        </p>
        </div>
    )
  }



export default function AuthorQuiz() {
    return (
    <div className='container-main'>
        <Hero />
        <Turn />
        <Continue />
        <Footer />    
    </div>
  )
}