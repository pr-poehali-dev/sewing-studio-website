import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      title: 'Пошив одежды',
      description: 'Создаём уникальные наряды по вашим меркам и эскизам',
      icon: 'Scissors'
    },
    {
      title: 'Ремонт и реставрация',
      description: 'Восстановим любимые вещи с особой заботой и мастерством',
      icon: 'Sparkles'
    },
    {
      title: 'Подгонка по фигуре',
      description: 'Идеальная посадка - наша визитная карточка',
      icon: 'Ruler'
    }
  ];

  const team = [
    {
      name: 'Елена Петрова',
      role: 'Мастер-закройщик',
      experience: '15 лет опыта',
      image: 'https://cdn.poehali.dev/projects/69198397-0f0c-47f6-bae2-854602c82075/files/eb3781c5-ae1a-4fce-971d-3453717c56a4.jpg'
    },
    {
      name: 'Мария Соколова',
      role: 'Швея-мотористка',
      experience: '12 лет опыта',
      image: 'https://cdn.poehali.dev/projects/69198397-0f0c-47f6-bae2-854602c82075/files/62d746d0-f91a-4221-b0f4-815ee8dc5d2b.jpg'
    },
    {
      name: 'Анна Кузнецова',
      role: 'Дизайнер одежды',
      experience: '10 лет опыта',
      image: 'https://cdn.poehali.dev/projects/69198397-0f0c-47f6-bae2-854602c82075/files/bc7c22d8-2a03-4eb3-af3c-dce5cd6004bb.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Ольга Смирнова',
      text: 'Обратилась для пошива вечернего платья. Результат превзошёл все ожидания! Платье село идеально, качество работы на высшем уровне.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      text: 'Отремонтировали мой любимый костюм так, что не видно следов. Быстро, качественно и по приятной цене. Рекомендую!',
      rating: 5
    },
    {
      name: 'Екатерина Морозова',
      text: 'Мария подогнала мне несколько вещей по фигуре. Теперь всё сидит как влитое! Спасибо за профессионализм и внимательное отношение.',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-cormorant text-2xl font-bold text-foreground">
                Куда иголка, туда и нитка
              </h1>
              <p className="text-sm text-muted-foreground">Ателье премиум-класса</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-foreground mb-6">
              Создаём шедевры <br />с душой и мастерством
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              15 лет безупречного качества и индивидуального подхода к каждому клиенту
            </p>
            <Button size="lg" className="font-semibold">
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
          </div>
          <div className="mt-12 flex justify-center gap-4 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} className="text-primary" />
              <span>Премиальное качество</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} className="text-primary" />
              <span>Точные сроки</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Heart" size={20} className="text-primary" />
              <span>С любовью к деталям</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="font-cormorant text-4xl font-bold text-center mb-12 text-foreground">
            Наши услуги
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 border-accent"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h4 className="font-cormorant text-2xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="font-cormorant text-4xl font-bold text-center mb-12 text-foreground">
            Наша команда
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="pt-6 text-center">
                  <h4 className="font-cormorant text-2xl font-semibold mb-2 text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="font-cormorant text-4xl font-bold text-center mb-12 text-foreground">
            Отзывы клиентов
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-foreground">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="font-cormorant text-4xl font-bold text-center mb-12 text-foreground">
            Свяжитесь с нами
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (___) ___-__-__"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о ваших пожеланиях"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Телефон</h4>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Часы работы</h4>
                      <p className="text-muted-foreground">Пн-Пт: 10:00 - 19:00</p>
                      <p className="text-muted-foreground">Сб: 11:00 - 17:00</p>
                      <p className="text-muted-foreground">Вс: выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A64b1d04f34c6a5b4f1870bb5c51a84e60c13fea6e1e2e9e4f6e1e3e1a6c7a5d4&amp;source=constructor"
                  width="100%"
                  height="240"
                  frameBorder="0"
                  title="Карта"
                  className="w-full"
                ></iframe>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={20} />
            </div>
            <p className="font-cormorant text-xl font-semibold text-foreground">
              Куда иголка, туда и нитка
            </p>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Ателье премиум-класса с любовью к деталям
          </p>
          <p className="text-xs text-muted-foreground">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;