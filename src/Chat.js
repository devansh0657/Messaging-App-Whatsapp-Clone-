import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from 'react';
import "./Chat.css";

function handleSubmit(event) {
    event.preventDefault();
  }
function Chat() {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => { 
        setItems((oldItems) => {
          return [...oldItems, inputList];
        });
        setInputList('');    
    };
    return (
        <div className="chat d-flex flex-column">

        <div className="chat_header d-flex align-items-center p-3">
<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
       
       <div className="chat_headerInfo">
           <h3 className="font-weight-bold">Room name</h3>
           <p className="text-secondary">Last seen at ...</p>
       </div>
       <div className="d-flex justify-content-between">
           <IconButton>
               <SearchOutlined />
           </IconButton>
           <IconButton>
               <AttachFile />
           </IconButton>
           <IconButton>
               <MoreVert />
           </IconButton>
       </div>
        </div>
 <div className="chat_body p-4">
   { Items.map( (itemval) => {
return <><li type="none" className={`chat_message ${true && 
    "chat_reciever"} `}>{itemval}</li></>
    })}

 </div>

 <div className="chat_footer d-flex justify-content-between align-items-center border-top border-white">
 <IconButton>
<InsertEmoticon />
</IconButton>
<form onSubmit={handleSubmit} className="d-flex">
    <input  type="text" placeholder="Type a message" value={inputList} onChange={itemEvent}/>
    <button className="d-none" onClick={listOfItems}>Send a message</button>
</form>
<IconButton>
<Mic />
</IconButton>
 </div>           
        </div>
    )
}

export default Chat
