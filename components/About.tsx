import GitHubActivity from "./GithubActivity";
import LocationGlobe from "./LocationGlobe";

export default function About() {
  return (
    <>
      <section id="about" className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span>02</span>
                <span className="h-px w-8 bg-accent" />
                <span>A CLOSER LOOK</span>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[#09090B] sm:text-5xl lg:text-6xl">
                Who I <span className="text-accent">am.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                I’m a UI/UX designer and full-stack developer focused on turning
                ideas into thoughtful, high-quality digital products. I started
                with UI/UX design in 2024, developing a strong foundation in
                creating interfaces that are clear, intuitive, and visually
                refined. Over time, I wanted to understand what happens beyond
                the interface, which led me into full-stack development. For the
                past year, I’ve been building complete web applications across
                both frontend and backend. Today, I combine design and
                development to create products that not only look good, but work
                well. I care about clean interfaces, maintainable code,
                performance, and the details that turn a functional website into
                a polished experience.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
                From the first idea and visual direction to the final
                implementation, I enjoy working across the entire process
                designing, building, refining, and bringing digital products to
                life.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <LocationGlobe />
          </div>
        </div>
      </section>
      <GitHubActivity />
    </>
  );
}
