import { TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import Grid from "./Grid";
export default function Tabs({ coins }) {
  const [value, setValue] = React.useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--black)",
  };

  return (
    <Box>
      <TabContext value={value}>
        <div sx={{ width: '100%' }}>
          <TabList
            variant="fullWidth"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab sx={style} label="grid" value="grid" />
            <Tab label="list" value="list" />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="grid">
            {coins.map((coin, key) => (
              <Grid coin={coin} key={coin.id} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value="list"></TabPanel>
      </TabContext>
    </Box>
  );
}
