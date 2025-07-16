import React from "react";
import Breadcrumb from "./Breadcrumb";
import ProjectCardList from "./ProjectCardList";
import SummarySection from "./SummarySection";
import TransactionHeaderTabs from "./TransactionHeaderTabs";
import TransactionTable from "./TransactionTable";

const MainContent = () => {
  return (
    <div className="flex-1 p-4 max-w-screen-2xl mx-auto">
      <Breadcrumb />
      <ProjectCardList />
      <SummarySection />
      <TransactionHeaderTabs />
      <TransactionTable />
    </div>
  );
};
export default MainContent;
