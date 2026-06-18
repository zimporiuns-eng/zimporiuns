'use client';

import { useEffect, useState } from 'react';

export default function ControlCenterDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/admin/system/metrics')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Carregando sistema...</p>;

  return (
    <div style={{ padding: 20, fontFamily: 'monospace' }}>
      <h1>🧠 Zimpóriuns Control Center</h1>

      <h2>📊 Métricas do Sistema</h2>

      <p>Total de arquivos: {data.totalFiles}</p>
      <p>Core (crítico): {data.core}</p>
      <p>Opcional: {data.optional}</p>
      <p>Desconhecido: {data.unknown}</p>

      <hr />

      <h3>⚠️ Risk Score: {data.riskScore}%</h3>
      <h3>Status: {data.systemHealth}</h3>
    </div>
  );
}
