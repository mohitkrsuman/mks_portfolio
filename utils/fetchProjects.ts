import { Project } from "../typings";

export const fetchProjects = async() =>{
   const baseUrl = process.env.NODE_ENV === "production" ? "https://mohitkrsuman.vercel.app" : "http://localhost:3000";
   const res = await fetch(`${baseUrl}/api/getProjects`);
   const data = await res.json();
   const projects : Project[] = data.projects;

   return projects;
}