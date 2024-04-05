import { createContext, ReactNode, useEffect, useState } from "react"
import { fetchTimelineData } from "../api/fetch"
import { Timeline } from "../types/api"

interface TimelineApiContextType {
  timeline: Timeline | null
  loading: boolean
}

export const TimelineApiContext = createContext<TimelineApiContextType>({
  timeline: null,
  loading: true,
})

type ContextProviderProps = {
  children?: ReactNode
}

export const TimelineApiContextProvider = ({
  children,
}: ContextProviderProps) => {
  const [data, setData] = useState<TimelineApiContextType>({
    timeline: null,
    loading: true,
  })

  useEffect(() => {
    async function getData() {
      if (!data.loading) return
      const loadedData = await fetchTimelineData()
      setData({ timeline: loadedData, loading: false })
    }
    getData()
  }, [setData, data.loading])

  return (
    <TimelineApiContext.Provider value={{ ...data }}>
      {children}
    </TimelineApiContext.Provider>
  )
}
