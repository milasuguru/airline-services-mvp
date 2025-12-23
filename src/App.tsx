import { useState } from "react";
import { services } from "./data/services";
import type { Service } from "./types/Service";
import ServiceCard from "./components/ServiceCard";
import Cart from "./components/Cart";

function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const handleAdd = (service: Service) => {
    setSelectedServices(prev => [...prev, service]);
  };

  const handleClear = () => setSelectedServices([]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Дополнительные услуги</h1>
        <p>Выберите необходимые услуги для вашего рейса</p>
      </header>

      <div className="services-grid">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} onAdd={handleAdd} />
        ))}
      </div>

      <Cart selectedServices={selectedServices} onClear={handleClear} />
    </div>
  );
}

export default App;
