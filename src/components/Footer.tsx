import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Zap" size={32} className="text-violet-400" />
              <span className="text-2xl font-bold">ПодпискиПро</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Самый выгодный способ получить доступ к любимым сервисам.
              Экономьте время и деньги с нашими дешевыми подписками.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Send" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Сервисы</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Netflix
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Spotify
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  YouTube Premium
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Adobe Creative
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Microsoft 365
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Центр помощи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Связаться с нами
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ПодпискиПро. Все права защищены.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Icon name="Shield" size={16} />
              <span>Безопасные платежи</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Icon name="Clock" size={16} />
              <span>Поддержка 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
