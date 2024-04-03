import { DataList } from "@/types"
import useFetchData from "./useFetchData"

interface ReadDataProps {
  list: string
  id: number
}

const useReadData = ({ list, id } : ReadDataProps) => {
  const { info } = useFetchData(list)
  const infoResults = (info as any)?.results

  const title = list === DataList.Films ? 
    infoResults?.[id].title :
    infoResults?.[id].name

  const infoList = infoResults?.find((list: any) => (
    list === DataList.Films ?
      list.title === title :
      list.name === title
  ))

  return { title, infoList }
}

export default useReadData