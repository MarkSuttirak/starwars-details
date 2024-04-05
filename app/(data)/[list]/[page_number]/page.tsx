"use client"

import { Input } from "@/components/ui/input"
import useFetchData from "@/hooks/useFetchData"
import { DataList, ListProps } from "@/types"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const List = ({ params } : ListProps) => {

  const { info, error, isLoading, fetcher } = useFetchData({
    list: params.list,
    page: params.page_number
  })

  const infoResults = (info as any)?.results

  const numPage: number = parseInt(params.page_number as string)

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

      {isLoading && <h1>Loading...</h1>}
      {error && <h1 className="text-red-500">There was an error loading the info, please try again.</h1>}

      <div className="card-list">
        {searchResults?.map((result: any, index: number) => (
          <Link href={`/${params.list}/${params.page_number}/${index}`} className="card-info" key={result.title}>
            {params.list === DataList.Films ?
              result.title : 
              result.name
            }
          </Link>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          {(info as any)?.previous !== null && (
            <PaginationItem>
              <PaginationPrevious href={`/${params.list}/${numPage - 1}`} />
            </PaginationItem>
          )}
          {(info as any)?.next !== null && (
            <PaginationItem>
              <PaginationNext href={`/${params.list}/${numPage + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default List