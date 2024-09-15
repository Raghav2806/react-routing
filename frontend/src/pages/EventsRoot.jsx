import { Outlet } from "react-router-dom"
import EventsNavigation from "../components/EventsNavigation"

export default function EventsRoot  () {
  return (
    <>
    <EventsNavigation/>
    <main>
      <Outlet/>
    </main>
    </>
  )
}
