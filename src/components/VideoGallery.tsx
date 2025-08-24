type Video = {
  title: string;
  url: string; // YouTube/Vimeo URL
};

function toEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) {
      // Handle both watch and short links
      const videoId = u.searchParams.get("v") || (u.hostname.includes("youtu.be") ? u.pathname.slice(1) : undefined);
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : url;
    }
    return url;
  } catch {
    return url;
  }
}

type VideoGalleryProps = {
  videos: Video[];
};

export function VideoGallery({ videos }: VideoGalleryProps) {
  return (
    <section id="highlights" className="mx-auto max-w-6xl px-4 py-6">
      <h2 className="text-2xl font-semibold tracking-tight">Highlights</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.url} className="group">
            <div className="relative w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 aspect-video">
              <iframe
                src={toEmbedUrl(video.url)}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="mt-2 text-sm text-black/75 dark:text-white/70">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


