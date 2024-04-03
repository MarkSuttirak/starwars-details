"use client"

import { DataList } from "@/types"
import Link from "next/link"

const DataFetcher = () => {

  const dataList = [DataList.Films, DataList.People, DataList.Planets, DataList.StarShips, DataList.Species, DataList.Vehicles]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dataList.map(list => (
        <Link href={list} className="card-info">
          {list}
        </Link>
      ))}
    </div>
  )
}

export default DataFetcher