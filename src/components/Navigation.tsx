import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

export const Navigation = ({ isLoggedIn = false, onLogout }: NavigationProps) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/");
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center transition-smooth group-hover:scale-110">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Kognoverse
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <Button variant="ghost" className="transition-smooth hover:bg-primary/10">
                  Dashboard
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="transition-smooth hover:border-destructive hover:text-destructive"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <Button
              onClick={() => navigate("/dashboard")}
              className="gradient-primary text-white shadow-glow transition-smooth hover:scale-105"
            >
              Get Started
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-smooth"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-border animate-slide-in-right">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start transition-smooth hover:bg-primary/10">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="w-full justify-start transition-smooth hover:border-destructive hover:text-destructive"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  navigate("/dashboard");
                  setMobileMenuOpen(false);
                }}
                className="w-full gradient-primary text-white shadow-glow"
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
