import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
    return ( 
        <main className="flex flex-col justify-start items-center w-full h-full min-h-[100vh] bg-[#0F3B46]">
            <PageHeader title="PROJECTS" />
            <article className="w-[90%] md:w-[80%] xl:w-[900px] py-[100px] flex flex-col gap-20">
                <ProjectCard
                    title="Shinefy Main Website"
                    paragraph="Officia veniam laboris ut elit incididunt anim dolor officia sit duis. Id sint consectetur minim fugiat laboris occaecat nulla exercitation tempor. Exercitation nulla duis deserunt voluptate est amet duis amet fugiat minim quis tempor commodo. Et commodo in velit minim cupidatat aute ea exercitation. Eu ea nulla quis do fugiat non fugiat aliqua ipsum culpa incididunt cillum cillum. Nisi aute eu sit dolor nisi nulla proident irure."
                    imageUrl="/projects/Shinefy.png"
                    tags={["NextJS","Tailwind"]}
                    liveLink="https://shinefy.com/"
                    githubLink=""
                    youtubeLink=""
                    flexDirection="flex-row"
                />
                <ProjectCard
                    title="Bawafa Afghan Dating Service (In Progress)"
                    paragraph="Officia veniam laboris ut elit incididunt anim dolor officia sit duis. Id sint consectetur minim fugiat laboris occaecat nulla exercitation tempor. Exercitation nulla duis deserunt voluptate est amet duis amet fugiat minim quis tempor commodo. Et commodo in velit minim cupidatat aute ea exercitation. Eu ea nulla quis do fugiat non fugiat aliqua ipsum culpa incididunt cillum cillum. Nisi aute eu sit dolor nisi nulla proident irure."
                    imageUrl="/projects/Bawafa.png"
                    tags={["NextJS","TypeScript", "Tailwind"]}
                    liveLink="https://bawafa.vercel.app/"
                    githubLink=""
                    youtubeLink=""
                    flexDirection="flex-row-reverse"
                />
                <ProjectCard
                    title="Shine Ranker Video Generator"
                    paragraph="Officia veniam laboris ut elit incididunt anim dolor officia sit duis. Id sint consectetur minim fugiat laboris occaecat nulla exercitation tempor. Exercitation nulla duis deserunt voluptate est amet duis amet fugiat minim quis tempor commodo. Et commodo in velit minim cupidatat aute ea exercitation. Eu ea nulla quis do fugiat non fugiat aliqua ipsum culpa incididunt cillum cillum. Nisi aute eu sit dolor nisi nulla proident irure."
                    imageUrl="/projects/ShineRanker.png"
                    tags={["React", "Tailwind", "Axios"]}
                    youtubeLink="https://www.youtube.com/watch?v=9q9B57j8Gbs&t=406s"
                    githubLink=""
                    liveLink=""
                    flexDirection="flex-row"
                />
                <ProjectCard
                    title="Eye Test Game"
                    paragraph="Officia veniam laboris ut elit incididunt anim dolor officia sit duis. Id sint consectetur minim fugiat laboris occaecat nulla exercitation tempor. Exercitation nulla duis deserunt voluptate est amet duis amet fugiat minim quis tempor commodo. Et commodo in velit minim cupidatat aute ea exercitation. Eu ea nulla quis do fugiat non fugiat aliqua ipsum culpa incididunt cillum cillum. Nisi aute eu sit dolor nisi nulla proident irure."
                    imageUrl="/projects/EyeTestGame.png"
                    tags={["HTML","CSS", "JavaScript"]}
                    liveLink="https://eye-test-game.vercel.app/"
                    githubLink=""
                    youtubeLink=""
                    flexDirection="flex-row-reverse"
                />
                <ProjectCard
                    title="Todo List App"
                    paragraph="A simple todo list project that can create, update, delete todo items. The data is stored in the Local Storage to save the data. This is a React App that uses hooks for state management. Material UI is utilized for pre-styled react components. A class-based component version of this project is also created which is found in classTodo branch of the Github repository."
                    imageUrl="/projects/ToDoList.png"
                    tags={["React","MaterialUI"]}
                    liveLink="https://shinefy.com/"
                    flexDirection="flex-row"
                    githubLink="https://github.com/ralphestor/todolist"
                    youtubeLink=""
                />
            </article>
            
        </main>
     );
}
 
export default Projects;