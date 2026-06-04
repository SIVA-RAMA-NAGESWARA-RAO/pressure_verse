import React from 'react';
export default function GlassCard({ children, className = '' }) {
  return <section className={`glass-card ${className}`}>{children}</section>;
}

