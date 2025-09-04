import React from 'react'

export default function DqdFuncComp(dqdProps) {
  return (
    <div className='alert alert-danger'>
        <h2>Function Component Demo</h2>
        <h3>Welcome to, {dqdProps.name} - {dqdProps.age}</h3>
    </div>
  )
}