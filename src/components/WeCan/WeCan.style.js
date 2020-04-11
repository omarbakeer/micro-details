import styled from 'styled-components'

export const WeCanContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 77%;
  /* margin-left: 10px; */
`

export const WeCanItem = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 3.3%;
  margin-bottom: 10px;
`

export const WeCanTitleWithIcon = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
  height: 35px;
`

export const Title = styled.h5`
  margin: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 3px;
  text-transform: uppercase;
`

export const ImgIcon = styled.img`
  width: 25px;
  margin-right: 10px;
`

export const ContentText = styled.p`
  margin: 0;
  font-size: 15px;
`
