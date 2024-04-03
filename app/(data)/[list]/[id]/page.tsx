"use client"

import useReadData from "@/hooks/useReadData"
import { ListLayoutProps } from "@/types"

const ListPage = ({ params } : ListLayoutProps) => {

  const { title, infoList } = useReadData({
    list: params.list,
    id: params.id
  })

  console.log(infoList)

  return (
    <h1 className="capitalize text-3xl font-bold text-center relative">{title}</h1>
  )
}

export default ListPage