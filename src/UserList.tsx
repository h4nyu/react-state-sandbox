import React from 'react';
import {DataStore, User} from "./store"

export default function(){
  const { users } = DataStore.useContainer()
  return (
    <>
      {
        users.map((u:User) => <div key={u.id}>id:{u.id} name:{u.name}</div>).toList()
      }
    </>
  )
}

