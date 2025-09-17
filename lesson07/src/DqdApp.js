import React from 'react'
import DqdUseState from './components/DqdUseState'
import DqdListStudent from './components/DqdListStudent'

export default function DqdApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Đinh Quốc Đạt]</h1>
        <hr/>

        <DqdUseState />

        <DqdListStudent />
    </div>
  )
}