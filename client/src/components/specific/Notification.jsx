import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import { memo } from "react";
import { sampleNotifications } from "../constants/sampleData";

const Notifications = () => {

const friendRequestHandler = ({_id, accept}) => {

};

  return (
    <>
      <Dialog open>
        <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
          <DialogTitle>Notifications</DialogTitle>

          {sampleNotifications.length > 0 ? (
            sampleNotifications.map(({ sender, _id }) => (
              <NotificationItem
                key={_id}
                sender={sender}
                _id={_id}
                handler={friendRequestHandler}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Notifications</Typography>
          )}
        </Stack>
      </Dialog>
    </>
  );
};

// eslint-disable-next-line react/display-name
const NotificationItem = memo(({ sender, _id, handler }) => {

  const { name, avatar } = sender;
  return (
    <>
      <ListItem>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
        >
          <Avatar src={avatar} />
          <Typography
            variant="body1"
            sx={{
              flexGrow: 1,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {`${name} sent you a friend request`}
          </Typography>

<Stack direction={{
  xs: "column",
  sm: "row",
}}>
  <Button onClick={()=> handler({_id, accept: true })}>Accept</Button>
  <Button color="error" onClick={()=> handler({_id, accept:false})}>Reject</Button>
</Stack>
        </Stack>
      </ListItem>
    </>
  );
});
export default Notifications;
