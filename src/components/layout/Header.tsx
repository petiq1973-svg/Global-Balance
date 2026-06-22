import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Flower2 } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const navLinks = [
  { to: '/', label: 'Начало' },
  { to: '/about', label: 'За нас' },
  { to: '/services', label: 'Услуги' },
  { to: '/contacts', label: 'Контакти' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Flower2 className="h-7 w-7 text-violet-600 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-serif text-xl font-semibold text-stone-800">
              Глобъл Баланс
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  location.pathname === link.to
                    ? 'text-violet-600 bg-violet-50'
                    : 'text-stone-600 hover:text-violet-600 hover:bg-stone-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex p-2 text-stone-500 hover:text-violet-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Button size="sm" className="hidden sm:inline-flex" onClick={() => window.location.href = '/contacts'}>
              Запази час
            </Button>
            <button
              className="md:hidden p-2 text-stone-600"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-stone-200">
              <span className="font-serif text-lg font-semibold">Глобъл Баланс</span>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-stone-500">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    location.pathname === link.to
                      ? 'text-violet-600 bg-violet-50'
                      : 'text-stone-600 hover:text-violet-600 hover:bg-stone-50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-stone-200">
              <Button className="w-full" onClick={() => { setMobileOpen(false); window.location.href = '/contacts'; }}>
                Запази час
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
