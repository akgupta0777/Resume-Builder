import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { useNavigate } from 'react-router-dom';

function Option() {
    const navigate = useNavigate()
  return (
    <Box sx={{ width: '100%', marginTop: "-20px" }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("../resume/personal-infos", {state : { key: "nvheins"}})}>
              <ListItemIcon>
                <ModeEditOutlineIcon/>
              </ListItemIcon>
              <ListItemText primary="Personal Info" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("../resume/experiences", {state : { key: "jeuxied"}})}>
                <ListItemIcon>
                <ModeEditOutlineIcon/>
              </ListItemIcon>
              <ListItemText primary="Experiences" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("../resume/educations", {state : { key: "jhgjsdn"}})}>
                <ListItemIcon>
                <ModeEditOutlineIcon/>
              </ListItemIcon>
              <ListItemText primary="Educations" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("../resume/skills", {state : { key: "ewttwrh"}})}>
                <ListItemIcon>
                <ModeEditOutlineIcon/>
              </ListItemIcon>
              <ListItemText primary="Skills" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("../resume/summary")}>
                <ListItemIcon>
                <ModeEditOutlineIcon/>
              </ListItemIcon>
              <ListItemText primary="Summary" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default Option