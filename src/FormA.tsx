import React from 'react';
import {StoreA} from "./store"

export default function(){
  const {name, setName} = StoreA.useContainer()
  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.currentTarget.value)} />
      <div> StoreA.name: {name} </div>
    </>
  )
}
