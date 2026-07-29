import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReset?: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ isOpen, onClose, onReset }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="modal active" id="modalPremium" style={{ display: 'block', zIndex: 9999 }}>
      <div className="modal-sandbox" onClick={onClose}></div>
      <div className="modal-box">
        <div className="modal-body">
          <div className="close-modal" onClick={onClose}>
            <img src="/img/close.svg" alt="Закрыть" />
          </div>
          <div className="dialog-wrap">
            <div className="dialog-title" style={{ textAlign: 'center', marginBottom: '15px' }}>
              Доступно по подписке
            </div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <img src="/img/premium-overlay.svg" alt="Premium" style={{ width: '60px' }} />
            </div>
            <p className="gray-text" style={{ textAlign: 'center', marginBottom: '25px', fontSize: '15px' }}>
              Оформите подписку, чтобы получить неограниченный доступ ко всем материалам и упражнениям.
            </p>
            <div className="btns" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <a href="/checkout" className="btn btn-blue" style={{ width: '100%', maxWidth: '200px' }}>Оформить подписку</a>
              <div style={{ display: 'flex', gap: '10px' }}>
                {onReset && (
                  <button type="button" className="btn btn-gray" onClick={onReset}>Начать заново</button>
                )}
                <button type="button" className="btn btn-link" onClick={onClose}>Закрыть</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PremiumModal;
