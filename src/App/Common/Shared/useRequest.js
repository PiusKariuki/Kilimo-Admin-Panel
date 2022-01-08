import axios from "axios";
import React, { useState } from "react";
import { useStore } from "react-redux";

const useRequest = () => {
  const baseUrl = "https://kilimo-backend.herokuapp.com";
  const state = useStore();
  const request = axios.create({
    baseURL: baseUrl,
  });
  const tkn = state.getState()?.User?.tkn;
  request.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${tkn}`;
    return request;
  });

  return { request };
};

export default useRequest;
