import { EChartsOption, getInstanceByDom, init } from "echarts";
import { useEffect, useRef } from "react";

export type Props = {
  data: EChartsOption;
};

export function Chart({ data }: Props) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) {
      return;
    }

    const chart = init(chartRef.current);

    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener("resize", resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, []);

  useEffect(() => {
    if (!chartRef.current) {
      return;
    }

    const chart = getInstanceByDom(chartRef.current);
    chart?.setOption(data);
  }, [data]);

  return <div ref={chartRef} className="w-full h-full" />;
}
