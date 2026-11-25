import { Graph } from "schema-dts";

export type Link ={
  
    title: string;
   path: string
}

export type groupData={
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  time: string;
  icon: string;
  location: string;
  contact: string
}

export type adminData={
  name: string;
  image:string;
}

export type PageData ={
  
    title: string;
   path?: string
   subTitles?: Link[]
}

const PROD_URL= "https://seattlequeersupport.org"
export const BLOG_URL = "https://seattlequeersupport.substack.com/"

const websiteData: {pages:PageData[], websiteTitle:string, groupData: groupData[], adminData:adminData[], jsonLD: Graph}= {
  pages: [
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

    },
  ],
  groupData:[
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
    
  ],

  adminData :[{name: "Name",  image:"/images/example-staff-photo.jpg"},{name: "Name",image:"/images/example-staff-photo.jpg"},{name: "Name", image:"/images/example-staff-photo.jpg"},{name: "Name", image:"/images/example-staff-photo.jpg"},{name: "Name", image:"/images/example-staff-photo.jpg"},{name: "Name", image:"/images/example-staff-photo.jpg"}],
  websiteTitle: "Seattle Queer Support Network",
  jsonLD:{
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
};

export default websiteData;
