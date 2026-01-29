import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";
import { Calendar, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: Date;
  mood?: string;
}

export default function Entries() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  // Load entries from localStorage on mount
  useEffect(() => {
    const savedEntries = localStorage.getItem("journalEntries");
    if (savedEntries) {
      const parsed = JSON.parse(savedEntries).map((e: any) => ({
        ...e,
        date: new Date(e.date),
      }));
      setEntries(parsed);
    }
  }, []);

  const deleteEntry = (id: string) => {
    const filtered = entries.filter((e) => e.id !== id);
    setEntries(filtered);
    localStorage.setItem("journalEntries", JSON.stringify(filtered));
    setSelectedEntry(null);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (selectedEntry) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setSelectedEntry(null)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Entries
          </button>

          <article className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-3">{selectedEntry.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time>{formatDate(selectedEntry.date)}</time>
                {selectedEntry.mood && (
                  <span className="ml-4">Mood: {selectedEntry.mood}</span>
                )}
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-card rounded-lg p-8 border border-border whitespace-pre-wrap leading-relaxed text-base">
                {selectedEntry.content}
              </div>
            </div>

            <button
              onClick={() => deleteEntry(selectedEntry.id)}
              className="flex items-center gap-2 px-4 py-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Delete Entry
            </button>
          </article>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Entries</h1>
          <p className="text-muted-foreground">
            {entries.length} {entries.length === 1 ? "entry" : "entries"} in your
            journal
          </p>
        </div>

        {entries.length === 0 ? (
          <div className="text-center py-12">
            <BookOpenIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No entries yet</h2>
            <p className="text-muted-foreground mb-6">
              Start your journal journey by writing your first entry
            </p>
            <Link
              to="/entries/new"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Write First Entry
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {entries
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((entry) => (
                <div
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className="p-6 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/50 cursor-pointer transition-all group"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {entry.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(entry.date)}
                        {entry.mood && (
                          <span className="ml-2">
                            {entry.mood}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mt-3 line-clamp-2">
                        {entry.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3.043.525m18.087.84A8.967 8.967 0 0018 3.75c-1.052 0-2.062.18-3.043.525m0 0A8.968 8.968 0 0112 12m0 0a8.968 8.968 0 01-3.957-5.475m0 0a8.967 8.967 0 013.957 5.475m0 0a8.968 8.968 0 013.957-5.475m0 0A8.967 8.967 0 0121 12"
      />
    </svg>
  );
}
