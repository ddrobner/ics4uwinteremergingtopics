

import React from 'react'
import universal, { setHasBabelPlugin } from 'C:/Users/David/AppData/Roaming/npm/node_modules/react-static/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('C:/Users/David/ics4uwinteremergingtopics/src/pages/404.js'), universalOptions)
      t_0.template = 'C:/Users/David/ics4uwinteremergingtopics/src/pages/404.js'
      
const t_1 = universal(import('C:/Users/David/ics4uwinteremergingtopics/src/pages/about.js'), universalOptions)
      t_1.template = 'C:/Users/David/ics4uwinteremergingtopics/src/pages/about.js'
      
const t_2 = universal(import('C:/Users/David/ics4uwinteremergingtopics/src/pages/examples.js'), universalOptions)
      t_2.template = 'C:/Users/David/ics4uwinteremergingtopics/src/pages/examples.js'
      
const t_3 = universal(import('C:/Users/David/ics4uwinteremergingtopics/src/pages/hist.js'), universalOptions)
      t_3.template = 'C:/Users/David/ics4uwinteremergingtopics/src/pages/hist.js'
      
const t_4 = universal(import('C:/Users/David/ics4uwinteremergingtopics/src/pages/how.js'), universalOptions)
      t_4.template = 'C:/Users/David/ics4uwinteremergingtopics/src/pages/how.js'
      
const t_5 = universal(import('C:/Users/David/ics4uwinteremergingtopics/src/pages/index.js'), universalOptions)
      t_5.template = 'C:/Users/David/ics4uwinteremergingtopics/src/pages/index.js'
      
const t_6 = universal(import('C:/Users/David/ics4uwinteremergingtopics/src/pages/whatisml.js'), universalOptions)
      t_6.template = 'C:/Users/David/ics4uwinteremergingtopics/src/pages/whatisml.js'
      

// Template Map
export default {
  'C:/Users/David/ics4uwinteremergingtopics/src/pages/404.js': t_0,
'C:/Users/David/ics4uwinteremergingtopics/src/pages/about.js': t_1,
'C:/Users/David/ics4uwinteremergingtopics/src/pages/examples.js': t_2,
'C:/Users/David/ics4uwinteremergingtopics/src/pages/hist.js': t_3,
'C:/Users/David/ics4uwinteremergingtopics/src/pages/how.js': t_4,
'C:/Users/David/ics4uwinteremergingtopics/src/pages/index.js': t_5,
'C:/Users/David/ics4uwinteremergingtopics/src/pages/whatisml.js': t_6
}
// Not Found Template
export const notFoundTemplate = "C:/Users/David/ics4uwinteremergingtopics/src/pages/404.js"

