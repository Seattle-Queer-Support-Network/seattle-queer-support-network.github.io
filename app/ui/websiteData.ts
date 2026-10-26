
export type Link ={
  
    title: string;
   path: string
}


export type PageData ={
  
    title: string;
   path?: string
   subTitles?: Link[]
}

const websiteData: {pages:PageData[], websiteTitle:string}= {
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
      subTitles:[{title: "Event Calander", path:"/programs/event-calander"}, {title: "Current Groups", path:"/programs/current-programs"}]
    },
        {
      title: "Get Involved",
      subTitles:[{title: "Become A Group Lead", path:"/get-involved/group-lead"}, {title: "Submit an event", path:"/get-involved/submit-event"},{title: "Volunteer", path:"/get-involved/volunteer"}]
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

  websiteTitle: "Seattle Queer Support Network",
};

export default websiteData;
