export default function About() {
  return (
    <div className="flex max-w-3xl flex-col gap-12">
      <header className="space-y-4 border-b border-border/50 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>

        <p className="text-xl font-semibold text-muted-foreground">
          Ahmed N. Alotaibi
        </p>
      </header>

      <div className="prose prose-lg max-w-none font-sans text-muted-foreground dark:prose-invert">
        <section className="space-y-6">
          <p>
            I am a senior student at King Fahd University of Petroleum and
            Minerals, double majoring in physics and mathematics. I am deeply
            interested in understanding nature and the principles we call the
            laws of physics.
          </p>

          <p>
            I have always been fascinated by the way physicists translate
            natural phenomena into mathematical structures. Through these
            models, they can explain what is happening, make predictions, and
            uncover patterns that are not immediately visible.
          </p>

          <p>
            However, simply reading about these ideas and being amazed by them
            has never felt sufficient. I want to become part of this vast
            scientific community and, even if only in a small way, make my own
            contribution to our understanding of nature.
          </p>
        </section>

        <hr className="my-10 border-border/50" />

        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Teaching and Learning
          </h2>

          <p>
            I have always enjoyed teaching and explaining ideas to others. I
            believe that teaching is one of the best—although certainly not the
            fastest—ways to learn.
          </p>

          <p>
            While explaining a subject, I often encounter questions or details
            that reveal gaps in what I thought I understood. Teaching forces me
            to examine ideas more carefully and develop a deeper and more
            precise understanding.
          </p>

          <p>
            Teaching physics is especially challenging because physical laws
            describe phenomena that exist in the real world. The challenge is
            not only to present the mathematics correctly, but also to explain
            the underlying ideas intuitively. This can sometimes be difficult,
            but it is always rewarding and enjoyable.
          </p>
        </section>

        <hr className="my-10 border-border/50" />

<section className="space-y-6">
  <h2 className="font-serif text-2xl font-semibold text-foreground">
    Beyond Physics
  </h2>

  <p>
    Beyond physics and mathematics, I am interested in philosophy because it
    shares a similar ambition: attempting to understand reality at a
    fundamental level. Philosophy examines questions concerning knowledge,
    ethics, existence, God, and the nature of reality.
  </p>

  <p>
    I particularly enjoy reading the works of René Descartes, Immanuel Kant,
    Friedrich Nietzsche, and Søren Kierkegaard. I do not claim to fully
    understand their ideas, but I enjoy engaging with difficult questions and
    exploring different ways of thinking.
  </p>

  <p>
    For similar reasons, I am also interested in religion and, more broadly,
    metaphysical beliefs. While physics investigates the natural world,
    metaphysics considers questions that may extend beyond it. To me, both are
    part of humanity&apos;s wider attempt to understand existence and reality.
  </p>
</section>
      </div>
    </div>
  );
}