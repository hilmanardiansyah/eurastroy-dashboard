import React from "react";
import Breadcrumb from "./Breadcrumb";
import ProjectCardList from "./ProjectCardList";
import SummarySection from "./SummarySection";
import TransactionHeaderTabs from "./TransactionHeaderTabs";
import TransactionTable from "./TransactionTable";

const MainContent = () => {
  return (
    <div className="flex-1 p-4">
      <Breadcrumb />
      <ProjectCardList />
      <SummarySection />
      <TransactionHeaderTabs />
      <TransactionTable />
    </div>
  );
};
export default MainContent;
