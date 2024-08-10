import React from 'react'
import * as S from './styled';
import { ContentPages } from '#widgets/content-pages/ContentPages';
import { Header } from '#widgets/header';
import { Sidebar } from '#widgets/sidebar';


export const MainPage = () => {
  return (
    <S.Wrapper>
      <Sidebar/>
      <S.Content>
        <Header/>
        <ContentPages/>
      </S.Content>
    </S.Wrapper>
  )
}
