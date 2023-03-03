import React, { useContext } from 'react'
import { Global } from '../../App'
import "./contact.css"

const Contact = ({first}) => {
const Glob = useContext(Global)
const contact = Glob.obj.contact
console.log(contact.data);
  return (
    <div style={first ? Glob.obj.blackColor : Glob.obj.whiteColor} className='contact'>
    <h1>{contact.data}</h1>
</div>
  )
}

export default Contact