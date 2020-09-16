import React from 'react'
import { StoreA, DataStore } from './store'

export default function FormA () {
  const { name, setName } = StoreA.useContainer()
  const { users } = DataStore.useContainer()
  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.currentTarget.value)} />
      <div> StoreA.name: {name} </div>
      <div> matched: {users.find(x => x.name === name)?.name} </div>
    </>
  )
}
