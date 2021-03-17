import { ChatEngine } from "react-chat-engine";
import "./App.scss";
import ChatFeed from "./Components/ChatFeed/ChatFeed";
import LoginForm from "./Components/LoginForm/LoginForm"


const  App = () => {
  if(!localStorage.getItem("username")) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="985d98c2-482b-4c7c-9269-4039770aeed3"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
