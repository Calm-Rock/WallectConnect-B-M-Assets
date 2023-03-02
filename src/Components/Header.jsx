import React from 'react'
import assetPath from '../paths.json'

function Header() {
  return (
    <div className='header'>
        <div className="header-elems">
        <img src={assetPath.SVG_ICON_BLACK} className='logo' alt="" />
    <p className='title'>Wallet Connect Assets</p>
        </div>
    </div>
  )
}

export default Header
