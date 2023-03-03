import React, { useContext } from 'react'
import { Global } from '../../App'
import "./service.css"


const Service = ({first}) => {
const Glob = useContext(Global)

  return (
    <div style={first ? Glob.obj.blackColor : Glob.obj.whiteColor} className="service">
        
        <h1>{Glob.obj.service.h1}</h1>
        <p>{Glob.obj.service.p}</p>
    </div>
  )
}

export default Service