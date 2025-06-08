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
                    value: Number(((value / total) * 100).toFixed(2)) // Ensure value is a number
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PieChart width={300} height={300} className='piechart'>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={pieChartColors[index % pieChartColors.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
            <div style={{ marginLeft: '2rem' }}>
                <h4 style={{ margin: 0, marginBottom: '0.5rem', color: '#fff', fontSize: '1.1em' }}>Languages</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {data.map((entry, index) => (
                        <li key={entry.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{
                                display: 'inline-block',
                                width: 16,
                                height: 16,
                                borderRadius: '50%',
                                backgroundColor: pieChartColors[index % pieChartColors.length],
                                marginRight: 8,
                                border: '1px solid #fff'
                            }}></span>
                            <span style={{ color: '#fff', fontSize: '1em' }}>{entry.name} ({entry.value}%)</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}