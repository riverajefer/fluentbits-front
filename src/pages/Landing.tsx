import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Users, 
  Star,
  Menu,
  X,
  Moon,
  Sun
} from 'lucide-react';
import { Button } from '../components/ui/Button';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-yellow-400" />,
      title: "Seguridad Avanzada",
      description: "Protección de datos con encriptación de extremo a extremo y autenticación JWT."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600 dark:text-yellow-400" />,
      title: "Súper Rápido",
      description: "Interfaz optimizada con React y Vite para una experiencia ultrarrápida."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600 dark:text-yellow-400" />,
      title: "Colaboración",
      description: "Trabaja en equipo con herramientas de colaboración en tiempo real."
    }
  ];

  const testimonials = [
    {
      name: "Ana García",
      role: "Directora de Producto",
      content: "Esta plataforma ha revolucionado la forma en que trabajamos. Increíblemente intuitiva.",
      rating: 5
    },
    {
      name: "Carlos López",
      role: "Desarrollador Senior",
      content: "La mejor experiencia de usuario que he visto. Rápida, segura y confiable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Theme toggle button */}
            <button
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-full border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">MiApp</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {localStorage.getItem('token') && (
                <Link to="/add-word" className="text-blue-600 dark:text-yellow-400 hover:underline transition-colors">
                  Agregar palabra
                </Link>
              )}
              <a href="#features" className="text-gray-600 hover:text-gray-500 dark:text-gray-200 transition-colors">
                Características
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-500 dark:text-gray-200 transition-colors">
                Testimonios
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
                Iniciar Sesión
              </Link>
              <Link to="/register">
                <Button>Registrarse</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Características
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Testimonios
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Precios
              </a>
              <div className="border-t pt-3 mt-3">
                <Link to="/login" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                  Iniciar Sesión
                </Link>
                <div className="px-3 py-2">
                  <Link to="/register">
                    <Button className="w-full">Registrarse</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Potencia tu aprendizaje
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}con IA y repetición inteligente
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-yellow-100 max-w-3xl mx-auto">
              Aplicación web de aprendizaje espaciado con IA. Implementa algoritmos de repetición inteligente para optimizar la retención de conocimiento y ayudarte a aprender de forma más eficiente y duradera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-2 text-lg">
                  Comenzar Gratis
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-2 text-lg"
              >
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué elegir FluentBits?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Descubre cómo la inteligencia artificial y la repetición espaciada pueden transformar tu aprendizaje y ayudarte a retener el conocimiento de manera efectiva.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-xl text-gray-600">
              Miles de profesionales ya confían en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-400">MiApp</span>
              </div>
              <p className="text-gray-400">
                Plataforma de aprendizaje espaciado impulsada por IA para maximizar la retención de conocimiento.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estado del servicio</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Acerca de</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MiApp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;