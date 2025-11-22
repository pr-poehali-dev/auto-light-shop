import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const services = [
    {
      icon: "Lightbulb",
      title: "Установка автосвета",
      description: "Профессиональная установка LED, биксенон любой сложности",
      price: "от 10 000 ₽"
    },
    {
      icon: "Sun",
      title: "Тонировка стёкол",
      description: "Качественная тонировка с гарантией, любые оттенки",
      price: "от 3 000 ₽"
    },
    {
      icon: "Sparkles",
      title: "Полировка фар и стёкол",
      description: "Восстановление прозрачности, защита от помутнения",
      price: "от 5 000 ₽"
    },
    {
      icon: "Zap",
      title: "Ремонт электрики",
      description: "Диагностика и устранение неисправностей электрооборудования",
      price: "от 1 000 ₽"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/d15146d3-c9d6-41b6-8c9e-3f02151381f8/files/bd1b2545-fdc3-433a-9852-3b7e85f37e19.jpg",
      title: "Установка LED фар",
      description: "BMW X5 2020"
    },
    {
      image: "https://cdn.poehali.dev/projects/d15146d3-c9d6-41b6-8c9e-3f02151381f8/files/43bc6b9f-a003-463a-81a2-d8caaee850dc.jpg",
      title: "Тонировка премиум",
      description: "Mercedes-Benz E-Class"
    },
    {
      image: "https://cdn.poehali.dev/projects/d15146d3-c9d6-41b6-8c9e-3f02151381f8/files/c087f805-4c02-4fa0-8f84-300ad35735d9.jpg",
      title: "Полировка фар",
      description: "Audi A6 2018"
    }
  ];

  const reviews = [
    {
      name: "Дмитрий К.",
      rating: 5,
      text: "Отличная работа! Установили ксенон за час, всё работает идеально. Рекомендую!",
      date: "15.11.2024"
    },
    {
      name: "Анна М.",
      rating: 5,
      text: "Делала тонировку, результат превзошёл ожидания. Мастера профессионалы своего дела.",
      date: "08.11.2024"
    },
    {
      name: "Сергей Т.",
      rating: 5,
      text: "Отполировали фары до состояния новых. Быстро, качественно, адекватная цена.",
      date: "02.11.2024"
    }
  ];

  const priceList = [
    { service: "LED лампы установка (комплект)", price: "10 000 ₽" },
    { service: "Биксенон установка (комплект)", price: "12 000 ₽" },
    { service: "Тонировка передних стёкол", price: "3 000 ₽" },
    { service: "Тонировка задних стёкол", price: "2 500 ₽" },
    { service: "Полная тонировка авто", price: "5 000 ₽" },
    { service: "Полировка фар (пара)", price: "5 000 ₽" },
    { service: "Полировка лобового стекла", price: "6 000 ₽" },
    { service: "Диагностика электрики", price: "1 000 ₽" },
    { service: "Ремонт проводки (1 час работы)", price: "1 500 ₽" }
  ];

  const products = [
    {
      name: "Bi-LED модули Aozoom",
      description: "Премиальные би-лед модули с ярким светом и идеальной СТГ",
      price: "от 15 000 ₽",
      image: "https://cdn.poehali.dev/projects/d15146d3-c9d6-41b6-8c9e-3f02151381f8/files/bd1b2545-fdc3-433a-9852-3b7e85f37e19.jpg"
    },
    {
      name: "Bi-LED модули Creeline",
      description: "Качественные модули с долгим сроком службы",
      price: "от 12 000 ₽",
      image: "https://cdn.poehali.dev/projects/d15146d3-c9d6-41b6-8c9e-3f02151381f8/files/bd1b2545-fdc3-433a-9852-3b7e85f37e19.jpg"
    },
    {
      name: "LED лампы H4/H7",
      description: "Яркие LED лампы для ближнего и дальнего света",
      price: "от 3 500 ₽",
      image: "https://cdn.poehali.dev/projects/d15146d3-c9d6-41b6-8c9e-3f02151381f8/files/bd1b2545-fdc3-433a-9852-3b7e85f37e19.jpg"
    },
    {
      name: "LED лампы HB3/HB4",
      description: "Мощные LED лампы для американских и японских авто",
      price: "от 3 500 ₽",
      image: "https://cdn.poehali.dev/projects/d15146d3-c9d6-41b6-8c9e-3f02151381f8/files/bd1b2545-fdc3-433a-9852-3b7e85f37e19.jpg"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" size={28} className="text-primary" />
            <span className="text-2xl font-bold">CarLight</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#price" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="Award" size={14} className="mr-1" />
            Профессиональный автосервис с 2015 года
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Установка автосвета
            <br />
            <span className="text-primary">любой сложности</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in max-w-2xl mx-auto">
            Автосвет, тонировка, полировка стёкол и фар, ремонт электрики.
            Гарантия качества. Работаем в Воронеже.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр работ по улучшению вашего автомобиля
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Каталог товаров</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Премиальные би-LED модули и лампы в наличии
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Портфолио работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры наших работ
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачные цены на все виды работ
          </p>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {priceList.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 hover:bg-muted/50 transition-colors">
                    <span className="font-medium">{item.service}</span>
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={24} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Гарантии качества</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Гарантия на работы до 12 месяцев</li>
                  <li>✓ Используем только проверенные материалы</li>
                  <li>✓ Бесплатная диагностика перед работой</li>
                  <li>✓ Фиксированная цена без доплат</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{review.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Связаться с нами</h2>
          <p className="text-center text-secondary-foreground/80 mb-12 text-lg">
            Оставьте заявку, и мы перезвоним в течение 15 минут
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="text-lg font-bold">+7 (473) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Адрес</p>
                      <p className="text-lg font-bold">г. Воронеж, ул. Примерная, 123</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Режим работы</p>
                      <p className="text-lg font-bold">Пн-Вс: 9:00 - 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение (опционально)" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2024 CarLight. Все права защищены.</p>
          <p className="text-sm">Профессиональная установка автосвета в Воронеже</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;