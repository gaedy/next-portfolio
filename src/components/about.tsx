function About() {
    return (
        <div className=" flex flex-col justify-between py-2">
            <div className="font-medium pt-4 pb-2 ">About me</div>

            {/* <hr className="opacity-20 my-2.5"></hr> */}

            <div className="flex flex-col text-pretty">
                <div className=" text-pretty  text-[14px] text-neutral-400">
                    I&#39;m Ahmed, a passionate Front-End Developer, UI Designer with a keen
                    eye for aesthetics and functionality. I specialize in creating
                    visually compelling and user-friendly digital experiences, blending
                    creativity with technical expertise.
                </div>


                <div className=" text-base mt-2  text-[14px] text-neutral-400">
                    I thrive on problem-solving, collaboration, and continuous learning,
                    always staying updated with the latest design and development trends.
                    I&#39;m also actively building personal projects to sharpen my skills,
                    experiment with new technologies, and bring creative ideas to life.
                </div>
            </div>
        </div>
    );
}

export default About;