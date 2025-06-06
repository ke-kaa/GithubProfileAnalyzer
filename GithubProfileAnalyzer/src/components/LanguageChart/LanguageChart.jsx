import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { fetchRepoLanguages } from '../../services/githubService';

export default function LanguageChart({ user, repo }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const pieChartColors = [
        '#4E79A7', 
        '#F28E2B', 
        '#E15759', 
        '#76B7B2', 
        '#59A14F', 
        '#EDC948', 
        '#B07AA1'  
    ];

    useEffect(() => {
        if (!user || !repo) return;
        setLoading(true);
        setError(null);
        const languagesUrl = `https://api.github.com/repos/${user}/${repo}/languages`;
        fetchRepoLanguages(languagesUrl)
            .then(languages => {
                const total = Object.values(languages).reduce((a, b) => a + b, 0);
                const chartData = Object.entries(languages).map(([name, value]) => ({
                    name,
                    value: ((value / total) * 100).toFixed(2)
                }));
                setData(chartData);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [user, repo]);

    if (!user || !repo) return null;
    if (loading) return <div>Loading language data...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data.length) return <div>No language data found.</div>;

    return (
        <PieChart width={300} height={300}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, value }) => `${name}: ${value}%`}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieChartColors[index % pieChartColors.length]} />
                ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
    );
}

/*
fetch repo data

*/
