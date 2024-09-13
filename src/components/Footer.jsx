import React from 'react'
import footerLogo from '/Logo/Logo-footer.svg'

function Footer() {
  return (
    <div className='footer'>
        <img src={footerLogo}  alt="Logo Kasa" />
        <h3>© 2020 Kasa. All rights reserved</h3>
    </div>
  )
}

export default Footer