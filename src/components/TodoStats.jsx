export default function TodoStats({ stats }) {
  const { total, active, completed } = stats;
  
  return (
    <div className="glass-card p-4 mb-5">
      <h3 className="text-lg font-semibold mb-2 text-teal-800">Todo Stats</h3>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="glass p-3 rounded-lg">
          <div className="text-2xl font-bold text-gray-800">{total}</div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
        <div className="glass p-3 rounded-lg">
          <div className="text-2xl font-bold text-teal-600">{active}</div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="glass p-3 rounded-lg">
          <div className="text-2xl font-bold text-sky-600">{completed}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
      </div>
    </div>
  );
}