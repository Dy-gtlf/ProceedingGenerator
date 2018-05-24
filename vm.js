const date = '2000.00.00(水)';
const time = '19:00-21:00';
const overview = '定例活動';

var info = new Vue({
    el: '#infoModel',
    data: {
        date: date,
        stuName: '',
        stuNum: 's00t000',
        nextStuName: ''
    }
});

var attendance = new Vue({
    el: '#attendanceModel',
    data: {
        TR: '',
        M2: '',
        M1: '',
        B4: '',
        B3: '',
        B2: '',
        B1: ''
    }
});

var process = new Vue({
    el: '#processModel',
    data: {
        inputTime: time,
        inputOverview: overview,
        processes: []
    },
    methods: {
        addProcess() {
            this.processes.push({
                time: this.inputTime,
                overview: this.inputOverview
            });
            this.inputTime = time;
            this.inputOverview = overview;
        },
        deleteProcess() {
            var res = confirm("削除しますか？");
            if( res == true ) {
                this.processes.pop();
            }
        }
    }
});

var contact = new Vue({
    el: '#contact',
    data: {
        inputOverview: '',
        inputDetail: '',
        contacts: [],
    },
    methods: {
        addContact() {
            this.contacts.push({
                overview: this.inputOverview,
                detail: this.inputDetail
            });
            this.inputOverview = '';
            this.inputDetail = '';
        },
        deleteContact() {
            var res = confirm("削除しますか？");
            if( res == true ) {
                this.contacts.pop();
            }
        }
    }
});

var activity = new Vue({
    el: '#activityModel',
    data: {
        inputOverview: '',
        inputDetail: '',
        activities: []
    },
    methods: {
        addActivity() {
            this.activities.push({
                overview: this.inputOverview,
                detail: this.inputDetail
            });
            this.inputOverview = '';
            this.inputDetail = '';
        },
        deleteActivity() {
            var res = confirm("削除しますか？");
            if( res == true ) {
                this.activities.pop();
            }
        }
    }
});

var schedule = new Vue({
    el: '#scheduleModel',
    data: {
        inputDate: date,
        inputTime: time,
        inputOverview: overview,
        schedules: []
    },
    methods: {
        addSchedule() {
            this.schedules.push({
                date: this.inputDate,
                time: this.inputTime,
                overview: this.inputOverview
            });
            this.inputDate = date;
            this.inputTime = time;
            this.inputOverview = overview;
        },
        deleteSchedule() {
            var res = confirm("削除しますか？");
            if( res == true ) {
                this.schedules.pop();
            }
        }
    }
});

var extraSchedule = new Vue({
    el: '#extraScheduleModel',
    data: {
        inputDate: date,
        inputOverview: '',
        extraSchedules: []
    },
    methods: {
        addExtraSchedule() {
            this.extraSchedules.push({
                date: this.inputDate,
                overview: this.inputOverview
            });
            this.inputDate = date;
            this.inputOverview = '';
        },
        deleteExtraSchedule() {
            var res = confirm("削除しますか？");
            if( res == true ) {
                this.extraSchedules.pop();
            }
        }
    }
});

var note = new Vue({
    el: '#note',
    data: { content: '' }
});

var result = new Vue({
    el: '#resultModel',
    data: {
        info: info,
        attendance: attendance,
        process: process,
        contact: contact,
        activity: activity,
        schedule: schedule,
        extraSchedule: extraSchedule,
        note: note,
        outputText: ''
    },
    methods: {
        generateProceeding() {
            this.outputText = `${this.info.stuNum}`;
        }
    }
});