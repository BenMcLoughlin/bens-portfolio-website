import * as years from '../data';

export const formatChartData = (data, year) => {
    var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const selectedYear = 'year' + year;

    let total = 0;

    let tasks = {};
    console.log('years', years);
    console.log('selectedYear', selectedYear);
    const d = years[selectedYear].reduce((acc, n) => {
        const month = new Date(n.date).getMonth() + 1;

        total += +n.duration / 60 || 0;

        tasks = { ...tasks, [n.task]: tasks?.[n.task] + +n.duration / 60 || +n.duration / 60 };

        return {
            ...acc,
            [month]: {
                ...acc[month],
                period: months[month],
                [n.task]: acc[month]?.[n.task] + +n.duration / 60 || +n.duration / 60
            }
        };
    }, {});

    return { data: Object.values(d), total, tasks };
};
