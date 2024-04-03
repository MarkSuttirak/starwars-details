"use client"

import { DataType } from "@/types";
import { useState, useEffect } from "react";

const useFetchData = (list: DataType) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch(`https://swapi.dev/api/${list}`)
    .then((res) => {
      return res.json()
    })
    .then((data: any) => {
      setInfo(data)
    })
  }, [])

  return { info, setInfo }
}

export default useFetchData