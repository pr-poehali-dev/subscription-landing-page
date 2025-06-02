import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const subscriptions = [
  {
    name: "Netflix Premium",
    originalPrice: "899₽",
    ourPrice: "299₽",
    savings: "67%",
    duration: "месяц",
    features: ["4K качество", "До 4 устройств", "Без рекламы"],
    icon: "Tv",
    popular: true,
  },
  {
    name: "Spotify Premium",
    originalPrice: "599₽",
    ourPrice: "199₽",
    savings: "67%",
    duration: "месяц",
    features: ["Без рекламы", "Оффлайн режим", "Высокое качество"],
    icon: "Music",
    popular: false,
  },
  {
    name: "YouTube Premium",
    originalPrice: "699₽",
    ourPrice: "249₽",
    savings: "64%",
    duration: "месяц",
    features: ["Без рекламы", "YouTube Music", "Фоновое воспроизведение"],
    icon: "Play",
    popular: true,
  },
  {
    name: "Adobe Creative",
    originalPrice: "2990₽",
    ourPrice: "999₽",
    savings: "67%",
    duration: "месяц",
    features: ["Все приложения", "Cloud хранилище", "Шрифты Adobe"],
    icon: "Palette",
    popular: false,
  },
  {
    name: "Microsoft 365",
    originalPrice: "899₽",
    ourPrice: "299₽",
    savings: "67%",
    duration: "месяц",
    features: ["Office пакет", "1TB OneDrive", "Все устройства"],
    icon: "FileText",
    popular: false,
  },
  {
    name: "ChatGPT Plus",
    originalPrice: "1999₽",
    ourPrice: "699₽",
    savings: "65%",
    duration: "месяц",
    features: ["GPT-4 доступ", "Приоритет", "Новые функции"],
    icon: "Bot",
    popular: true,
  },
];

const SubscriptionsGrid = () => {
  return (
    <section id="subscriptions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные подписки
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите нужные сервисы и экономьте тысячи рублей каждый месяц
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptions.map((sub, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${sub.popular ? "ring-2 ring-blue-500" : ""}`}
            >
              {sub.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                  Популярно
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon
                      name={sub.icon as any}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl">{sub.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <span className="text-gray-400 line-through text-sm">
                      {sub.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      {sub.ourPrice}
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      -{sub.savings}
                    </Badge>
                  </div>
                  <span className="text-gray-500">/ {sub.duration}</span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {sub.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Купить подписку
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Посмотреть все подписки
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionsGrid;
