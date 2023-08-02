import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Outlet } from 'react-router-dom'
import 'dayjs/locale/en-gb'

export default function LocProvider() {
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
            <Outlet />
        </LocalizationProvider>
    )
}