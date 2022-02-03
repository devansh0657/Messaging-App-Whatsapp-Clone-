import Avatar from '@material-ui/core/Avatar/Avatar';
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import './Sidebar.css';
import { IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {

    return (
        <div className="sidebar d-flex flex-column">
            <div className="sidebar_header d-flex justify-content-between p-2 border-light">
                <Avatar />
                <div className="d-flex justify-content-between align-items-center">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>
            <div className="sidebar_search d-flex align-items-center p-2">
            <div className="sidebar_searchContainer d-flex align-items-center bg-white">
            <IconButton>
            <SearchOutlined />
            </IconButton>
<input placeholder="Search or start new chat" type="text" /> 
            </div>
            </div>
            <div className="sidebar_chats">
            <SidebarChat addNewChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar