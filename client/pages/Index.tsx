import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles, Shield, Zap } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Your Thoughts,{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Beautifully Preserved
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              MindLog is your private sanctuary for self-reflection. Capture your daily thoughts, dreams, and memories in a beautiful, distraction-free environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/entries/new"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all inline-block text-center"
              >
                Start Writing Now
              </Link>
              <Link
                to="/entries"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all inline-block text-center"
              >
                View Your Entries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MindLog?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A thoughtfully designed platform for your most personal thoughts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Beautiful Design</h3>
              <p className="text-muted-foreground">
                A clean, minimal interface that helps you focus on what matters most—your thoughts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Your Privacy</h3>
              <p className="text-muted-foreground">
                Your entries are your own. Write freely knowing your thoughts are secure and private.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                No distractions. Instant loading and smooth interactions let you focus on writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mx-4 md:mx-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Begin writing your first journal entry today and discover the power of self-reflection.
          </p>
          <Link
            to="/entries/new"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Write Your First Entry
          </Link>
        </div>
      </section>
    </Layout>
  );
}
