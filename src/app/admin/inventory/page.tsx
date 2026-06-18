'use client';

import { useEffect, useState } from 'react';

interface FileItem {
  path: string;
  type: string;
  size?: number;
  relevance: 'core' | 'important' | 'optional' | 'unknown';
}

export default function InventoryPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/admin/inventory')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Carregando inventário...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>🧠 Control Center — Inventário do Sistema</h1>

      <div>
        <p>Total arquivos: {data.total}</p>
        <p>Core: {data.core}</p>
        <p>Optional: {data.optional}</p>
        <p>Unknown: {data.unknown}</p>
      </div>

      <hr />

      <h2>📦 Arquivos do Sistema</h2>

      <ul>
        {data.files.map((file: FileItem, i: number) => (
          <li key={i}>
            <b>[{file.relevance}]</b> {file.path}
          </li>
        ))}
      </ul>
    </div>
  );
}
