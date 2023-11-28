import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { useState } from "react";
export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(50);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const changeVolume = (e, newVal) => {
    setVolume(newVal);
  };
  return (
    <div>
      <h1>Name is: {name}</h1>
      <TextField
        id="outlined-basic"
        placeholder="Caim"
        label="Puppy name"
        variant="outlined"
        value={name}
        onChange={updateName}
      />
      <h2>Volume: {volume} </h2>
      <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
    </div>
  );
}
