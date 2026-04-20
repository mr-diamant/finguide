import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContent {
  title: string;
  description: string;
}

interface ModalContextType {
  isOpen: boolean;
  content: ModalContent;
  openModal: (title: string, description: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ModalContent>({
    title: 'Консультация',
    description: 'Оставьте заявку, и мы свяжемся с вами в ближайшее время'
  });

  const openModal = (title: string, description: string) => {
    setContent({ title, description });
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
