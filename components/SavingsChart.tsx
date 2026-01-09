import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Alte Ölheizung',
    Kosten: 4500,
    CO2: 8.5,
  },
  {
    name: 'Neue Pelletheizung',
    Kosten: 2100,
    CO2: 0.8,
  },
];

const SavingsChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-lg font-bold text-slate-900 mb-2">Vergleich: Jährliche Kosten & CO₂ (Beispiel)</h3>
      <p className="text-sm text-gray-500 mb-6">Basierend auf einem Einfamilienhaus, 150m², Bj. 1980.</p>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{fontSize: 12}} />
            <YAxis yAxisId="left" orientation="left" stroke="#0f172a" label={{ value: 'Kosten (€)', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" stroke="#059669" label={{ value: 'CO₂ (Tonnen)', angle: 90, position: 'insideRight' }} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="Kosten" fill="#0f172a" name="Heizkosten (€/Jahr)" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="right" dataKey="CO2" fill="#10b981" name="CO₂ Emissionen (t/Jahr)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-4 bg-emerald-50 rounded text-sm text-emerald-800 border border-emerald-100">
        <strong>Ergebnis:</strong> Über 50% Heizkostenersparnis und massive CO₂-Reduktion. Amortisation oft bereits nach ~6 Jahren durch hohe Förderung.
      </div>
    </div>
  );
};

export default SavingsChart;