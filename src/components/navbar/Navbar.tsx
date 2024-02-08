import {SidebarData} from "./SidebarData.tsx";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Link} from "react-router-dom";

function Navbar() {

    // Used to determine if a nav link is selected
    function isSelected(link: string){
        return window.location.pathname.toLowerCase() === link.toLowerCase()
    }

    return (
        <>
            <div className={'navbar'}>
                <ul className={'navbar-list'}>
                    {/*    Profile section */}
                    <Link to={'/profile'} className={'profile'} >
                        <div className={'expanded-profile'}>
                            <img className={'profile-pic'} src="" alt=""/>
                            <h4 className={'profile-name'}>John Doe</h4>
                            <p className={'profile-role'}>Admin</p>
                        </div>
                        <li className={'profile-icon nav-item'}>
                            <AccountBoxIcon />
                        </li>
                    </Link>

                    {SidebarData.map((val, key) => {
                        return (
                            //  Nav bar items coming from SidebarData.tsx
                            <Link to={val.link} className={'nav-item ' + (isSelected(val.link) ? 'active' : '')} key={key}>
                                <div id={'icon'}>{val.icon}</div>
                                <div id={'title'}>{val.title}</div>
                            </Link>
                        )
                    })}
                    {/*    logout button */}
                    <Link to={'/'} className={'nav-item logout'} key={SidebarData.length}>
                        <div id={'icon'}><LogoutIcon/></div>
                        <div id={'title'}>Logout</div>
                    </Link>
                </ul>
            </div>
        </>
    );
}

export default Navbar;