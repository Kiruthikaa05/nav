import React from 'react'

function HomeNav() {
  return (
    <div className='home-nav'>
        <div className='logo'>
            <img onClick={()=>window.scroll(0,0)} src="https://www.guardianlife.com/logo-dark.svg" alt="logo" width="160" height="31"/>
        </div>
        <div className='logo-name'>
          <h2>GCM</h2>
        </div>
    </div>
  )
}
export default HomeNav