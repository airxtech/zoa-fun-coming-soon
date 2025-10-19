'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      // Launch date: Set to 30 days from now
      const launchDate = new Date();
      launchDate.setDate(launchDate.getDate() + 30);

      const now = new Date().getTime();
      const targetDate = launchDate.getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center gap-4">
        {[0, 0, 0, 0].map((_, i) => (
          <div key={i} className="text-center">
            <div
              className="w-20 h-20 rounded-lg flex items-center justify-center mb-2"
              style={{
                background: 'linear-gradient(135deg, rgba(123, 44, 191, 0.2), rgba(59, 130, 246, 0.2))',
                border: '1px solid rgba(123, 44, 191, 0.3)',
              }}
            >
              <span className="text-2xl font-bold text-white">--</span>
            </div>
            <p className="text-sm" style={{ color: '#6b7280' }}>unit</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4">
      <div className="text-center">
        <div
          className="w-20 h-20 rounded-lg flex items-center justify-center mb-2"
          style={{
            background: 'linear-gradient(135deg, rgba(123, 44, 191, 0.2), rgba(59, 130, 246, 0.2))',
            border: '1px solid rgba(123, 44, 191, 0.3)',
          }}
        >
          <span className="text-2xl font-bold" style={{ color: '#7B2CBF' }}>{String(timeLeft.days).padStart(2, '0')}</span>
        </div>
        <p className="text-sm" style={{ color: '#6b7280' }}>Days</p>
      </div>
      <div className="text-center">
        <div
          className="w-20 h-20 rounded-lg flex items-center justify-center mb-2"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(123, 44, 191, 0.2))',
            border: '1px solid rgba(59, 130, 246, 0.3)',
          }}
        >
          <span className="text-2xl font-bold" style={{ color: '#3B82F6' }}>{String(timeLeft.hours).padStart(2, '0')}</span>
        </div>
        <p className="text-sm" style={{ color: '#6b7280' }}>Hours</p>
      </div>
      <div className="text-center">
        <div
          className="w-20 h-20 rounded-lg flex items-center justify-center mb-2"
          style={{
            background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(59, 130, 246, 0.2))',
            border: '1px solid rgba(74, 222, 128, 0.3)',
          }}
        >
          <span className="text-2xl font-bold" style={{ color: '#4ADE80' }}>{String(timeLeft.minutes).padStart(2, '0')}</span>
        </div>
        <p className="text-sm" style={{ color: '#6b7280' }}>Minutes</p>
      </div>
      <div className="text-center">
        <div
          className="w-20 h-20 rounded-lg flex items-center justify-center mb-2"
          style={{
            background: 'linear-gradient(135deg, rgba(123, 44, 191, 0.2), rgba(74, 222, 128, 0.2))',
            border: '1px solid rgba(123, 44, 191, 0.3)',
          }}
        >
          <span className="text-2xl font-bold" style={{ color: '#7B2CBF' }}>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
        <p className="text-sm" style={{ color: '#6b7280' }}>Seconds</p>
      </div>
    </div>
  );
};
