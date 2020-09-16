import React, {useState} from "react";
import { createContainer } from "unstated-next"
import { Map } from "immutable";

function useStoreA() {
  let [name, setName] = useState("")
  return { name, setName }
}

export const StoreA = createContainer(useStoreA);


function useStoreB() {
  let [name, setName] = useState("")
  return { name, setName }
}

export const StoreB = createContainer(useStoreB);

export type User = {
  id:string,
  name: string
}
export type Users = Map<string, User>;
function useDataStore() {
  let [users, setUsers] = useState<Users>(Map())
  const fetch = () => {
    setUsers(Map({
      "a": {
        id:"a",
        name:"aa,"
      },
      "b":{
        id:"b",
        name:"bb"
      },
    }))
  }
  return { users }
}
export const DataStore = createContainer(useDataStore);
