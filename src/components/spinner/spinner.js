import React from 'react'

import './spinner.css';


const Spinner = () => {

  return (
    <div className="lds-css ng-scope">
      <div className="lds-eclipse">
        <div></div>
      </div>
    </div>
  )
}

export default Spinner

//style={"width:100%;height:100%"}



