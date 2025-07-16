import React from "react";

// Dummy data bisa nanti diambil dari props / API
const projects = [
  {
    name: "PT Alex Estate Production",
    contract: "001-06/IV/MBI-2025",
    date: "25.01.2024 - 25.01.2025",
    greenProgress: "28%",
    redProgress: "150%",
    cost: "5 000 000 000 Rp",
    paid: "340 000 000 Rp",
    expenses: "3 500 000 000 Rp",
    profit: "1 500 000 000 Rp",
    balance: "-1 360 000 000 Rp",
    fineToday: "0 Rp",
    fineWeek: "50 000 000 Rp",
    fraud: "500 000 000 Rp",
    dark: true,
  },
  {
    name: "PT Amadeus Rock Reality",
    contract: "002-08/IV/MBI-2024",
    date: "25.03.2024 - 25.08.2024",
    greenProgress: "70%",
    redProgress: "100%",
    cost: "278 000 000 Rp",
    paid: "180 000 000 Rp",
    expenses: "180 000 000 Rp",
    profit: "98 000 000 Rp",
    balance: "-98 000 000 Rp",
    fineToday: "0 Rp",
    fineWeek: "278 000 Rp",
    fraud: "27 900 000 Rp",
    dark: false,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full sm:w-[300px] md:w-[320px] flex-shrink-0 flex flex-col border border-[#e5e7eb] bg-white rounded-md overflow-hidden shadow-sm">
      {/* Header: Nama PT */}
      <div className="bg-[#1a2433] text-white text-xs font-semibold px-4 py-2 flex justify-between items-center">
        <span>{project.name}</span>
        <button className="text-[#a0a6b0] hover:text-white">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
      {/* Isi Card */}
      <div className="p-4 flex flex-col gap-3 text-[#1a1a1a]">
        <div className="text-[10px] flex justify-between font-normal">
          <span>Контракт</span>
          <span>{project.contract}</span>
        </div>
        <div className="text-[10px] flex justify-between font-normal text-[#a0a6b0]">
          <span>Старт / завершение</span>
          <span>{project.date}</span>
        </div>
        <div>
          <div className="h-1 rounded bg-[#d1fae5] relative overflow-hidden mb-2">
            <div
              className="absolute top-0 left-0 h-1 bg-[#16a34a]"
              style={{ width: project.greenProgress || "50%" }}
            ></div>
          </div>
          <div className="text-[10px] font-semibold mb-1">BAST</div>
          {/* Progress Merah */}
          <div className="h-1 rounded bg-[#fee2e2] relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-1 bg-[#dc2626]"
              style={{ width: project.redProgress || "20%" }}
            ></div>
          </div>
        </div>

        <div className="text-[10px] flex justify-between font-normal">
          <span>Всего - прошло - осталось</span>
          <span className="flex gap-1 text-[#a0a6b0]">365 215 150</span>
        </div>
        <div className="flex flex-col gap-1 text-[10px] font-normal">
          <div className="flex items-center gap-2">
            <i className="far fa-file-alt w-4 text-[#a0a6b0]"></i>
            <span className="flex-1">Стоимость</span>
            <span>{project.cost}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="far fa-credit-card w-4 text-[#a0a6b0]"></i>
            <span className="flex-1">Оплачено</span>
            <span>{project.paid}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-arrow-right w-4 text-[#a0a6b0]"></i>
            <span className="flex-1">Прямые расходы</span>
            <span>{project.expenses}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-dollar-sign w-4 text-[#a0a6b0]"></i>
            <span className="flex-1">Валовая прибыль</span>
            <span>{project.profit}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-balance-scale w-4 text-[#a0a6b0]"></i>
            <span className="flex-1">Баланс</span>
            <span>{project.balance}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-exclamation-triangle w-4 text-[#a0a6b0]"></i>
            <span className="flex-1">Штраф на сегодня</span>
            <span>{project.fineToday}</span>
          </div>
          <div className="flex items-center gap-2 text-[#5a5f6a]">
            <i className="fas fa-exclamation-triangle w-4"></i>
            <span className="flex-1">За 7 дней просрочки</span>
            <span>{project.fineWeek}</span>
          </div>
          <div className="flex items-center gap-2 text-[#5a5f6a]">
            <i className="fas fa-exclamation-triangle w-4"></i>
            <span className="flex-1">Махинации</span>
            <span>{project.fraud}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProjectCardList = () => {
  return (
    <section className="px-4 py-4 overflow-x-auto">
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectCardList;
