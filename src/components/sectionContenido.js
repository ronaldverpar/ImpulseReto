import React from 'react';
import styled from 'styled-components'

// Se especifica el estilo de cada etiqueta creada
const SectionGroup = styled.div``

const SectionTitle = styled.h2``

const SectionInfo = styled.div``

const SectionNumber = styled.p``

const SectionData = styled.p``

const sectionContenido = props => (
    <SectionGroup>
        <SectionTitle></SectionTitle>
        <SectionInfo>
            <SectionNumber></SectionNumber>
            <SectionData></SectionData>
        </SectionInfo>
    </SectionGroup>
)

export default sectionContenido

