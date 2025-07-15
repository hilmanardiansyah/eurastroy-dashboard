import React from "react";

const TransactionHeaderTabs = () => {
  return (
    <section className="px-6 pt-4 pb-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 text-xs">
        <button className="bg-[#2a59ff] text-white rounded px-3 py-1.5">
          Все транзакции
        </button>
        <button className="border border-[#d9d9d9] text-[#4a4a4a] rounded px-3 py-1.5 hover:text-[#2a59ff]">
          Оплаченные
        </button>
        <button className="border border-[#d9d9d9] text-[#4a4a4a] rounded px-3 py-1.5 hover:text-[#2a59ff]">
          Подтвержденные
        </button>
        <button className="border border-[#d9d9d9] text-[#4a4a4a] rounded px-3 py-1.5 hover:text-[#2a59ff]">
          В ожидании
        </button>
        <button className="bg-[#e7f0ff] text-[#2a59ff] rounded px-3 py-1.5">
          Создать транзакцию
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 text-xs">
        <button className="border border-[#d9d9d9] px-3 py-1.5 rounded text-[#4a4a4a] hover:bg-[#f3f3f3]">
          EXPORT
        </button>
        <button className="border border-[#d9d9d9] px-3 py-1.5 rounded text-[#4a4a4a] hover:bg-[#f3f3f3]">
          IMPORT
        </button>
      </div>
    </section>
  );
};

export default TransactionHeaderTabs;
