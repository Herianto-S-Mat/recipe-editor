import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import {Link} from 'react-router-dom'

const style = css`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 2em;
  a {
    // opacity: .8;
    background-color: #61dafb;
    padding: 1em;
    margin: 1em;
    border-radius: 2em;
    text-decoration: none;
  }
  a:hover{
    opacity: .9;
  }
  a:active{
    opacity: 1;
  }
`
const NavButton:React.FC<{to:string, title:string}> = ({to, title}) => {
  return (
    <Typography variant="button" css={style}>
      <Link to={to}>{title}</Link>
    </Typography>
  )
}

export default NavButton