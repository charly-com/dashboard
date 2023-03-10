import React from "react";
import "./home.css";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import Chart from "../components/chart/chart";
import { userData } from "../dummyData.js";
import WidgetSm from "../components/widgetSm/WidgetSm";
import WidgetLg from "../components/widgetLg/WidgetLg";

export default function home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
