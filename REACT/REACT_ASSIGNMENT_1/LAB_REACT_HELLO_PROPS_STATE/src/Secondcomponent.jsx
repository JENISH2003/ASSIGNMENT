import React from 'react'

const Secondcomponent = () => {

    const welcome = "Welcome To JSX"
    const topic = "JSX (JavaScript XML)";
    const description = "JSX allows us to write HTML elements inside JavaScript and place them in the DOM without using functions like createElement.";
  return (
<>
<h1>{welcome}</h1>
<p>{topic} makes React code easier to understand and write. {description}</p>
</>  )
}

export default Secondcomponent