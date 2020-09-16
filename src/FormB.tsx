import React from 'react';
import {StoreB} from "./store"

export default function(){
  const {name, setName} = StoreB.useContainer()
  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.currentTarget.value)} />
      <div> StoreB.name: {name} </div>
    </>
  )
}

