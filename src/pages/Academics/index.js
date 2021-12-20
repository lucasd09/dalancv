import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemProject from '../../components/ListProject/ListItemProject';
import imagem from '../../utils/logo512.png'
import { Container } from '@mui/material'

export default function Academics() {
    return (
        <div className='page-estilo'>
            <h1>Acadêmico</h1>
            <Container sx={{display: 'flex', justifyContent: 'center'}}>
                <List sx={{ width: '80%', bgcolor: 'background.paper'}}>
                    <ListItemProject title='Ensino Médio' data='26/01/2017 - 02/12/2019' alt='teste alt' imgPath={imagem} text='Escola SESI-SP 267.'/>
                    <Divider variant="inset" component="li" />
                    <ListItemProject title='Curso de Inglês' data='26/03/2019 - 08/12/2021' alt='teste alt' imgPath={imagem} text='CCI - Centro de Comunicação Inglesa.'/>
                    <Divider variant="inset" component="li" />
                    <ListItemProject title='UNIVEM - Marília' data='08/02/2020 - 02/12/2024' alt='teste alt' imgPath={imagem} text='Centro Universitário Eurípedes de Marília.'/>
                    <Divider variant="inset" component="li" />
                    <h2>Cursos Adicionais</h2>
                    <ListItemProject title='Programação em Python do básico ao avançado' data='20/08/2021' alt='teste alt' imgPath={imagem} text='Duração: 63,5 horas no total'/>
                    
                </List>
            </Container>
        </div>
    )
}
