import "./App.css";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import IconButton from "@mui/material/IconButton";
import RatingDemo from "./components/RatingDemo";
import FormDemo from "./components/FormDemo";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <FormDemo />
      {/* <RatingDemo /> */}
      {/* <Button variant="contained" onClick={() => alert("hi")}>
        Contained
      </Button>
      <Button variant="text">Contained</Button>
      <Button variant="outlined">Contained</Button>
      <Button color="success" variant="contained" onClick={() => alert("hi")}>
        Contained
      </Button>
      <Button
        size="small"
        color="secondary"
        variant="contained"
        onClick={() => alert("hi")}
      >
        Contained
      </Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton> */}
    </>
  );
}

export default App;
