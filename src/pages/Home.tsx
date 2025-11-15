import ContactForm from "../components/ContactForm";
import React from "react";

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Automation & Digital Transformation
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Bring your business online &{" "}
            <span className="text-accent">automate the boring stuff.</span>
          </h1>
          <p className="max-w-xl text-sm text-ink-muted">
            Whether you're just getting started or ready to scale, Assist.wtf
            helps local businesses automate repetitive work and stay ahead —{" "}
            without lifting a finger. The goal is simple:{" "}
            <span className="text-ink">give you your time back</span> so you can
            focus on what you actually care about.
          </p>
          <ul className="grid gap-2 text-sm text-ink-muted sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Small & medium businesses across the South Coast
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Automation, AI, and custom integrations
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Built to work with your current tools
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              No more missed messages or manual chaos
            </li>
          </ul>
        </div>

        {/* Hero visual */}
        <div className="accent-gradient p-[3px] rounded-2xl shadow-soft">
          <div className="bg-black/90 rounded-xl overflow-hidden">
            <img
              src="/Banner-fix.png"
              alt="Assist.wtf banner"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="grid gap-8 md:grid-cols-2">
        {/* About Assist.wtf */}
        <div className="accent-gradient p-[3px] rounded-2xl">
          <div className="card h-full rounded-[14px]">
            <h2 className="text-lg font-semibold">About Assist.wtf</h2>
            <p className="text-sm text-ink-muted">
              Assist.wtf is an online-first digital transformation agency based in
              Southampton. We help local businesses - from solo traders to growing
              teams - automate day-to-day tasks and build a real online presence.
            </p>
            <br />
            <p className="text-sm text-ink-muted">
              No more missed messages. No more hours lost replying to the same
              questions. No more forgetting to post on social media. We turn manual
              chaos into smooth, automated flows.
            </p>
            <br />
            <p className="text-sm text-ink-muted">
              With 12+ years in the games industry and 25+ years of real-world IT
              experience, We've been involved in everything from launching{" "}
              <span className="text-ink">Apex Legends</span> to deploying cloud
              server clusters across multiple continents. Now we bring that
              experience to local businesses.
            </p>
          </div>
        </div>

        {/* What we typically help with */}
        <div className="accent-gradient p-[3px] rounded-2xl">
          <div className="card h-full rounded-[14px]">
          <h2 className="text-lg font-semibold">What we typically help with
            </h2>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>• Connecting your website, forms, and inbox into one flow</li>
              <li>• Automating lead capture, follow-ups, and reminders</li>
              <li>• Social media scheduling & content repurposing</li>
              <li>• Utilising tools like n8n to build the rail-road tracks
                that allow your different bits of software to talk to eachother
              </li>
              <li>• Custom “glue” between tools like Google, Meta, Microsoft</li>
              <li>• Medium to large scale infrastructure projects</li>
              <li>• Rapid prototyping of concepts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="accent-gradient p-[3px] rounded-2xl">
          <div className="card rounded-[14px] space-y-4">
            <h2 className="text-lg font-semibold">Get in touch</h2>
            <p className="max-w-xl text-sm text-ink-muted">
              Interested in working together or want more information on what we do?
              Fill out the form and we'll get back to you.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
