"use client"

import useReadData from "@/hooks/useReadData"
import { DataList, ListLayoutProps } from "@/types"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import useFetchData from "@/hooks/useFetchData"
import useSWR from "swr"
import { useCallback, useEffect, useState } from "react"
import useSlug from "@/hooks/useSlug"

const ListPage = ({ params } : ListLayoutProps) => {

  const { slugify, unslugify } = useSlug()
  const { fetcher } = useFetchData({
    list: params.list
  })

  const { title, infoList, isLoading } = useReadData({
    list: params.list,
    id: unslugify(params.id),
    page_number: params.page_number
  })

  const fetchInnerData = useCallback((lists: string | string[]) => {
    const results: string[] = []

    if (!isLoading){
      for (const url of lists){
        const { data: info } = useSWR(url, fetcher)
        results.push(info?.title || info?.name)
      }
    }

    return results.join(", ")
  }, [])

  return (
    <>
      <Link href={`/${params.list}/${params.page_number}`} className="flex items-center gap-x-2 cursor-pointer z-[50]">
        <ArrowLeft />
        Back
      </Link>

      {infoList ? (
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            {params.list === DataList.Films && (
              <div className="flex flex-col gap-y-3">
                <CardDescription>{infoList?.opening_crawl}</CardDescription>
                <CardDescription>Director: {infoList?.director}</CardDescription>
                <CardDescription>Episode ID: {infoList?.episode_id}</CardDescription>
                <CardDescription>Release Date: {infoList?.release_date}</CardDescription>
                <CardDescription>Planets: {fetchInnerData(infoList?.planets)}</CardDescription>
              </div>
            )}

            {params.list === DataList.People && (
              <div className="flex flex-col gap-y-3">
                <CardDescription>Height: {infoList?.height}</CardDescription>
                <CardDescription>Weight: {infoList?.mass}</CardDescription>
                <CardDescription>Gender: {infoList?.gender}</CardDescription>
                <CardDescription>Eye colour: {infoList?.eye_color}</CardDescription>
                <CardDescription>Hair colour: {infoList?.hair_color}</CardDescription>
                <CardDescription>Skin colour: {infoList?.skin_color}</CardDescription>
                <CardDescription>Birthyear: {infoList?.birth_year}</CardDescription>
              </div>
            )}

            {params.list === DataList.Planets && (
              <div className="flex flex-col gap-y-3">
                <CardDescription>Climate: {infoList?.climate}</CardDescription>
                <CardDescription>Diameter: {infoList?.diameter}</CardDescription>
                <CardDescription>Gravity: {infoList?.gravity}</CardDescription>
                <CardDescription>Terrain: {infoList?.terrain}</CardDescription>
                <CardDescription>Rotation period: {infoList?.rotation_period}</CardDescription>
                <CardDescription>Surface water: {infoList?.surface_water}</CardDescription>
              </div>       
            )}

            {params.list === DataList.StarShips && (
              <div className="flex flex-col gap-y-3">
                <CardDescription>Model: {infoList?.model}</CardDescription>
                <CardDescription>Starship class: {infoList?.starship_class}</CardDescription>
                <CardDescription>MGLT: {infoList?.MGLT}</CardDescription>
                <CardDescription>Consumables: {infoList?.consumables}</CardDescription>
                <CardDescription>Crew: {infoList?.crew}</CardDescription>
                <CardDescription>Max atmosphering speed: {infoList?.max_atmosphering_speed}</CardDescription>
                <CardDescription>Cost in credits: {infoList?.cost_in_credits}</CardDescription>
                <CardDescription>Manufacturer: {infoList?.manufacturer}</CardDescription>
                <CardDescription>Passengers: {infoList?.passengers}</CardDescription>
              </div>    
            )}

            {params.list === DataList.Species && (
              <div className="flex flex-col gap-y-3">
                <CardDescription>Classification: {infoList?.classification}</CardDescription>
                <CardDescription>Eye colours: {infoList?.eye_colors}</CardDescription>
                <CardDescription>Hair colours: {infoList?.hair_colors}</CardDescription>
                <CardDescription>Skin colours: {infoList?.skin_colors}</CardDescription>
                <CardDescription>Designation: {infoList?.designation}</CardDescription>
                <CardDescription>Language: {infoList?.language}</CardDescription>
                <CardDescription>Average height: {infoList?.average_height}</CardDescription>
                <CardDescription>Average lifespan: {infoList?.average_lifespan}</CardDescription>
              </div>    
            )}

            {params.list === DataList.Vehicles && (
              <div className="flex flex-col gap-y-3">
                <CardDescription>Model: {infoList?.model}</CardDescription>
                <CardDescription>Crew: {infoList?.crew}</CardDescription>
                <CardDescription>Length: {infoList?.length}</CardDescription>
                <CardDescription>Max atmosphering speed: {infoList?.max_atmosphering_speed}</CardDescription>
                <CardDescription>Cost in credits: {infoList?.cost_in_credits}</CardDescription>
                <CardDescription>Manufacturer: {infoList?.manufacturer}</CardDescription>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <h1>Loading...</h1>
      )}
    </>

  )
}

export default ListPage