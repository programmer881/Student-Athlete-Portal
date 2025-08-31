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
    <section id="highlights" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
        Game Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.url} className="group">
            <div className="relative w-full overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 aspect-video shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <iframe
                src={toEmbedUrl(video.url)}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-300 text-center">{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


