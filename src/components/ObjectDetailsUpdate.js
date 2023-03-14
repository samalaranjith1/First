import React from 'react'

function ObjectDetailsUpdate() {
    const objectDetails=[{
        name:'ranjith',
        age:23,
    },
    {
        name:'ravi',
        age:25,
    }];
    
    function clickHandler() {
        
        alert("Button Clicked");}
  return (
    <div>
        <p>Ranjith samala</p>
        <div>
            {objectDetails.map(item=>
            <div>
                <p>{item.name.length>5 && item.name}</p>
                <p>{item.age>24 && item.age}</p>
            </div>           
            )}
        </div>
        <button onClick={clickHandler}>Click me </button>
    
    </div>
  )
}

export default ObjectDetailsUpdate