function About() {
  return (
    <section id="about" className="flex  flex-col gap-2">
      {/* Heading */}
      <header>
        <h2 className="font-medium ml-6">About me</h2>
      </header>

      {/* Content */}


      <div className="flex flex-col bg-card border border-border p-6 rounded-3xl  gap-2 text-muted-foreground leading-relaxed  text-sm">
        <p>
          I&apos;m Ahmed, a Front-End Developer and UI Designer passionate about
          crafting visually stunning and intuitive digital experiences. I
          combine creativity with technical expertise to deliver interfaces that
          are both beautiful and highly functional.
        </p>

        <p>
          I love problem-solving, collaborating with others, and staying on top
          of the latest design and development trends. In my spare time, I work
          on personal projects to experiment with new technologies, refine my
          skills, and bring fresh ideas to life.
        </p>
      </div>
    </section>
  );
}

export default About;
