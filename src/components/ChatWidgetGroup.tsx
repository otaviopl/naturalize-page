"use client";

import { useEffect, useState, useRef } from "react";
import ChatBalloon from "./ChatBalloon";
import ImageWidget from "./ImageWidget";

const APPEAR_DELAY = 10000; // 10 segundos
const VISIBLE_TIME = 3 * 60 * 1000; // 3 minutos

export default function ChatWidgetGroup() {
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setShouldRender(true);
      setVisible(true);
      closeTimerRef.current = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setShouldRender(false), 500);
      }, VISIBLE_TIME);
    }, APPEAR_DELAY);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setShouldRender(false), 500);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  if (!shouldRender) return null;

  return (
    <>
      <ChatBalloon visible={visible} onClose={handleClose} />
      {visible && (
        <ImageWidget
          imageSrc="/mayuri.jpeg"
          alt="Logo Naturalize"
          href="https://wa.me/551633711212"
          backgroundColor="#1976d2"
          hoverColor="#1565c0"
          position={0}
        />
      )}
    </>
  );
} 