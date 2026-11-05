
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

export type staffData={
  name: string;
  title: string;
  image:string;
}

export type PageData ={
  
    title: string;
   path?: string
   subTitles?: Link[]
   
}

const websiteData: {pages:PageData[], websiteTitle:string, groupData: groupData[], staffData:staffData[]}= {
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
      path:"https://substack.com/"

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
  icon: '/images/depression.png'
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
    icon: '/images/trans.png'
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
    icon: '/images/wlw.png'
}
    
  ],

  staffData :[{name: "First Last", title:"Volunteer Coordinator", image:"/images/example-staff-photo.jpg"},{name: "First Last", title:"Volunteer Coordinator",image:"/images/example-staff-photo.jpg"},{name: "First Last", title:"Volunteer Coordinator",image:"/images/example-staff-photo.jpg"},{name: "First Last", title:"Volunteer Coordinator",image:"/images/example-staff-photo.jpg"},{name: "First Last", title:"Volunteer Coordinator",image:"/images/example-staff-photo.jpg"},{name: "First Last", title:"Volunteer Coordinator",image:"/images/example-staff-photo.jpg"}],
  websiteTitle: "Seattle Queer Support Network",
};

export default websiteData;
