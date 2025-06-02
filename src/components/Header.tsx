import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={32} className="text-violet-600" />
            <span className="text-2xl font-bold text-gray-900">
              ПодпискиПро
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#subscriptions"
              className="text-gray-600 hover:text-violet-600 transition-colors"
            >
              Подписки
            </a>
            <a
              href="#benefits"
              className="text-gray-600 hover:text-violet-600 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-violet-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Войти
            </Button>
            <Button className="bg-violet-600 hover:bg-violet-700">
              Начать экономить
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
