"use client"

import useFetchData from "@/hooks/useFetchData"

interface ListProps {
    params: {
        list: string,
        id: string
    }
}

interface ListLayoutProps {
  params: ListProps
  children: React.ReactNode
}

const ListLayout = ({ params, children } : ListLayoutProps) => {

  const { info } = useFetchData(params.list)

  return (
    <>
      {children}
    </>
  )
}

export default ListLayout