import Sidebar from "../components/Sidebar"
import Map from "../components/Map"
import User from "../components/User"

export default function AppLayout() {
    return(
        <div className="flex relative">
            <Sidebar />
            <Map/>
            <User className="absolute top-2 right-2 bg-surface-container"/>
        </div>
    )
}