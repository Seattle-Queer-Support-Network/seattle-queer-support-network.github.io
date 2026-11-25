import { Graph } from "schema-dts";

export type Link ={
  
    title: string;
   path: string
}

export type GroupData={
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  time: string;
  icon: string;
  location: string;
  contact: string
}

export type AdminData={
  name: string;
  image:string;
}

export type MenuData ={
  
    title: string;
   path?: string
   subTitles?: Link[]
}

const PROD_URL= "https://seattlequeersupport.org"
export const BLOG_URL = "https://seattlequeersupport.substack.com/"
export const WEBSITE_TITLE= "Queer Support Network"

 export const menuData: MenuData[]=[ 
    {
      title: "Home",
      path:"/",
    },

    {
      title: "About",
            path:"/about",

    },

    {
      title: "Programs",
      subTitles:[{title: "Event Calender", path:"/programs/event-calender"}, {title: "Current Groups", path:"/programs/current-programs"}]
    },
        {
      title: "Get Involved",
      subTitles:[{title: "Become A Group Lead", path:"/get-involved/group-lead"}, {title: "Submit An Event", path:"/get-involved/submit-event"},{title: "Volunteer", path:"/get-involved/volunteer"}, {title: "Donate", path:"/donate"}]
    },
    {
      title: "Contact",
      path:"/contact"

    },
      {
      title: "Blog",
      path:BLOG_URL

    }]


  export const  groupData: GroupData[]=[
    {title:"Group Title",
      description: "Group description goes here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Group description goes here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.",
     startDate: "October 5th, 2026",
  endDate: "January 30th, 2027",
  time: "2:00pm - 4:00pm, every 3rd Thursday of the month",
  location: "Ballard",
  contact: "steve@steve.com",
  icon: '/images/groupIcons/depression.png'
},
   {title:"Group Title",
      description: "Group description goes here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Group description goes here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.",
     startDate: "October 5th, 2026",
  endDate: "January 30th, 2027",
  time: "2:00pm - 4:00pm, every 3rd Thursday of the month",
  location: "Ballard",
  contact: "steve@steve.com",
    icon: '/images/heart.png'
},
   {title:"Group Title",
      description: "Group description goes here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Group description goes here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.",
     startDate: "October 5th, 2026",
  endDate: "January 30th, 2027",
  time: "2:00pm - 4:00pm, every 3rd Thursday of the month",
  location: "Ballard",
  contact: "steve@steve.com",
    icon: '/images/groupIcons/trans.png'
},
   {title:"Group Title",
      description: "Group description goes here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Group description goes here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.",
     startDate: "October 5th, 2026",
  endDate: "January 30th, 2027",
  time: "2:00pm - 4:00pm, every 3rd Thursday of the month",
  location: "Ballard",
  contact: "steve@steve.com",
    icon: '/images/heart.png'
},
   {title:"Group Title",
      description: "Group description goes here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Group description goes here. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.",
     startDate: "October 5th, 2026",
  endDate: "January 30th, 2027",
  time: "2:00pm - 4:00pm, every 3rd Thursday of the month",
  location: "Ballard",
  contact: "steve@steve.com",
    icon: '/images/groupIcons/wlw.png'
}
]

  export const adminData: AdminData[]= [{name: "Name",  image:"/images/example-staff-photo.jpg"},{name: "Name",image:"/images/example-staff-photo.jpg"},{name: "Name", image:"/images/example-staff-photo.jpg"},{name: "Name", image:"/images/example-staff-photo.jpg"},{name: "Name", image:"/images/example-staff-photo.jpg"},{name: "Name", image:"/images/example-staff-photo.jpg"}]

export const  jsonLD:Graph ={
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${PROD_URL}/#organization`,
      name: "Seattle Queer Support Network",
      url: PROD_URL,
      //logo: `${PROD_URL}/logo.png`,  TBD
    },
    {
      "@type": "WebSite",
      "@id": `${PROD_URL}/#website`,
      name: "Seattle Queer Support Network",
      url: PROD_URL,
     
    },
  ],
}


