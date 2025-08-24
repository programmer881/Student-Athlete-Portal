import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VideoGallery } from "@/components/VideoGallery";
import { PersonalStats } from "@/components/PersonalStats";
import { TranscriptViewer } from "@/components/TranscriptViewer";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { FAQ } from "@/components/FAQ";
import { athlete } from "@/data/athlete";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero
        name={athlete.name}
        sport={athlete.sport}
        position={athlete.position}
        school={athlete.school}
        location={athlete.location}
        headshotUrl={athlete.headshotUrl}
        recruitingStatus={athlete.recruitingStatus}
        startTerm={athlete.startTerm}
        metrics={athlete.metrics}
        socials={athlete.socials}
      />
      <main>
        <PersonalStats metrics={athlete.metrics} />
        <VideoGallery videos={athlete.videos} />
        <TranscriptViewer fileUrl={athlete.transcriptUrl} />
        {athlete.calendlyUrl ? <CalendlyEmbed url={athlete.calendlyUrl} /> : null}
        <FAQ items={athlete.faq} />
      </main>
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text:black/60 dark:text-white/60">
        © {new Date().getFullYear()} Student Athlete Profile
      </footer>
    </div>
  );
}
