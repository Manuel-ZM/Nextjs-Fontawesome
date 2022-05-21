## Getting Started

First, install the icons you're going to use

```bash
npm i --save @fortawesome/fontawesome-svg-core
# Free icons styles
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/react-fontawesome@latest
    
# you can also use yarn
```

## Adding manually

Once this step is done you can copy the files hosted here and add them to your `pages folder`

If you want to change them manually in the _app.js add

```bash
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
```

now to use them in pages add to the page `/pages` in this example `index.js`

```bash
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
```

and then to use them just add them to the `page body` like this

```bash
      <FontAwesomeIcon icon={faDisplay} style={{ fontSize: 100, color: "blue" }} />
      <FontAwesomeIcon icon={faDiscord} style={{ fontSize: 100, color: "black" }} />
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 100, color: "black" }} />
      ```
      
     
