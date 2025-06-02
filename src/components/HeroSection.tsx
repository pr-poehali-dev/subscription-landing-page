import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-sky-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
              <Icon name="TrendingDown" size={16} />
              <span>Экономия до 70%</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Дешевые подписки
            <br />
            <span className="text-yellow-400">для всех сервисов</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Netflix, Spotify, YouTube Premium и 50+ других сервисов по самым
            выгодным ценам. Легально и безопасно.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4"
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              Выбрать подписку
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-blue-200">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={24} />
              <span>Безопасно</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={24} />
              <span>Мгновенно</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={24} />
              <span>50K+ клиентов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
