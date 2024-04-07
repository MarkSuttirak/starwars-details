import { DataList, ReadDataProps } from "@/types"
import useFetchData from "./useFetchData"

const useReadData = ({ list, id, page_number } : ReadDataProps) => {
  const { info, isLoading } = useFetchData({
    list: list,
    page: page_number
  })
  const infoResults = (info as any)?.results

  const title = list !== DataList.Films ? 
    infoResults?.find((result: any) => result?.name?.toLowerCase() === id.toLowerCase())?.name :
    infoResults?.find((result: any) => result?.title?.toLowerCase() === id.toLowerCase())?.title

  const infoList = list !== DataList.Films ? 
    infoResults?.find((list: any) => ( list.name === title )) :
    infoResults?.find((list: any) => ( list.title === title ))

  return { title, infoList, isLoading }
}

export default useReadData