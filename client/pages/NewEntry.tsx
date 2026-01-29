import { Layout } from "@/components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";

const MOOD_OPTIONS = ["😊 Happy", "😔 Sad", "😌 Calm", "😤 Frustrated", "😴 Tired", "🤔 Thoughtful"];

export default function NewEntry() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both title and content");
      return;
    }

    setIsSaving(true);

    // Simulate save delay
    setTimeout(() => {
      const newEntry = {
        id: Date.now().toString(),
        title,
        content,
        date: new Date(),
        mood: mood || undefined,
      };

      // Get existing entries from localStorage
      const existingEntries = JSON.parse(localStorage.getItem("journalEntries") || "[]");
      existingEntries.push(newEntry);
      localStorage.setItem("journalEntries", JSON.stringify(existingEntries));

      setIsSaving(false);
      navigate("/entries");
    }, 300);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/entries"
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Entries
        </Link>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">New Journal Entry</h1>
            <p className="text-muted-foreground">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium mb-2">Entry Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Mood Selector */}
          <div>
            <label className="block text-sm font-medium mb-3">How are you feeling?</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {MOOD_OPTIONS.map((moodOption) => (
                <button
                  key={moodOption}
                  onClick={() => setMood(moodOption)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    mood === moodOption
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {moodOption}
                </button>
              ))}
            </div>
          </div>

          {/* Content Textarea */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Thoughts</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write freely. No judgment, no rules. Just your thoughts..."
              rows={12}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <p className="text-xs text-muted-foreground mt-2">
              {content.length} characters
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100"
            >
              <Save className="w-4 h-4" />
              {isSaving ? "Saving..." : "Save Entry"}
            </button>
            <Link
              to="/entries"
              className="px-6 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-muted/50 transition-all"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
