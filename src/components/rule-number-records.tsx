import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

const chartData = [
  {
    rule: "35.072",
    "Cart Abandonment": 140,
    "Post Purchase": 0,
    "Site Abandonment": 0,
    "Email My Cart": 0,
    "Visit Summary": 0,
  },
  {
    rule: "34.075",
    "Cart Abandonment": 0,
    "Post Purchase": 135,
    "Site Abandonment": 0,
    "Email My Cart": 0,
    "Visit Summary": 0,
  },
  {
    rule: "35.015",
    "Cart Abandonment": 0,
    "Post Purchase": 0,
    "Site Abandonment": 130,
    "Email My Cart": 0,
    "Visit Summary": 0,
  },
  {
    rule: "35.018",
    "Cart Abandonment": 110,
    "Post Purchase": 0,
    "Site Abandonment": 0,
    "Email My Cart": 0,
    "Visit Summary": 0,
  },
  {
    rule: "35.017",
    "Cart Abandonment": 0,
    "Post Purchase": 0,
    "Site Abandonment": 0,
    "Email My Cart": 0,
    "Visit Summary": 105,
  },
  {
    rule: "35.019",
    "Cart Abandonment": 0,
    "Post Purchase": 0,
    "Site Abandonment": 0,
    "Email My Cart": 75,
    "Visit Summary": 0,
  },
  {
    rule: "35.022",
    "Cart Abandonment": 0,
    "Post Purchase": 0,
    "Site Abandonment": 0,
    "Email My Cart": 95,
    "Visit Summary": 0,
  },
  {
    rule: "35.023",
    "Cart Abandonment": 0,
    "Post Purchase": 0,
    "Site Abandonment": 0,
    "Email My Cart": 0,
    "Visit Summary": 70,
  },
  {
    rule: "35.024",
    "Cart Abandonment": 0,
    "Post Purchase": 0,
    "Site Abandonment": 0,
    "Email My Cart": 0,
    "Visit Summary": 65,
  },
];

const chartConfig = {
  "Cart Abandonment": {
    label: "Cart Abandonment",
    color: "#87CEEB",
  },
  "Email My Cart": {
    label: "Email My Cart",
    color: "#2F4F4F",
  },
  "Post Purchase": {
    label: "Post Purchase",
    color: "#9ACD32",
  },
  "Site Abandonment": {
    label: "Site Abandonment",
    color: "#90EE90",
  },
  "Visit Summary": {
    label: "Visit Summary",
    color: "#DA70D6",
  },
} satisfies ChartConfig;

export function RuleNumberRecords() {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-gray-700">
            Count of Records by Rule_number and Email_type
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-8">
            <div className="flex-1">
              <ChartContainer config={chartConfig} className="h-[250px]">
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  barCategoryGap="20%"
                >
                  <XAxis
                    type="number"
                    domain={[0, 180]}
                    tickCount={7}
                    axisLine={true}
                    tickLine={true}
                  />
                  <YAxis
                    dataKey="rule"
                    type="category"
                    tickLine={true}
                    tickMargin={10}
                    axisLine={true}
                    width={60}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const activeData = payload.find((p) => p.value);
                        if (activeData) {
                          return (
                            <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                              <p className="font-medium text-gray-800">{`Rule: ${label}`}</p>
                              <p className="text-sm text-gray-600">{`Email Type: ${activeData.dataKey}`}</p>
                              <p className="text-sm text-gray-600">{`Count: ${activeData.value}`}</p>
                            </div>
                          );
                        }
                      }
                      return null;
                    }}
                  />
                  {Object.entries(chartConfig).map(([emailType, config]) => (
                    <Bar
                      key={emailType}
                      dataKey={emailType}
                      fill={config.color}
                      radius={[0, 2, 2, 0]}
                      barSize={20}
                    />
                  ))}
                </BarChart>
              </ChartContainer>
            </div>

            <div className="w-48 bg-gray-50 p-4 rounded">
              <h3 className="text-sm font-medium text-gray-600 mb-3">
                Email Type
              </h3>
              <div className="space-y-2">
                {Object.entries(chartConfig).map(([emailType, config]) => (
                  <div key={emailType} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: config.color }}
                    />
                    <span className="text-xs text-gray-600">
                      {config.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
