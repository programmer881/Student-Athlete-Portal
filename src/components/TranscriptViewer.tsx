type TranscriptViewerProps = {
  fileUrl?: string; // PDF URL
  downloadName?: string;
};

export function TranscriptViewer({ fileUrl, downloadName = "transcript.pdf" }: TranscriptViewerProps) {
  return (
    <section id="transcripts" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold tracking-tight">Transcripts</h2>
      <div className="mt-6 rounded-lg border border-black/10 dark:border-white/15 overflow-hidden bg-black/5 dark:bg-white/10">
        {fileUrl ? (
          <div className="relative w-full h-[600px] overflow-auto">
            <iframe 
              src={fileUrl} 
              title="Transcript" 
              className="w-full h-full min-h-[800px]"
              style={{ border: 'none' }}
            />
          </div>
        ) : (
          <div className="p-6 text-sm text-black/75 dark:text-white/70">
            Upload a PDF transcript and set its URL to display it here.
          </div>
        )}
      </div>
      {fileUrl && (
        <div className="mt-3">
          <a href={fileUrl} download={downloadName} className="inline-block rounded-md border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
            Download PDF
          </a>
        </div>
      )}
    </section>
  );
}


