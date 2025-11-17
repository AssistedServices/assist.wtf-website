import React, { useEffect, useState } from "react";

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

const INCLUDED_URLS: string[] = [
  "https://mich43l.medium.com/country-roads-catering-case-study-0177cf730099",
  "https://mich43l.medium.com/champions-mma-case-study-aea8f924a7be",
  "https://mich43l.medium.com/fixmymot-uk-case-study-2c46f1508e8d",
  "https://mich43l.medium.com/ncccs-holbury-case-study-8e9d4cee8ec6",
  "https://mich43l.medium.com/nissan-skyline-r34-window-fix-11c753630935",
];

// Derive slugs from the whitelisted URLs
const INCLUDED_SLUGS = INCLUDED_URLS.map((url) => {
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    return parts[parts.length - 1];
  } catch {
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  }
});

const MEDIUM_FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mich43l";

// --- Helpers ---

function extractExcerpt(html: string, maxLength = 300): string {
  // Remove all image tags entirely
  const withoutImages = html.replace(/<img[^>]*>/gi, "");

  // Extract the first paragraph only
  const match = withoutImages.match(/<p>(.*?)<\/p>/i);
  const firstParagraph = match ? match[1] : withoutImages;

  // Strip any remaining HTML tags
  const textOnly = firstParagraph.replace(/<\/?[^>]+(>|$)/g, "");

  // Trim long text
  if (textOnly.length > maxLength) {
    return textOnly.substring(0, maxLength).trim() + "…";
  }

  return textOnly.trim();
}

// Get the src of the first <img> in the HTML, if any
function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^">]+)"/i);
  return match ? match[1] : null;
}

function CaseStudies() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(MEDIUM_FEED_URL);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();
        const items = (data.items || []) as any[];

        const mapped: MediumPost[] = items
          .filter((item) => {
            const link = String(item.link || "");
            let slug: string;

            try {
              const u = new URL(link);
              const parts = u.pathname.split("/").filter(Boolean);
              slug = parts[parts.length - 1];
            } catch {
              const parts = link.split("/").filter(Boolean);
              slug = parts[parts.length - 1];
            }

            return INCLUDED_SLUGS.includes(slug);
          })
          .map((item) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description,
          }));

        setPosts(mapped);
      } catch (err: any) {
        console.error(err);
        setError("Could not load case study posts right now.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold">Case Studies</h1>
        <p className="text-sm text-ink-muted">
        Real projects where automation made a meaningful difference.
        From side experiments to full business launches. 
        Each case study walks through the tools, flows and impact.
        </p>
      </section>

      {loading && (
        <p className="text-sm text-ink-muted">Loading posts from Medium…</p>
      )}

      {error && (
        <p className="text-sm text-red-400">
          {error} You can still{" "}
          <a
            href="https://medium.com/@mich43l"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline"
          >
            read everything on Medium
          </a>
          .
        </p>
      )}

      {!loading && !error && (
        <section className="space-y-4">
          {posts.map((post) => {
            const thumbnail = extractFirstImage(post.description);

            return (
              <div key={post.link} className="accent-gradient p-[3px] rounded-2xl">
                <article className="card rounded-[14px] p-6">

                  <a href={post.link} target="_blank" rel="noreferrer">
                    <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
                  </a>

                  <p className="text-xs text-ink-muted mb-3">
                    {new Date(post.pubDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>

                  {thumbnail && (
                    <div className="mb-4">
                      <img
                        src={thumbnail}
                        alt={post.title}
                        className="w-full max-w-xl mx-auto rounded-xl object-cover"
                      />
                    </div>
                  )}

                  <p className="text-sm text-ink-muted">
                    {extractExcerpt(post.description)}
                  </p>

                  <div className="mt-4">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
                    >
                      Read on Medium
                    </a>
                  </div>

                </article>
              </div>
                            
            );
          })}

          {posts.length === 0 && (
            <p className="text-sm text-ink-muted">
              No selected posts yet. Add some Medium URLs to the whitelist in
              <code className="mx-1">INCLUDED_URLS</code> to feature them here.
            </p>
          )}
        </section>
      )}
    </div>
  );
}

export default CaseStudies;
