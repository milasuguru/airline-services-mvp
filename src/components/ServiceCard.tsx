import type { Service } from "../types/Service";

interface Props {
  service: Service;
  onAdd: (service: Service) => void;
}

const ServiceCard = ({ service, onAdd }: Props) => (
  <div className="service-card">
    <h3>{service.title}</h3>
    <p className="service-description">{service.description}</p>
    <div className="service-footer">
      <span className="price-tag">{service.price} ₽</span>
      <button className="add-btn" onClick={() => onAdd(service)}>Добавить</button>
    </div>
  </div>
);

export default ServiceCard;
