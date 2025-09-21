import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const parts = [
  {
    id: 1,
    name: 'Тормозной диск передний',
    category: 'Тормозная система',
    compatibility: 'КТМ 250-450',
    price: '8,500 ₽',
    image: '/img/a8de8a6f-2226-4104-8ea3-d4b24c3dcb8a.jpg',
    inStock: true,
    features: ['Нержавеющая сталь', 'Волнистый дизайн', 'Улучшенное торможение']
  },
  {
    id: 2,
    name: 'Поршневая группа',
    category: 'Двигатель',
    compatibility: 'Хонда CRF 450',
    price: '15,200 ₽',
    image: '/img/f6f49a89-f6ef-42bf-bb1b-95564cbf1d6a.jpg',
    inStock: true,
    features: ['Кованый поршень', 'Хромированные кольца', 'Российское производство']
  },
  {
    id: 3,
    name: 'Амортизатор задний',
    category: 'Подвеска',
    compatibility: 'Ямаха YZ 250/450',
    price: '25,800 ₽',
    image: '/img/76b594e7-d1aa-42f9-9282-4e8f657fb927.jpg',
    inStock: false,
    features: ['Газо-масляный', 'Регулировка сжатия', 'Профессиональная серия']
  },
  {
    id: 4,
    name: 'Звездочка ведущая',
    category: 'Трансмиссия',
    compatibility: 'Кавасаки KX 250/450',
    price: '3,200 ₽',
    image: '/img/a8de8a6f-2226-4104-8ea3-d4b24c3dcb8a.jpg',
    inStock: true,
    features: ['Сталь 7075', 'Анодированное покрытие', 'Точная обработка']
  },
  {
    id: 5,
    name: 'Воздушный фильтр',
    category: 'Система впуска',
    compatibility: 'Хускварна TC/FC',
    price: '1,850 ₽',
    image: '/img/f6f49a89-f6ef-42bf-bb1b-95564cbf1d6a.jpg',
    inStock: true,
    features: ['Двухслойная пена', 'Пропитка маслом', 'Многоразовый']
  },
  {
    id: 6,
    name: 'Рычаги тормоза и сцепления',
    category: 'Органы управления',
    compatibility: 'Универсальные',
    price: '4,200 ₽',
    image: '/img/76b594e7-d1aa-42f9-9282-4e8f657fb927.jpg',
    inStock: true,
    features: ['CNC обработка', 'Анодирование', 'Складные концы']
  }
];

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [compatibilityFilter, setCompatibilityFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');

  const filteredParts = parts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.compatibility.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || part.category === categoryFilter;
    const matchesCompatibility = compatibilityFilter === 'all' || part.compatibility.includes(compatibilityFilter);
    const matchesStock = stockFilter === 'all' || 
                        (stockFilter === 'inStock' && part.inStock) ||
                        (stockFilter === 'outOfStock' && !part.inStock);
    return matchesSearch && matchesCategory && matchesCompatibility && matchesStock;
  });

  const Navigation = () => (
    <nav className="bg-racing-black text-racing-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Icon name="Wrench" size={32} className="text-racing-red" />
            <div>
              <span className="text-2xl font-bold text-racing-red">MRP</span>
              <div className="text-xs text-racing-silver">Maliukov Racing Parts</div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Главная', icon: 'Home' },
              { id: 'catalog', label: 'Каталог', icon: 'Package' },
              { id: 'production', label: 'Производство', icon: 'Factory' },
              { id: 'about', label: 'О компании', icon: 'Info' },
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
    <section className="relative h-screen bg-gradient-to-br from-racing-black via-gray-900 to-racing-red flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('/img/f6f49a89-f6ef-42bf-bb1b-95564cbf1d6a.jpg')` }}
      ></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 animate-fade-in">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-racing-white mb-4 leading-tight">
            MALIUKOV<br />
            <span className="text-racing-red">RACING PARTS</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Badge className="bg-racing-red text-white text-lg px-4 py-2">🇷🇺 Российское производство</Badge>
            <Badge className="bg-racing-silver text-racing-black text-lg px-4 py-2">⚡ Премиум качество</Badge>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-racing-silver mb-8 max-w-3xl mx-auto">
          Профессиональные запчасти для кроссовых и эндуро мотоциклов. 
          Собственное производство, контроль качества, доставка по всей России.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-racing-red hover:bg-red-700 text-racing-white px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
            onClick={() => setActiveSection('catalog')}
          >
            <Icon name="Package" size={20} className="mr-2" />
            КАТАЛОГ ЗАПЧАСТЕЙ
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-racing-white text-racing-white hover:bg-racing-white hover:text-racing-black px-8 py-4 text-lg font-bold transition-all duration-300"
            onClick={() => setActiveSection('production')}
          >
            <Icon name="Factory" size={20} className="mr-2" />
            НАШЕ ПРОИЗВОДСТВО
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
          <h2 className="text-4xl font-bold text-racing-black mb-4">КАТАЛОГ ЗАПЧАСТЕЙ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Профессиональные запчасти для кроссовых и эндуро мотоциклов российского производства
          </p>
        </div>

        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Icon name="Filter" size={20} className="mr-2 text-racing-red" />
            Фильтры
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Поиск</label>
              <Input
                placeholder="Деталь или модель..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Категория</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="Тормозная система">Тормозная система</SelectItem>
                  <SelectItem value="Двигатель">Двигатель</SelectItem>
                  <SelectItem value="Подвеска">Подвеска</SelectItem>
                  <SelectItem value="Трансмиссия">Трансмиссия</SelectItem>
                  <SelectItem value="Система впуска">Система впуска</SelectItem>
                  <SelectItem value="Органы управления">Органы управления</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Совместимость</label>
              <Select value={compatibilityFilter} onValueChange={setCompatibilityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите марку" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все марки</SelectItem>
                  <SelectItem value="КТМ">КТМ</SelectItem>
                  <SelectItem value="Хонда">Honda</SelectItem>
                  <SelectItem value="Ямаха">Yamaha</SelectItem>
                  <SelectItem value="Кавасаки">Kawasaki</SelectItem>
                  <SelectItem value="Хускварна">Husqvarna</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Наличие</label>
              <Select value={stockFilter} onValueChange={setStockFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Все товары" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все товары</SelectItem>
                  <SelectItem value="inStock">В наличии</SelectItem>
                  <SelectItem value="outOfStock">Под заказ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredParts.map((part) => (
            <Card key={part.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={part.image} 
                  alt={part.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${part.inStock ? 'bg-green-500' : 'bg-orange-500'} text-white`}>
                    {part.inStock ? 'В наличии' : 'Под заказ'}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-racing-red text-white">{part.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-racing-black">{part.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{part.compatibility}</CardDescription>
                <div className="text-lg font-semibold text-racing-red">{part.price}</div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {part.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-racing-red hover:bg-red-700 text-white font-bold">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  {part.inStock ? 'В КОРЗИНУ' : 'ЗАКАЗАТЬ'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredParts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">Запчасти не найдены</h3>
            <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </section>
  );

  const ProductionSection = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-racing-black mb-4">НАШЕ ПРОИЗВОДСТВО</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Современное российское производство запчастей для мотоциклов с полным циклом от проектирования до готовой детали
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/img/f6f49a89-f6ef-42bf-bb1b-95564cbf1d6a.jpg" 
                alt="Производство"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-racing-red mb-6">Высокотехнологичное оборудование</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Cog" size={24} className="text-racing-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">CNC обработка</h4>
                    <p className="text-gray-600">Точность до 0.01 мм на современных станках с ЧПУ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={24} className="text-racing-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Контроль качества</h4>
                    <p className="text-gray-600">Многоступенчатый контроль на каждом этапе производства</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Award" size={24} className="text-racing-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Сертификация</h4>
                    <p className="text-gray-600">Соответствие международным стандартам качества</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" size={48} className="mx-auto text-racing-red mb-4" />
                <CardTitle>Инновации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Собственное R&D подразделение для разработки новых решений</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Truck" size={48} className="mx-auto text-racing-red mb-4" />
                <CardTitle>Логистика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Быстрая доставка по всей России и странам СНГ</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={48} className="mx-auto text-racing-red mb-4" />
                <CardTitle>Команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Профессиональные инженеры и технологи с многолетним опытом</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-racing-black mb-8">О КОМПАНИИ MALIUKOV RACING PARTS</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-racing-red mb-4">Российское качество мирового уровня</h3>
              <p className="text-gray-600 mb-6">
                Maliukov Racing Parts (MRP) - российская компания, специализирующаяся на производстве 
                высококачественных запчастей для кроссовых и эндуро мотоциклов. Мы обеспечиваем 
                российских мотоциклистов надежными деталями собственного производства.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-racing-red" />
                  <span>10+ лет опыта в мотоиндустрии</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-racing-red" />
                  <span>Собственное производство в России</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-racing-red" />
                  <span>Поддержка спортивных команд</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/img/76b594e7-d1aa-42f9-9282-4e8f657fb927.jpg" 
                alt="О компании"
                className="rounded-lg shadow-lg"
              />
            </div>
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
                  <span>г. Москва, Промышленная зона "Северная"</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-racing-red" />
                  <span>+7 (495) 987-65-43</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-racing-red" />
                  <span>info@mrpmoto.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Globe" size={20} className="text-racing-red" />
                  <span>www.mrpmoto.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-racing-red" />
                  <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
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
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Wrench" size={28} className="text-racing-red" />
              <div>
                <span className="text-xl font-bold text-racing-red">MRP</span>
                <div className="text-xs text-racing-silver">Maliukov Racing Parts</div>
              </div>
            </div>
            <p className="text-racing-silver">
              Российское производство запчастей для кроссовых и эндуро мотоциклов
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Каталог</h4>
            <ul className="space-y-2 text-racing-silver">
              <li><a href="#" className="hover:text-racing-red transition-colors">Тормозная система</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Двигатель</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Подвеска</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Трансмиссия</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-racing-silver">
              <li><a href="#" className="hover:text-racing-red transition-colors">Производство под заказ</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Техническая поддержка</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Гарантийное обслуживание</a></li>
              <li><a href="#" className="hover:text-racing-red transition-colors">Доставка по России</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Связь с нами</h4>
            <div className="space-y-3 text-racing-silver">
              <div>Email: info@mrpmoto.ru</div>
              <div>Тел: +7 (495) 987-65-43</div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-racing-silver hover:text-racing-red transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-racing-silver hover:text-racing-red transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-racing-silver">
          <p>&copy; 2024 Maliukov Racing Parts (MRP). Все права защищены. mrpmoto.ru</p>
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
            <ProductionSection />
          </>
        );
      case 'catalog':
        return <CatalogSection />;
      case 'production':
        return <ProductionSection />;
      case 'about':
        return <AboutSection />;
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