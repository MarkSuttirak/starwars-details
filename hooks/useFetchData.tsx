"use client"

import { FetchDataProps } from "@/types";
import axios from "axios";
import useSWR from "swr";

const useFetchData = ({ list, page = 1 } : FetchDataProps) => {
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const { data: info, error, isLoading } = useSWR(`https://swapi.dev/api/${list}/?page=${page}`, fetcher)

  return { info, error, isLoading }
}

export default useFetchData