
function About() {
  return (
    <section id="about" className="flex flex-col gap-2">
      {/* Heading */}
      {/* <header>
        <h2 className="font-medium">About me</h2>
      </header> */}

      {/* Content */}

      <div className="flex flex-col  rounded-3xl gap-2 text-muted-foreground leading-relaxed text-sm">
        <p>
          I&apos;m Ahmed, a{" "}
          <span className="text-foreground">Front-End Developer</span> and{" "}
          <span className="text-foreground">UI Designer</span> passionate about
          crafting visually stunning and intuitive digital experiences.
        </p>

        {/* <p>
          I love problem-solving, collaborating with others, and staying on top
          of the latest design and development trends. In my spare time, I work
          on personal projects to experiment with new technologies, refine my
          skills, and bring fresh ideas to life.
        </p> */}

        <p>
          Most of my time goes into exploring new ideas, learning, and building
          small projects that help me grow as a designer and developer.
        </p>

        {/* <span className=" transition-all duration-300 border text-sm hover:border-dashed  rounded-md cursor-pointer w-fit p-1 hover:text-ring flex items-center gap-1">
          <NotepadText size={16} />
          CV
        </span> */}
      </div>
    </section>
  );
}

export default About;
