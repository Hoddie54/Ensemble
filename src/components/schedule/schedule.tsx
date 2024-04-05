import "@bitnoi.se/react-scheduler/dist/style.css"
import "./schedule.scss"
import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler"
import { useContext } from "react"
import { TimelineApiContext } from "../../context/timeline-api-context"

export default function Schedule() {
  const { loading, timeline } = useContext(TimelineApiContext)

  if (!timeline) return <></>

  const data: SchedulerData = timeline.terminals
    .map((t, i) => {
      return t.locations.map((l, j) => {
        //Make an empty row if there are no projects
        if (l.projects.length === 0)
          return {
            id: `${i}${j}-1`,
            label: {
              icon: "https://picsum.photos/24",
              title: t.reference,
              subtitle: l.type + " | " + l.reference,
            },
            data: [
              {
                id: `${i}${j}-1`,
                startDate: new Date(), //Dummy date
                endDate: new Date(), //Dummy date
                title: "",
                occupancy: 0,
              },
            ],
          }

        return l.projects.map((p, k) => {
          return {
            id: `${i}${j}${k}`,
            label: {
              icon: "https://picsum.photos/24",
              title: t.reference,
              subtitle: l.type + " | " + l.reference,
            },
            data: [
              {
                id: `${i}${j}${k}`,
                startDate: p.datetime_start,
                endDate: p.datetime_end,
                title: p.reference,
                subtitle: l.reference,
                occupancy: 0,
                bgColor: "rgb(254,165,177)",
              },
            ],
          }
        })
      })
    })
    .flat(2)

  return (
    <Scheduler
      data={data}
      isLoading={loading}
      startDate={timeline.terminals[0].locations[0].projects[0].datetime_start.toString()}
      config={{
        zoom: 1,
        filterButtonState: -1,
      }}
    />
  )
}
