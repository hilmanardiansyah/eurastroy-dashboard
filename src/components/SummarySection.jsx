import React from "react";

const SummarySection = () => {
  return (
    <section className="px-4 sm:px-6 py-4 text-xs text-[#1a1a1a]">
      {/* Tombol Responsif */}
      <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 mb-4 w-full">
        <button className="w-full sm:w-auto bg-[#2a59ff] text-white rounded px-3 py-1.5 font-semibold">
          Расходы
        </button>
        <button className="w-full sm:w-auto border border-[#d9d9d9] rounded px-3 py-1.5 text-[#a0a6b0]">
          Пополнения
        </button>
        <button className="w-full sm:w-auto border border-[#d9d9d9] rounded px-3 py-1.5 text-[#a0a6b0]">
          Создать проект
        </button>
      </div>

      {/* Kartu Ringkasan */}
      <div className="border border-[#e5e7eb] rounded p-4 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Bagian 1 */}
        <div className="flex flex-col gap-2">
          {[
            {
              icon: "far fa-file-alt",
              label: "Всего контрактов на сумму",
              value: "5 278 000 000 Rp",
            },
            {
              icon: "fas fa-credit-card",
              label: "Всего оплачено клиентами",
              value: "320 000 000 Rp",
            },
            {
              icon: "fas fa-arrow-right",
              label: "Всего прямых расходов",
              value: "3 680 000 000 Rp",
            },
            {
              icon: "fas fa-dollar-sign",
              label: "Всего валовой прибыли",
              value: "1 598 000 000 Rp",
            },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <i className={`${item.icon} text-[#a0a6b0] w-4`}></i>
                <span>{item.label}</span>
              </div>
              <span className="font-semibold">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Bagian 2 */}
        <div className="flex flex-col gap-2">
          {[
            {
              icon: "fas fa-balance-scale",
              label: "Баланс клиентов",
              value: "1 598 000 000 Rp",
            },
            {
              icon: "fas fa-balance-scale",
              label: "Баланс компании",
              value: "5 278 000 000 Rp",
            },
            {
              icon: "fas fa-balance-scale",
              label: "Баланс компании и клиентов",
              value: "6 876 000 000 Rp",
            },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <i className={`${item.icon} text-[#a0a6b0] w-4`}></i>
                <span>{item.label}</span>
              </div>
              <span className="font-semibold">{item.value}</span>
            </div>
          ))}

          {/* Baris terakhir dengan tombol info */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <i className="fas fa-balance-scale text-[#a0a6b0] w-4"></i>
              <span>Баланс в банке</span>
              <button className="text-[#a0a6b0] text-xs ml-1">
                <i className="fas fa-question-circle"></i>
              </button>
            </div>
            <span className="font-semibold">6 870 000 000 Rp</span>
          </div>
        </div>

        {/* Bagian 3 */}
        <div className="flex flex-col gap-2">
          {[
            {
              icon: "fas fa-balance-scale",
              label: "Разница баланса",
              value: "0 Rp",
            },
            {
              icon: "fas fa-check-circle",
              label: "Выбрано на сумму",
              value: "7 560 000 000 Rp",
            },
            {
              icon: "fas fa-filter",
              label: "Выбран фильтр на сумму",
              value: "12 600 000 000 Rp",
            },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <i className={`${item.icon} text-[#a0a6b0] w-4`}></i>
                <span>{item.label}</span>
              </div>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Bagian 4 - Progress */}
        <div className="flex flex-col justify-between gap-2">
          <div className="flex items-center gap-2">
            <i className="fas fa-chart-bar w-4 text-[#a0a6b0]"></i>
            <span className="text-[11px]">Выполненный объем</span>
          </div>
          <span className="font-semibold">1 319 500 000 Rp</span>
          <div className="h-2 bg-[#d9d9d9] rounded relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-2 bg-[#16a34a]"
              style={{ width: "25%" }}
            ></div>
          </div>
          <span className="text-right text-[#a0a6b0] text-[11px]">25%</span>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
