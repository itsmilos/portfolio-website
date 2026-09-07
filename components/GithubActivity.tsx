import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const weeks = 52;
const days = 7;

// Vizuelni nivo aktivnosti.
// Kasnije ovo možemo zamijeniti stvarnim GitHub podacima.
const contributionLevels = Array.from({ length: weeks * days }, (_, index) => {
  // više aktivnosti u novijem periodu
  const recent = index > 280;
  const random = Math.random();

  if (recent) {
    if (random > 0.78) return 4;
    if (random > 0.58) return 3;
    if (random > 0.35) return 2;
    if (random > 0.18) return 1;
  }

  if (random > 0.9) return 3;
  if (random > 0.72) return 2;
  if (random > 0.5) return 1;

  return 0;
});

const levels = [
  "bg-black/[0.045]",
  "bg-accent/20",
  "bg-accent/40",
  "bg-accent/65",
  "bg-accent",
];

const months = [
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
];

const repositories = [
  "itsmilos/SentinelGear-tacticalstore",
  "itsmilos/lume-studio-app",
  "itsmilos/yelpcamp",
];

export default function GitHubActivity() {
  return (
    <section className="bg-white pb-24 sm:pb-32 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col gap-6 border-t border-black/[0.08] pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#09090B] sm:text-4xl">
              Consistent development.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-black/45 sm:text-base">
              A look at my recent coding activity, repositories, and ongoing
              development work.
            </p>
          </div>

          <a
            href="https://github.com/itsmilos"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-black/55 transition-colors duration-300 hover:text-accent"
          >
            <FaGithub className="h-4 w-4" />

            <span>View GitHub</span>

            <ArrowUpRight className="h-4 w-4 text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </a>
        </div>

        {/* Main GitHub card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-black/[0.08] bg-[#FAFAFA]">
          {/* Contribution graph */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Top row */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xl font-semibold tracking-tight text-[#09090B] sm:text-2xl">
                  214 contributions in the last year
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden text-xs text-black/35 sm:block">
                  Contribution activity
                </span>

                <span className="h-1 w-1 rounded-full bg-accent" />

                <span className="text-xs font-medium text-black/45">2026</span>
              </div>
            </div>

            {/* Graph */}
            <div className="mt-8 overflow-x-auto pb-2">
              <div className="min-w-[760px]">
                {/* Month labels */}
                <div className="ml-8 flex justify-between pr-1 text-[10px] font-medium text-black/35">
                  {months.map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>

                <div className="mt-3 flex">
                  {/* Day labels */}
                  <div className="mr-3 flex w-5 flex-col justify-between py-[1px] text-[10px] font-medium text-black/35">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>

                  {/* Contribution grid */}
                  <div className="flex flex-1 justify-between gap-[3px]">
                    {Array.from({ length: weeks }).map((_, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {Array.from({ length: days }).map((_, dayIndex) => {
                          const level =
                            contributionLevels[weekIndex * days + dayIndex];

                          return (
                            <div
                              key={dayIndex}
                              className={`h-[11px] w-[11px] rounded-[3px] transition-transform duration-200 hover:scale-125 ${levels[level]}`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-5 flex items-center justify-between pl-8">
                  <span className="text-[10px] text-black/30">
                    Learn how contributions are counted
                  </span>

                  <div className="flex items-center gap-2 text-[10px] text-black/30">
                    <span>Less</span>

                    <div className="flex gap-1">
                      {levels.map((level) => (
                        <span
                          key={level}
                          className={`h-[11px] w-[11px] rounded-[3px] ${level}`}
                        />
                      ))}
                    </div>

                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity overview */}
          <div className="border-t border-black/[0.08]">
            <div className="grid lg:grid-cols-[1fr_1px_0.9fr]">
              {/* Repositories */}
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                  Activity overview
                </p>

                <div className="mt-7 flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-black/[0.08] bg-white">
                    <FaGithub className="h-4 w-4 text-black/60" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#09090B]">
                      Contributed to
                    </p>

                    <div className="mt-2 space-y-1">
                      {repositories.map((repo) => (
                        <a
                          key={repo}
                          href={`https://github.com/${repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm font-medium text-accent transition-opacity hover:opacity-70"
                        >
                          {repo}
                        </a>
                      ))}

                      <p className="pt-1 text-sm text-black/40">
                        and 9 other repositories
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden bg-black/[0.08] lg:block" />

              {/* Activity breakdown */}
              <div className="relative p-6 sm:p-8 lg:p-10">
                <p className="text-center text-xs font-medium text-black/35">
                  Contribution breakdown
                </p>

                <div className="relative mx-auto mt-8 h-40 max-w-sm">
                  {/* Vertical */}
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/10" />

                  {/* Horizontal */}
                  <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-black/10" />

                  {/* Accent vertical */}
                  <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-accent" />

                  {/* Accent horizontal */}
                  <div className="absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-accent" />

                  {/* Point */}
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-2 ring-accent" />

                  {/* Labels */}
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-5 text-[10px] text-black/40">
                    Code review
                  </span>

                  <span className="absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 text-[10px] text-black/40">
                    Issues
                  </span>

                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-5 text-[10px] text-black/40">
                    Pull requests
                  </span>

                  <span className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 text-[10px] text-black/40">
                    <span className="block text-center text-black/60">
                      100%
                    </span>
                    Commits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="mt-6 flex flex-col gap-3 text-[10px] uppercase tracking-[0.16em] text-black/25 sm:flex-row sm:items-center sm:justify-between">
          <span>Open source · Development · Continuous learning</span>

          <span>
            <span className="text-accent">github.com/itsmilos</span>
          </span>
        </div>
      </div>
    </section>
  );
}
