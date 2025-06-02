import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Shield",
    title: "Полная безопасность",
    description:
      "Все подписки легальны и соответствуют условиям сервисов. Ваши данные под надежной защитой.",
  },
  {
    icon: "Zap",
    title: "Мгновенная активация",
    description:
      "Получите доступ к подписке сразу после оплаты. Никаких ожиданий и очередей.",
  },
  {
    icon: "DollarSign",
    title: "Экономия до 70%",
    description:
      "Платите в разы меньше за те же сервисы. Сэкономленные деньги потратьте на что-то важное.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description:
      "Наша команда готова помочь в любое время. Решаем любые вопросы быстро и эффективно.",
  },
  {
    icon: "RefreshCw",
    title: "Автопродление",
    description:
      "Настройте автоматическое продление, чтобы никогда не терять доступ к любимым сервисам.",
  },
  {
    icon: "Gift",
    title: "Бонусы и скидки",
    description:
      "Накапливайте баллы за покупки и получайте дополнительные скидки на новые подписки.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы делаем доступ к любимым сервисам простым, безопасным и выгодным
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Icon
                      name={benefit.icon as any}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Готовы начать экономить?</h3>
          <p className="text-xl mb-6 text-blue-100">
            Присоединяйтесь к 50,000+ довольных клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 text-blue-200">
              <Icon name="Star" size={20} className="text-yellow-400" />
              <span>4.9 из 5 звезд</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-200">
              <Icon name="Users" size={20} />
              <span>50K+ клиентов</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-200">
              <Icon name="Award" size={20} />
              <span>Лучший сервис 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
