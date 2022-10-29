import { Skill } from "../typings";
export const fetchSkills = async() =>{
   const baseUrl = process.env.NODE_ENV === "production" ? "https://mohitkrsuman.vercel.app" : "http://localhost:3000";
   const res = await fetch(`${baseUrl}/api/getSkills`);
   const data = await res.json();
   const skills : Skill[] = data.skills;

   return skills;
}