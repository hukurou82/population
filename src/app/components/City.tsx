"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPrefectures } from "../api/CityList";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

const City = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  const fetchData = async () => {
    const data = await getPrefectures();
    setPrefectures(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>都道府県一覧</h1>
      <ul>
        {prefectures.map((prefecture) => (
          <li key={prefecture.prefCode}>{prefecture.prefName}</li>
        ))}
      </ul>
    </div>
  );
};

export default City;
