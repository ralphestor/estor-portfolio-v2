import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
    return ( 
        <main className="flex flex-col justify-start items-center w-full h-full min-h-[100vh] bg-[#0F3B46]">
            <PageHeader title="PROJECTS" />
            <article className="w-[90%] md:w-[80%] xl:w-[900px] py-[100px] flex flex-col gap-[150px]">
                <ProjectCard
                    title="Shinefy Main Website"
                    paragraph="The company did a complete rebrand from &quot;Shine Ranker&quot; to &quot;Shinefy&quot; and decided to do a makeover on their website. I was the main Frontend Developer for this job and collaborated with UI/UX Designer and Project Manager. Converted Figma Design to a well-written code with NextJS and Tailwind."
                    imageUrl="/projects/Shinefy.png"
                    tags={["NextJS","Tailwind"]}
                    liveLink="https://shinefy.com/"
                    githubLink=""
                    youtubeLink=""
                    flexDirection="flex-row"
                />
                <ProjectCard
                    title="Shine Ranker Video Generator"
                    paragraph="This Video Generator AI tool converts a simple text input from the user to a video with caption and narration. I was responsible for the frontend development of this AI Tool. I collaborated with the project manager, UI/UX designer, and backend developers to provide the best result. We used Midjourney to process the user input and convert it into a video."
                    imageUrl="/projects/ShineRanker.png"
                    tags={["React", "Tailwind", "Axios", "AI"]}
                    youtubeLink="https://www.youtube.com/watch?v=9q9B57j8Gbs&t=406s"
                    githubLink=""
                    liveLink=""
                    flexDirection="flex-row-reverse"
                />
                <ProjectCard
                    title="Bawafa Afghan Dating Service (In Progress)"
                    paragraph="In this project, the goal is to create a dating web application for Afghans. I'm the sole developer in this project and it is still in progress. Frontend Development is in polishing stage then I will proceed to backend development to make everything functional. The website is mobile responsive and it can be translated from english to persian."
                    imageUrl="/projects/Bawafa.png"
                    tags={["NextJS","TypeScript", "Tailwind"]}
                    liveLink="https://bawafa.vercel.app/"
                    githubLink=""
                    youtubeLink=""
                    flexDirection="flex-row"
                />
                <ProjectCard
                    title="Eye Test Game"
                    paragraph="This game is an eye test game where the player must find the different color among the group. Every correct answer will gain 1 point and every mistake will cost 1 life. The player has 5 lives and maximum of 60 seconds to play. The game will be over if there are no more lives or if the time runs out. I created my own JavaScript code for this game."
                    imageUrl="/projects/EyeTestGame.png"
                    tags={["HTML","CSS", "JavaScript"]}
                    liveLink="https://eye-test-game.vercel.app/"
                    githubLink="https://github.com/ralphestor/eye-test-game"
                    youtubeLink=""
                    flexDirection="flex-row-reverse"
                />
                <ProjectCard
                    title="Todo List App"
                    paragraph="A simple todo list project that can create, update, delete todo items. The data is stored in the Local Storage to save the data. This is a React App that uses hooks for state management. Material UI is utilized for pre-styled react components. A class-based component version of this project is also created which is found in classTodo branch of the Github repository."
                    imageUrl="/projects/ToDoList.png"
                    tags={["React","MaterialUI"]}
                    liveLink="https://todoapp-ralphestor.netlify.app/"
                    flexDirection="flex-row"
                    githubLink="https://github.com/ralphestor/todolist"
                    youtubeLink=""
                />
            </article>
            
        </main>
     );
}
 
export default Projects;