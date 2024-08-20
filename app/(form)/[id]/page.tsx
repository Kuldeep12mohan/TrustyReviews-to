"use client";
import Form from "@/components/Form";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Form id={params.id} />
    </div>
  );
};

export default page;
