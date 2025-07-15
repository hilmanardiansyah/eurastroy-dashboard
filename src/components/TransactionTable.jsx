import React from "react";

const TransactionTable = () => {
  return (
    <section className="px-6 py-4 overflow-x-auto">
      <table className="w-full text-xs border-collapse rounded overflow-hidden shadow-sm">
        <thead className="bg-[#1a2433] text-white">
          <tr>
            <th className="p-3 font-semibold">№</th>
            <th className="p-3 font-semibold">Наименование</th>
            <th className="p-3 font-semibold">Поставщик</th>
            <th className="p-3 font-semibold">Проект</th>
            <th className="p-3 font-semibold">Фонд</th>
            <th className="p-3 font-semibold">Категория</th>
            <th className="p-3 font-semibold">Сотрудник</th>
            <th className="p-3 font-semibold">Получатель</th>
            <th className="p-3 font-semibold">Цена за 1 ед.</th>
            <th className="p-3 font-semibold">Кол-во</th>
            <th className="p-3 font-semibold">Ед. изм.</th>
            <th className="p-3 font-semibold">Сумма оплаты</th>
            <th className="p-3 font-semibold">Дата оплаты</th>
            <th className="p-3 font-semibold">Документы</th>
            <th className="p-3 font-semibold">Настройки</th>
          </tr>
        </thead>
        <tbody className="bg-white text-[#1a1a1a]">
          {/* Baris Dummy */}
          <tr className="border-b border-[#e5e7eb] hover:bg-[#f9fafb]">
            <td className="p-3">1</td>
            <td className="p-3">Besi Beton Ulir D16</td>
            <td className="p-3">CV Bulana Makmur</td>
            <td className="p-3">PT Alex Estate</td>
            <td className="p-3">4.3.2.1</td>
            <td className="p-3">Материалы</td>
            <td className="p-3">Alex Sanbaev</td>
            <td className="p-3">BCA 134432</td>
            <td className="p-3">178 000 Rp</td>
            <td className="p-3">150</td>
            <td className="p-3">pcs</td>
            <td className="p-3 font-semibold text-[#2a59ff]">26 700 000 Rp</td>
            <td className="p-3">23.05.2025</td>
            <td className="p-3">
              <i className="fas fa-file-alt text-[#a0a6b0]"></i>
            </td>
            <td className="p-3">
              <i className="fas fa-cog text-[#a0a6b0] cursor-pointer"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TransactionTable;
