import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardProject(props) {
    return (
        <div>
            <Card sx={{ maxWidth: props.wdt }}>
                <CardActionArea href={props.link} target="_blank" rel="noreferrer">
                    <CardMedia
                    component="img"
                    height="160"
                    image={props.imgPath}
                    alt="foto"
                    />
                    <CardContent className='card-estilo'>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.text}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
