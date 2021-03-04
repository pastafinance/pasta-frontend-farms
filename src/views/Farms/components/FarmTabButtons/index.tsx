import React, {useState } from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Text, Toggle } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'


const FarmTabButtons = ({ stakedOnly, setStakedOnly}) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  const [index, setIndex] = useState(0);
  
  const handleClick = (newIndex) => setIndex(newIndex);
  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
        <Text> {TranslateString(699, 'Staked only')}</Text>
      </ToggleWrapper>
      <ButtonMenu activeIndex={index} size="sm" variant="subtle" onClick={handleClick}>
        <ButtonMenuItem as={Link} to={`${url}`}>
        <Text>All</Text>
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/pasta`}>
        <Text>PASTA</Text>
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/busd`}>
        <Text>BUSD</Text>
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/bnb`}>
        <Text>BNB</Text>
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`