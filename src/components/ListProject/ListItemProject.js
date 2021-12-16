import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ListItemProject(props) {
    return (
        <div>
            <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt={props.alt} src={props.imgPath}/>
                    </ListItemAvatar>
                    <ListItemText
                    primary={props.title}
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'block' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {props.data}
                        </Typography>
                        {props.text}
                        </React.Fragment>
                    }
                    />
                </ListItem>
        </div>
    )
}
