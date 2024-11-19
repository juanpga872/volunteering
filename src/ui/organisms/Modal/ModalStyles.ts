"use client"
import styled from 'styled-components';

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Mayor opacidad para un efecto más pronunciado */
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 40%; /* Más espacio para contenido en pantallas grandes */
  max-width: 600px;
  padding: 32px;
  border-radius: 12px; /* Bordes más redondeados */
  position: relative;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra suave */
  animation: scaleUp 0.3s ease-in-out;

  @keyframes scaleUp {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 90%; /* Diseño responsivo para pantallas pequeñas */
    padding: 24px;
  }
`;

export const CloseButtonStyled = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px; /* Área de clic más amplia */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5; /* Fondo gris claro para contraste */
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  color: #000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Efecto hover suave */
  }

  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.3); /* Indicación clara de foco */
  }
`;
