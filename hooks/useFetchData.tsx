"use client"

import { DataType, FetchDataProps } from "@/types";
import { useState, useEffect } from "react";

const useFetchData = ({ list, page = 1 } : FetchDataProps) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch(`https://swapi.dev/api/${list}/?page=${page}`)
    .then((res) => {
      return res.json()
    })
    .then((data: any) => {
      setInfo(data)
    })
  }, [page])

  return { info, setInfo }
}

export default useFetchData