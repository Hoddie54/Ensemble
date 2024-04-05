//TODO Change to CamelCase and parse

export type Timeline = {
  dates: Date[]
  periods: Period[]
  terminals: Terminal[]
}

export type Period = {
  reference: string
  time_start: Date
  duration: string
}

export type Terminal = {
  reference: string
  locations: Location[]
}

export type Location = {
  reference: string
  type: string
  projects: Project[]
}

export type Project = {
  reference: string
  datetime_start: Date
  datetime_end: Date
}
