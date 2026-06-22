import { Link } from 'react-router-dom';
import { Flower2, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { offices } from '../../data/team';
import { services } from '../../data/services';

const navLinks = [
  { to: '/', label: 'Начало' },
  { to: '/about', label: 'За нас' },
  { to: '/services', label: 'Услуги' },
  { to: '/contacts', label: 'Контакти' },
];

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Flower2 className="h-6 w-6 text-violet-400" />
              <span className="font-serif text-xl font-semibold text-white">Глобъл Баланс</span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              Холистичен център за вашето благополучие. Тялото, умът и духът са едно цяло.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61565586796190&locale=bg_BG" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-violet-400 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-stone-400 hover:text-violet-400 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-stone-400 hover:text-violet-400 transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-white text-base font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-stone-400 hover:text-violet-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-white text-base font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="text-sm text-stone-400 hover:text-violet-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-serif text-white text-base font-semibold mb-4">Контакти</h4>
            {offices.map((office) => (
              <div key={office.id} className="mb-4 last:mb-0">
                <p className="text-sm font-medium text-white">{office.city}</p>
                <div className="space-y-1 mt-1">
                  <p className="text-xs text-stone-400 flex items-center gap-2"><MapPin className="h-3 w-3" />{office.address}</p>
                  <p className="text-xs text-stone-400 flex items-center gap-2"><Phone className="h-3 w-3" />{office.phone}</p>
                  <p className="text-xs text-stone-400 flex items-center gap-2"><Mail className="h-3 w-3" />{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="max-w-md">
            <h4 className="font-serif text-white text-base font-semibold mb-3">Абонирай се за нашия newsletter</h4>
            <div className="flex gap-2">
              <Input placeholder="Вашият имейл" className="bg-stone-800 border-stone-700 text-white placeholder:text-stone-500" />
              <Button size="sm">Абонирай се</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>&copy; 2025 Глобъл Баланс. Всички права запазени.</p>
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-stone-300 transition-colors">Общи условия</Link>
            <Link to="#" className="hover:text-stone-300 transition-colors">Политика за поверителност</Link>
            <Link to="#" className="hover:text-stone-300 transition-colors">Медицинска декларация</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
