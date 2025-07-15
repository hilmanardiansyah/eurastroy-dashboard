import React from "react";

const SummarySection = () => {
  return (
    <section className="px-6 py-4 flex flex-col md:flex-row gap-4 text-xs text-[#1a1a1a]">
      {/* Kolom 1 */}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-2">
          <button className="bg-[#2a59ff] text-white rounded px-3 py-1.5 font-semibold">
            Расходы
          </button>
          <button className="border border-[#d9d9d9] rounded px-3 py-1.5 text-[#a0a6b0]">
            Пополнения
          </button>
          <button className="border border-[#d9d9d9] rounded px-3 py-1.5 text-[#a0a6b0]">
            Создать проект
          </button>
        </div>
        <div className="flex flex-col gap-2 border border-[#e5e7eb] rounded p-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <i className="far fa-file-alt text-[#a0a6b0] w-4"></i>
              <span>Всего контрактов на сумму</span>
            </div>
            <span className="font-semibold">5 278 000 000 Rp</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <i className="fas fa-credit-card text-[#a0a6b0] w-4"></i>
              <span>Всего оплачено клиентами</span>
            </div>
            <span className="font-semibold">320 000 000 Rp</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <i className="fas fa-arrow-right text-[#a0a6b0] w-4"></i>
              <span>Всего прямых расходов</span>
            </div>
            <span className="font-semibold">3 680 000 000 Rp</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <i className="fas fa-dollar-sign text-[#a0a6b0] w-4"></i>
              <span>Всего валовой прибыли</span>
            </div>
            <span className="font-semibold">1 598 000 000 Rp</span>
          </div>
        </div>
      </div>

      {/* Kolom 2 */}
      <div className="flex-1 flex flex-col gap-2 border border-[#e5e7eb] rounded p-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-balance-scale text-[#a0a6b0] w-4"></i>
            <span>Баланс клиентов</span>
          </div>
          <span className="font-semibold">1 598 000 000 Rp</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-balance-scale text-[#a0a6b0] w-4"></i>
            <span>Баланс компании</span>
          </div>
          <span className="font-semibold">5 278 000 000 Rp</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-balance-scale text-[#a0a6b0] w-4"></i>
            <span>Баланс компании и клиентов</span>
          </div>
          <span className="font-semibold">6 876 000 000 Rp</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-balance-scale text-[#a0a6b0] w-4"></i>
            <span>Баланс в банке</span>
            <button aria-label="Info" className="text-[#a0a6b0] text-xs ml-1">
              <i className="fas fa-question-circle"></i>
            </button>
          </div>
          <span className="font-semibold">6 870 000 000 Rp</span>
        </div>
      </div>

      {/* Kolom 3 */}
      <div className="flex-1 flex flex-col gap-2 border border-[#e5e7eb] rounded p-3 text-[#4a4a4a] text-xs">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-balance-scale w-4"></i>
            <span>Разница баланса</span>
          </div>
          <span>0 Rp</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-check-circle w-4"></i>
            <span>Выбрано на сумму</span>
          </div>
          <span>7 560 000 000 Rp</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-filter w-4"></i>
            <span>Выбран фильтр на сумму</span>
          </div>
          <span>12 600 000 000 Rp</span>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex-1 border border-[#e5e7eb] rounded p-2 flex items-center gap-3">
            <div className="flex flex-col text-xs">
              <span>Выполненный объем</span>
              <span className="font-semibold">1 319 500 000 Rp</span>
            </div>
            <div className="flex-1 h-2 rounded bg-[#d9d9d9] relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-2 bg-[#2a59ff]"
                style={{ width: "25%" }}
              ></div>
            </div>
            <span className="text-xs text-[#a0a6b0]">25%</span>
          </div>
        </div>
      </div>
      {/* Kolom 4 */}
      <div className="flex-1 border border-[#e5e7eb] rounded p-3 text-[#4a4a4a] text-xs flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-[11px]">Выполненный объем</span>
          <span className="font-semibold">1 319 500 000 Rp</span>
          <div className="h-2 bg-[#d9d9d9] rounded relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-2 bg-[#2a59ff]"
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
