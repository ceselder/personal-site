import React from 'react'

export default function NavbarLink({ text, link }) {
  return (
    <a href={link} className="hover:cursor-pointer hover:opacity-70">
        {text}
    </a >
  )
}
