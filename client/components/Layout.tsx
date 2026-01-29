import { Link } from "react-router-dom";
import { BookOpen, Plus } from "lucide-react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <BookOpen className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MindLog
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/entries" 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                My Entries
              </Link>
            </nav>

            <Link
              to="/entries/new"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Entry</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-card/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>MindLog &copy; 2024 - Your personal journal companion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
