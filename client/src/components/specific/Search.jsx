import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import { TextField } from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import UserItem from "../shared/UserItem";
import { SampleUsers } from "../constants/sampleData";
import { useState } from "react";


const Search = () => {
  const search = useInputValidation("");
  const addFriendHandler = (id) => {
    console.log(id);
  }
  const isLoadingSendFriendRequest = false;

  const [users, setUsers] = useState(SampleUsers);
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}> All Contacts</DialogTitle>
        <TextField
          label="Search"
          variant="outlined"
          value={search.value}
          onChange={search.changeHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((i) => (
            <>
              <UserItem
                user={i}
                key={i._id}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            </>
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
