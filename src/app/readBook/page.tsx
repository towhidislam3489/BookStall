'use client'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    BarShapeProps,
    LabelList,
    Label,
    LabelProps,
    Tooltip,
} from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';
import { useContext } from 'react';
import { BookContext } from '@/component/context/BookContext';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];
const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[index % colors.length];

    return (
        <path
            strokeWidth={props.isActive ? 5 : 0}
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke={color}
            fill={color}
            style={{
                transition: 'stroke-width 0.3s ease-out',
            }}
        />
    );
};
const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
};
const ReadList = () => {
    // #region Sample data
    const { readlist } = useContext(BookContext)
    const data = readlist.map(v => ({ name: v.bookName, page: v.totalPages, pv: 1, amt: 1 }))

    return (
        <div >
            <div className="">
                {readlist.length > 0 ? <BarChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={data}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                    className="max-w-[80%] mx-auto mt-20"
                >
                    <CartesianGrid />
                    <Tooltip cursor={{ fillOpacity: 0.5 }} />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Bar dataKey="page" shape={TriangleBar} activeBar>
                        <LabelList content={CustomColorLabel} position="top" />
                    </Bar>
                    {/* <RechartsDevtools /> */}
                </BarChart> : <div className="max-w-[80%] mx-auto text-center items-center mt-20"> No read book Added </div>}
            </div>
        </div>
    );
};

export default ReadList;