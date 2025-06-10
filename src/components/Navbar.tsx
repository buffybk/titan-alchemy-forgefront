
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">Titan Alchemy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/catalog') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Catalog
            </Link>
            <Link
              to="/login"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/login') || isActive('/register') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Account</span>
              </div>
            </Link>
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="ml-2">Cart</span>
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/catalog"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Catalog
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
