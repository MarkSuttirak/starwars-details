"use client"

import { Input } from "@/components/ui/input"
import useFetchData from "@/hooks/useFetchData"
import { DataList, ListProps } from "@/types"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const List = ({ params } : ListProps) => {

  const { info } = useFetchData(params.list)
  const infoResults = (info as any)?.results

  const [search, setSearch] = useState('')
  const searchResults = infoResults?.filter((result: any) => 
    (params.list === DataList.Films ? 
      result.title.toLowerCase().includes(search.toLowerCase()) : 
      result.name.toLowerCase().includes(search.toLowerCase()))
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div>
        <Link href="/" className="absolute flex items-center gap-x-2 cursor-pointer z-[50]">
          <ArrowLeft/>
          Back
        </Link>

        <h1 className="capitalize text-3xl font-bold text-center relative">
          {params.list}
        </h1>
      </div>

      <Input placeholder={`Search ${params.list}...`} onChange={handleSearch}/>

      {infoResults?.length > 0 ? (

        <>
          {searchResults?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults?.map((result: any, index: number) => (
                <Link href={`${params.list}/${index}`} className="card-info" key={result.title}>
                  {params.list === DataList.Films ? 
                    result.title : 
                    result.name
                  }
                </Link>
              ))}
            </div>
          ) : (
            <h1 className="text-center w-full">No search results</h1>
          )}
        </>

      ) : (

        <h1 className="text-center w-full">Loading...</h1>

      )}
    </>
  )
}

export default List