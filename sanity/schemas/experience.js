export default{
   name : 'experience',
   title : 'Experience',
   type : 'document',
   fields : [
      {
         name: "JobTitle",
         title : "JobTitle",
         type : "string",
      },
      {
         name : "companyImage",
         title : "CompanyImage",
         type : "image",
         options : {
            hotspot : true,
         }
      },
      {
         name: "company",
         title : "Company",
         type : "text",
      },
      {
         name: "dataStarted",
         title : "DateStarted",
         type : "date",
      },    
      {
         name: "dateEnded",
         title : "DateEnded",
         type : "date",
      },
      {
         name: "isCurrentWorkingHere",
         title : "IsCurrentWorkingHere",
         type : "boolean",
      },
      {
         name: "technologies",
         title : "Technologies",
         type : "array",
         of: [{type: "reference", to: {type: "skill"}}],
      },
      {
         name : "points",
         title : "Points",
         type : "array",
         of : [{type : "string"}]
      },
      {
         name : "url",
         title : "Url",
         type : "url",
      },
   ],
};