/* 
icons dir
/node_modules/@fortawesome/free-solid-svg-icons/index.d.ts 
*/

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import the main lib
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need [solid icons]
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faDisplay,
  faMagnifyingGlass,
  faHouse,
  faPeopleGroup,
  faFileContract,
  faScroll,
  faMapLocationDot,
  faUserGear
} from "@fortawesome/free-solid-svg-icons";
// how to import svgs
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    
      <div>

      <FontAwesomeIcon icon={faDisplay} style={{ fontSize: 100, color: "blue" }} />
      <FontAwesomeIcon icon={faDiscord} style={{ fontSize: 100, color: "black" }} />
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 100, color: "black" }} />
      <h1 className="text-2xl font-bold underline flex">
        Hello world! ops
      </h1>

    </div>
  )
}

