"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("../../../ui/IssueFrom").then((module) => module.default), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
const IssueFormData = () => {
  return (

      <IssueForm />
   
  );
};

export default IssueFormData;
