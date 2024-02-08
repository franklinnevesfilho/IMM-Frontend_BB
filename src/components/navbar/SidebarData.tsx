import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ArchiveIcon from '@mui/icons-material/Archive';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export const SidebarData = [
    {
        title:"Home",
        icon: <HomeIcon/>,
        link:"/home"
    },
    {
        title:"inventory",
        icon: <ArchiveIcon/>,
        link:"/inventory"
    },
    {
        title:"Customers",
        icon: <PermContactCalendarIcon/>,
        link:"/customer"
    },
    {
        title:"Invoices",
        icon: <DescriptionIcon/>,
        link:"/invoices"
    },
    {
        title:"Sales Report",
        icon: <AssessmentIcon/>,
        link:"/sales-report"
    }

]

