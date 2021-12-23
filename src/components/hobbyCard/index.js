import { Container, ButtonBase, Avatar } from '@mui/material'
import React from 'react'

export default function CardHobbies(props) {
    return (
        <Container sx={{display: 'flex', bgcolor: '#F7F7F7', borderRadius: '7px'}}>
            <ButtonBase sx={{ width: 140, height: 140 }}>
                <Avatar srcSet={props.img} variant='rounded' sx={{ width: 100, height: 100 }}/>
            </ButtonBase>
            <Container sx={{display: "flex", textAlign: 'start', alignItems: 'center'}}>
                <Container sx={{}}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Container>
            </Container>
        </Container>
    )
}
