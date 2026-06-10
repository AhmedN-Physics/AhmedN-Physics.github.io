export default function About() {
  return (
    <div className="flex flex-col gap-12 max-w-3xl">
      <header className="space-y-4 border-b border-border/50 pb-8">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="text-xl text-muted-foreground font-medium italic">
          Ahmed Alotaibi
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert font-sans text-muted-foreground">
        <p>
          I am Ahmed Alotaibi, a senior double major in Physics and Mathematics at King Fahd University of Petroleum and Minerals. My passion lies in understanding the nature of reality via the lens of mathematical objects. This leads me to be interested mainly in theoretical physics, and in particular condensed matter physics and quantum field theory. My goal is to be part of the scientific community and be able to push the wheels of science forward, even if it is just a little bit.
        </p>
        
        <h3 className="text-foreground mt-8 mb-4 font-serif text-2xl">Teaching Philosophy</h3>
        <p>
          Teaching, for me, is more about learning than sharing. Every time I teach a topic, I learn totally new things that I missed when I was learning it. I also believe that physics should be taught in a way that makes it intuitive and not just a bunch of formulas. Everyone eventually can understand physics if it is taught in a way that makes it intuitive and not just a bunch of formulas.
        </p>

        
        
      </div>
    </div>
  );
}
