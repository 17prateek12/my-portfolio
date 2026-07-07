import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Hi Prateek, I saw your portfolio and would love to connect!",
  className = ""
}) => {
  const formattedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-btn-anchor ${className}`}
    >
      <FaWhatsapp style={{ fontSize: '1.5rem' }} />
      <span>Chat Directly via WhatsApp</span>
    </a>
  );
};
