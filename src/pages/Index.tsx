import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const motorcycles = [
  {
    id: 1,
    name: 'Yamaha YZF-R1',
    type: 'Спортбайк',
    engine: '998cc',
    power: '200 л.с.',
    price: '1,850,000 ₽',
    image: '/img/6fe50e5d-2a95-459e-8853-32c54b713f6d.jpg',
    features: ['ABS', 'Трекшн-контроль', 'Круиз-контроль']
  },
  {
    id: 2,
    name: 'Kawasaki Ninja ZX-10R',
    type: 'Спортбайк',
    engine: '998cc',
    power: '203 л.с.',
    price: '1,920,000 ₽',
    image: '/img/8e5a0fcd-d724-4773-b1a7-d896ba88d27c.jpg',
    features: ['ABS', 'Быстрый переключатель', 'Лаунч-контроль']
  },
  {
    id: 3,
    name: 'Honda CBR1000RR-R',
    type: 'Спортбайк',
    engine: '999cc',
    power: '215 л.с.',
    price: '2,100,000 ₽',
    image: '/img/feb96653-0fac-47f3-9c23-66946e4523cd.jpg',
    features: ['ABS', 'Электронная подвеска', 'Winglets']
  },
  {
    id: 4,
    name: 'BMW S1000RR',
    type: 'Спортбайк',
    engine: '999cc',
    power: '210 л.с.',
    price: '2,250,000 ₽',
    image: '/img/6fe50e5d-2a95-459e-8853-32c54b713f6d.jpg',
    features: ['ABS', 'DDC подвеска', 'Race Pro режим']
  },
  {
    id: 5,
    name: 'Ducati Panigale V4',
    type: 'Спортбайк',
    engine: '1103cc',
    power: '214 л.с.',
    price: '2,800,000 ₽',
    image: '/img/8e5a0fcd-d724-4773-b1a7-d896ba88d27c.jpg',
    features: ['ABS', 'Cornering ABS', 'DTC']
  },
  {
    id: 6,
    name: 'Suzuki GSX-R1000R',
    type: 'Спортбайк',
    engine: '999cc',
    power: '199 л.с.',
    price: '1,750,000 ₽',
    image: '/img/feb96653-0fac-47f3-9c23-66946e4523cd.jpg',
    features: ['ABS', 'Моторемейп', 'Bi-directional QS']
  }
];

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [engineFilter, setEngineFilter] = useState('all');
  const [powerFilter, setPowerFilter] = useState('all');

  const filteredMotorcycles = motorcycles.filter(moto => {
    const matchesSearch = moto.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || moto.type === typeFilter;
    const matchesEngine = engineFilter === 'all' || moto.engine.includes(engineFilter);
    const matchesPower = powerFilter === 'all' || parseInt(moto.power) >= parseInt(powerFilter);
    return matchesSearch && matchesType && matchesEngine && matchesPower;
  });

  const Navigation = () => (
    <nav className="bg-racing-black text-racing-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Bike" size={32} className="text-racing-red" />
            <span className="text-2xl font-bold text-racing-red">MRPmoto.ru</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'catalog', label: 'Каталог', icon: 'Grid3x3' },
              { id: 'about', label: 'О компании', icon: 'Users' },
              { id: 'cooperation', label: 'Сотрудничество', icon: 'Handshake' },
              { id: 'contacts', label: 'Контакты', icon: 'Phone' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 hover:bg-racing-red hover:text-racing-white ${
                  activeSection === item.id ? 'bg-racing-red text-racing-white' : 'text-racing-silver hover:text-racing-white'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          
          <Button variant="outline" className="md:hidden border-racing-red text-racing-red hover:bg-racing-red hover:text-racing-white">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section className="relative h-screen bg-gradient-to-br from-racing-black via-racing-black to-racing-red flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/img/6fe50e5d-2a95-459e-8853-32c54b713f6d.jpg')` }}
      ></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-racing-white mb-6 leading-tight">
          СКОРОСТЬ<br />
          <span className="text-racing-red">БЕЗ ГРАНИЦ</span>
        </h1>
        <p className="text-xl md:text-2xl text-racing-silver mb-8 max-w-2xl mx-auto">
          Профессиональные мотоциклы для настоящих гонщиков. Найдите свою машину мечты в нашем каталоге.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-racing-red hover:bg-red-700 text-racing-white px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
            onClick={() => setActiveSection('catalog')}
          >
            <Icon name="Search" size={20} className="mr-2" />
            СМОТРЕТЬ КАТАЛОГ
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-racing-white text-racing-white hover:bg-racing-white hover:text-racing-black px-8 py-4 text-lg font-bold transition-all duration-300"
            onClick={() => setActiveSection('about')}
          >
            <Icon name="Info" size={20} className="mr-2" />
            О КОМПАНИИ
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-racing-white opacity-70" />
      </div>
    </section>
  );

  const CatalogSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-racing-black mb-4">КАТАЛОГ МОТОЦИКЛОВ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите идеальный мотоцикл из нашей коллекции высокопроизводительных машин
          </p>
        </div>

        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Icon name="Filter" size={20} className="mr-2 text-racing-red" />
            Фильтры
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Поиск по названию</label>
              <Input
                placeholder="Введите модель..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Тип мотоцикла</label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все типы</SelectItem>
                  <SelectItem value="Спортбайк">Спортбайк</SelectItem>
                  <SelectItem value="Круизер">Круизер</SelectItem>
                  <SelectItem value="Турист">Турист</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Объем двигателя</label>
              <Select value={engineFilter} onValueChange={setEngineFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите объем" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любой объем</SelectItem>
                  <SelectItem value="600">600cc</SelectItem>
                  <SelectItem value="750">750cc</SelectItem>
                  <SelectItem value="1000">1000cc+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Мощность (л.с.)</label>
              <Select value={powerFilter} onValueChange={setPowerFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите мощность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любая мощность</SelectItem>
                  <SelectItem value="150">150+ л.с.</SelectItem>
                  <SelectItem value="200">200+ л.с.</SelectItem>
                  <SelectItem value="250">250+ л.с.</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMotorcycles.map((moto) => (
            <Card key={moto.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={moto.image} 
                  alt={moto.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-racing-red text-white">{moto.type}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-racing-black">{moto.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-racing-red">{moto.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Gauge" size={16} className="text-racing-red" />
                    <span className="text-sm font-medium">{moto.engine}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" size={16} className="text-racing-red" />
                    <span className="text-sm font-medium">{moto.power}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {moto.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-racing-red hover:bg-red-700 text-white font-bold">
                  <Icon name="Eye" size={16} className="mr-2" />
                  ПОДРОБНЕЕ
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredMotorcycles.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">Мотоциклы не найдены</h3>
            <p className="text-gray-500">Попробуйте изменить параметры фильтрации</p>
          </div>
        )}
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-racing-black mb-8">О КОМПАНИИ MRPMOTO</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-racing-red mb-4">15 лет на рынке мотоциклов</h3>
              <p className="text-gray-600 mb-6">
                MRPmoto.ru - ведущий дилер премиальных мотоциклов в России. Мы специализируемся на продаже 
                высокопроизводительных спортивных мотоциклов от ведущих мировых производителей.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-racing-red" />
                  <span>Официальная гарантия на всю технику</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-racing-red" />
                  <span>Сервисное обслуживание и ремонт</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-racing-red" />
                  <span>Программы кредитования и Trade-in</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/img/8e5a0fcd-d724-4773-b1a7-d896ba88d27c.jpg" 
                alt="О компании"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const CooperationSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-racing-black mb-8">СОТРУДНИЧЕСТВО</h2>
          <p className="text-lg text-gray-600 mb-12">
            Мы всегда открыты для новых партнерских отношений и сотрудничества
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={48} className="mx-auto text-racing-red mb-4" />
                <CardTitle>Дилерская программа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Станьте официальным дилером и получите доступ к эксклюзивным условиям поставки</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wrench" size={48} className="mx-auto text-racing-red mb-4" />
                <CardTitle>Сервисное партнерство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Присоединяйтесь к нашей сети авторизованных сервисных центров</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Package" size={48} className="mx-auto text-racing-red mb-4" />
                <CardTitle>Поставка запчастей</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Оригинальные запчасти и аксессуары с гарантией качества</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  const ContactsSection = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-racing-black mb-8 text-center">КОНТАКТЫ</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-racing-red mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-racing-red" />
                  <span>г. Москва, ул. Мотоциклистов, д. 15</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-racing-red" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-racing-red" />
                  <span>info@mrpmoto.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-racing-red" />
                  <span>Пн-Пт: 9:00-19:00, Сб-Вс: 10:00-18:00</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-racing-red mb-6">Написать нам</h3>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Телефон" />
                <textarea 
                  className="w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-racing-red"
                  placeholder="Сообщение"
                ></textarea>
                <Button className="w-full bg-racing-red hover:bg-red-700 text-white font-bold">
                  <Icon name="Send" size={16} className="mr-2" />
                  ОТПРАВИТЬ
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-racing-black text-racing-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Bike" size={28} className="text-racing-red" />
              <span className="text-xl font-bold text-racing-red">MRPmoto.ru</span>
            </div>
            <p className="text-racing-silver">
              Ваш надежный партнер в мире высокопроизводительных мотоциклов
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Каталог</h4>
            <ul className="space-y-2 text-racing-silver">
              <li><a href="#" className="hover:text-racing-red transition-colors">Спортбайки</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Круизеры</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Туристы</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Запчасти</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Сервис</h4>
            <ul className="space-y-2 text-racing-silver">
              <li><a href="#" className="hover:text-racing-red transition-colors">Техобслуживание</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Ремонт</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Диагностика</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Гарантия</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Следите за нами</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-racing-silver hover:text-racing-red transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-racing-silver hover:text-racing-red transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-racing-silver hover:text-racing-red transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-racing-silver">
          <p>&copy; 2024 MRPmoto.ru. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <HeroSection />
            <CatalogSection />
            <AboutSection />
          </>
        );
      case 'catalog':
        return <CatalogSection />;
      case 'about':
        return <AboutSection />;
      case 'cooperation':
        return <CooperationSection />;
      case 'contacts':
        return <ContactsSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default Index;