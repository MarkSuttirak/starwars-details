import { DataList } from "@/types"
import useFetchData from "./useFetchData"

interface ReadDataProps {
  list: string
  id: number
  page_number: number | string
}

const useReadData = ({ list, id, page_number } : ReadDataProps) => {
  const { info } = useFetchData({
    list: list,
    page: page_number
  })
  const infoResults = (info as any)?.results

  const title = list !== DataList.Films ? 
    infoResults?.[id]?.name :
    infoResults?.[id]?.title

  const infoList = list !== DataList.Films ? 
    infoResults?.find((list: any) => ( list.name === title )) :
    infoResults?.find((list: any) => ( list.title === title ))

  return { title, infoList }
}

export default useReadData