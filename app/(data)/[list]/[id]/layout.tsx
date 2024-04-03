"use client"

import useFetchData from "@/hooks/useFetchData"
import { DataType } from "@/types"

interface ListProps {
    params: {
        list: DataType,
        id: string
    },
    children: React.ReactNode
}

const ListLayout = ({ params, children } : ListProps) => {

  const { info } = useFetchData(params.list)

  return (
    <>
      {children}
    </>
  )
}

export default ListLayout