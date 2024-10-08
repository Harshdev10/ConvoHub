import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";
const AppLayout = () => (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const params = useParams();
    const chatId = params.chaId;
    return (
      <>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            xs={4}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
            <ChatList 
            chats={sampleChats}
            chatId={chatId}
            newMessagesAlert={[
              {
                chatId,
                count:4,
              },
              {
                chatId,
                count:4,
              },
            ]}
              onlineUsers={["1", "2"]}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} >
          <WrappedComponent {...props} />
          </Grid>
          <Grid item md={4} lg= {3} 
             sx={{
              display: { xs: "none", md: "block" },
              padding:"2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          height={"100%"} >
            <Profile />
          </Grid>
        </Grid>


      </>
    );
  };
};

export default AppLayout;
