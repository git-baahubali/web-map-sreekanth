import React from 'react'
import styles from './Sidebar_options.module.css'
import { Link } from 'react-router-dom'

function Sidebar_option(props) {


function handleClick(){

}
  return (


<Link to ={props.address}>
<button className={styles.sidebarOption}   onClick={handleClick}>{props.option}</button> 
</Link>




  )
}

export default Sidebar_option   