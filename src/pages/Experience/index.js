import { Container } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemProject from '../../components/ListProject/ListItemProject';
import imagem from '../../utils/logo512.png'


export default function Experience() {
    return (
        <div className='page-estilo'>
            <h1>Experiência Profissional</h1>
            <Container sx={{display: 'flex', justifyContent: 'center'}}>
                <List sx={{ width: '80%', bgcolor: 'background.paper' }}>
                    <ListItemProject title='DSIN - Soluções em Informática' data='15/01/2021 - 14/04/2021' alt='teste alt' imgPath={imagem} text='Manutenção das rotinas do sistema, como as de cadastros, relatórios e impressões, tendo que utilizar as ferramentas HTML, JavaScript, Delphi, entre outros.'/>
                    <Divider variant="inset" component="li" />
                    <ListItemProject title='CCI - Centro de Comunicação Inglesa' data='26/01/2021 - 30/11/2021' alt='teste alt' imgPath={imagem} text='Monitoria para alunos que estão com dificuldades em sala de aula,sendo necessário revisar conteúdo referente a matéria lecionada pelo professor em sala de aula.'/>
                    <Divider variant="inset" component="li" />
                    <ListItemProject title='Telecontrol - TI' data='06/10/2021 - 24/10/2021' alt='teste alt' imgPath={imagem} text='Por conta do tempo, nao foi possível aprender na prática sobre o funcionamento do sistema da empresa, porém foi possível praticar os conhecimentos e skills de programação e lógica.'/>
                </List>
            </Container>
        </div>
    )
}
