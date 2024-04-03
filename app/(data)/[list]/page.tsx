"use client"

import useFetchData from "@/hooks/useFetchData"
import { DataList, ListProps } from "@/types"
import Link from "next/link"

const List = ({ params } : ListProps) => {

  const { info } = useFetchData(params.list)
  const infoResults = (info as any)?.results

  return (
    <>
      <h1 className="capitalize text-3xl font-bold text-center">{params.list}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {infoResults?.length > 0 ? (
          <>
            {infoResults?.map((result: any) => (
              <Link href={result} className="card-info">
                {params.list === DataList.Films ? 
                  result.title : 
                  result.name
                }
              </Link>
            ))}
          </>
        ) : (
          <h1 className="text-center">Loading...</h1>
        )}
      </div>
    </>
  )
}

export default List