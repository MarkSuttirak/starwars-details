"use client"

import { DataList } from "@/types"
import Link from "next/link"

const DataFetcher = () => {

  const dataList = [DataList.Films, DataList.People, DataList.Planets, DataList.StarShips, DataList.Species, DataList.Vehicles]

  return (
    <div className="card-list">
      {dataList.map(list => (
        <Link href={`${list}/1`} className="card-info" key={list}>
          {list}
        </Link>
      ))}
    </div>
  )
}

export default DataFetcher