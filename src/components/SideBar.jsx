import React from 'react'
import Sidebar_option from './Sidebar_option'
import styles from './SideBar.module.css'
function SideBar(props) {
var links = props.links
console.log(props.links)
  return (
    <div className='block'>
          <div className={styles.heading}>Warehouse Management</div>
          <div className={styles.sidebar} >
          {links.map((x)=><Sidebar_option  option={x.name}  address= {x.url}/>)}
          
          </div>

        </div>
  )
}



export default SideBar