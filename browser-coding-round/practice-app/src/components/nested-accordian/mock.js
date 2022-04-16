export const nestedAccordianMockData = {
    title: 'Level 1',
    nestedChild: [
        {
            title: 'Level 1-1',
            nestedChild: [
                { title: 'Level 1-1-1' },
                { title: 'Level 1-1-1', nestedChild: [{ title: 'Level 1-1-1-1' }] }
            ],
        },
        {
            title: 'Level 2-1',
            nestedChild: [
                { title: 'Level 2-1-1' },
                { title: 'Level 2-1-1', nestedChild: [{ title: 'Level 1-1-1-1' }] }
            ],
        },
    ]
};