import React from "react";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	Legend,
} from "recharts";

const colors = [
	"#176AE5",
	"#00C49F",
	"#FFBB28",
	"#FF8042",
	"#FF6384",
	"#36A2EB",
];

const getPath = (x, y, width, height) => {
	return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
		x + width / 2
	},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
		x + width
	},${y + height}
    Z`;
};

const TriangleBar = (props) => {
	const { fill, x, y, width, height } = props;
	return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const BarCharts = ({ data }) => {
	if (!data || data.length === 0) {
		return (
			<div className="w-full h-[300px] p-6 bg-white rounded-xl shadow-md flex items-center justify-center">
				<p className="text-lg text-gray-500">No data available for chart</p>
			</div>
		);
	}

	return (
		<div className="w-full h-[300px] p-6 bg-white rounded-xl shadow-md">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={data}
					margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
					<XAxis
						dataKey="name"
						tick={{ fill: "#6B7280" }}
						axisLine={{ stroke: "#E5E7EB" }}
					/>
					<YAxis tick={{ fill: "#6B7280" }} axisLine={{ stroke: "#E5E7EB" }} />
					<Tooltip
						contentStyle={{
							backgroundColor: "#fff",
							border: "1px solid #E5E7EB",
							borderRadius: "8px",
							boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
						}}
					/>
					<Legend />
					<Bar
						dataKey="consultation_fee"
						name="Consultation Fee"
						color="#0F0F0F"
						shape={<TriangleBar />}
						label={{
							position: "top",
							fill: "#6B7280",
							fontSize: 12,
						}}
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={colors[index % colors.length]}
							/>
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default BarCharts;
