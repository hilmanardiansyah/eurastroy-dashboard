import React, { useState } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuId) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const Section = ({ title, items }) => (
    <div>
      <p className="uppercase text-[#64748b] mb-3 select-none">{title}</p>
      <ul className="space-y-1">
        {items.map((item) =>
          item.submenu ? (
            <li key={item.id}>
              <button
                onClick={() => toggleMenu(item.id)}
                className="flex items-center gap-2 text-[#94a3b8] hover:text-white cursor-pointer w-full"
              >
                <i className={`fas ${item.icon} text-xs`} />
                <span>{item.title}</span>
                <i className="fas fa-chevron-down ml-auto text-xs" />
              </button>
              <div
                className={`pl-6 space-y-1 ${
                  openMenus[item.id] ? "" : "hidden"
                }`}
              >
                {item.submenu.map((sub, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block hover:text-white cursor-pointer text-[#94a3b8]"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </li>
          ) : (
            <li key={item.title}>
              <a
                href="#"
                className="flex items-center gap-2 text-[#94a3b8] hover:text-white cursor-pointer"
              >
                <i className={`fas ${item.icon} text-xs`} />
                <span>{item.title}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );

  const sections = [
    {
      title: "Финансовый департамент",
      items: [
        { title: "Транзакции", icon: "fa-sync-alt" },
        { title: "Прямые расходы / доходы", icon: "fa-arrow-right" },
        { title: "Операционные расходы", icon: "fa-cogs" },
        { title: "Календарь отчетов", icon: "fa-calendar-alt" },
      ],
    },
    {
      title: "Технический департамент",
      items: [
        {
          id: "tech-submenu",
          title: "Управление проектами",
          icon: "fa-cogs",
          submenu: [
            "Проекты",
            "Склад",
            "Поставщики",
            "Рабочие",
            "BAST",
            "PBG / SLF / HGB",
          ],
        },
      ],
    },
    {
      title: "HR Департамент",
      items: [
        {
          id: "hr-submenu",
          title: "Панель руководителя",
          icon: "fa-user",
          submenu: [
            "Финансовый обзор",
            "Хронология проекта",
            "Статус сотрудников",
          ],
        },
      ],
    },
    {
      title: "Критический департамент",
      items: [
        {
          id: "critical-submenu",
          title: "Критический департамент",
          icon: "fa-exclamation-triangle",
          submenu: ["Пункт 1", "Пункт 2"],
        },
      ],
    },
    {
      title: "Операционный стратег",
      items: [
        {
          id: "ops-submenu",
          title: "Панель руководителя",
          icon: "fa-user-tie",
          submenu: [
            "Финансовый обзор",
            "Хронология проекта",
            "Статус сотрудников",
          ],
        },
      ],
    },
  ];

  return (
    <>
      {/* Overlay untuk mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 md:static bg-[#1e293b] w-64 min-h-screen transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:flex flex-col text-[#94a3b8] select-none`}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#334155]">
          <button
            aria-label="Close Menu"
            onClick={onClose}
            className="text-white text-xl md:hidden"
          >
            <i className="fas fa-times"></i>
          </button>
          <span className="text-white font-semibold text-sm tracking-wide">
            EURASTROY V 1.0
          </span>
        </div>

        <nav className="flex flex-col flex-grow overflow-y-auto px-5 pt-6 pb-8 space-y-6 text-xs font-semibold">
          {sections.map((section, idx) => (
            <Section key={idx} {...section} />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
