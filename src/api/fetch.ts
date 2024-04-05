import { Timeline } from "../types/api"

export async function fetchTimelineData() {
  //TODO - Make sure to change this when adding production environment
  const response = await fetch("/timeline/", {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (!response.ok) {
    console.log(response)
    console.log(await response.json())
    throw new Error("Network response was not ok")
  }
  return (await response.json()) as Timeline
}
