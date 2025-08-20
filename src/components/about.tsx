function About() {
  return (
    <section className="flex flex-col gap-2">
      {/* Heading */}
      <h2 className=" text-foreground">About me</h2>

      {/* Content */}
      <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed text-sm">
        <p>
          I&apos;m Ahmed, a passionate Front-End Developer and UI Designer with
          a keen eye for aesthetics and functionality. I specialize in creating
          visually compelling and user-friendly digital experiences, blending
          creativity with technical expertise.
        </p>

        <p>
          I thrive on problem-solving, collaboration, and continuous learning,
          always staying updated with the latest design and development trends.
          I&apos;m also actively building personal projects to sharpen my
          skills, experiment with new technologies, and bring creative ideas to
          life.
        </p>
      </div>
    </section>
  );
}

export default About;
