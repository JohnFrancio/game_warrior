import React from 'react'

function MenuIcon({ size = 24, stroke = '#FFFFFF', width, height, ...props }) {
    return (
        <svg width={size || width} height={size || height} viewBox="0 0 24 24" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H21" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 18H21" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      )
}

export default MenuIcon