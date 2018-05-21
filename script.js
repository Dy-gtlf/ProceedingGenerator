var vm = new Vue({
    el: '#vm',
    data: {
        info : {
            date: {
                year: '2018',
                month: '1',
                day: '1',
                youbi: '月'
            },
            stuNum: '114514',
            stuName: '野獣先輩',
            nextStuName: '三浦',
        },
        attendance: {
            TR: 'a',
            M2: 'b',
            M1: 'c',
            B4: 'd',
            B3: 'e',
            B2: 'f',
            B1: 'g'
        }
    }
});