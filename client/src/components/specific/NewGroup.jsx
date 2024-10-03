import {
  Dialog,
  DialogTitle,
  Stack
} from "@mui/material";
import { sampleUsers } from "../constants/sampleData";
import UserItem from "../shared/UserItem";

const NewGroup = () => {
  return (
    <Dialog open>
        <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
          <DialogTitle>New Group</DialogTitle>

         <Stack>
         {sampleUsers.map((i) => (
            <>
              <UserItem
                user={i}
                key={i._id}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            </>
          ))}
         </Stack>
        </Stack>
      </Dialog>
  )
}

export default NewGroup