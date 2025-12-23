import type { Service } from "../types/Service";

interface Props {
  selectedServices: Service[];
  onClear: () => void;
}

function Cart({ selectedServices, onClear }: Props) {
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);

  return (
    <section className="cart-widget">
      <div className="cart-info">
        <h4>Выбранные услуги</h4>
        <p>{selectedServices.length} усл.</p>
        <div className="cart-total">{total} ₽</div>
      </div>
      <div className="cart-buttons">
        <button 
          className="checkout-btn"
          disabled={selectedServices.length === 0}
          onClick={() => alert('Заказ оформлен!')}
        >
          Оформить заказ
        </button>
        <button 
          className="clear-button"
          onClick={onClear}
        >
          Сбросить выбор
        </button>
      </div>
    </section>
  );
}

export default Cart;
