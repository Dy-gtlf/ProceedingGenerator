var info = new Vue({
    el: '#infoModel',
    data: {
        date: '',
        stuName: '',
        stuNum: '',
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
        inputTime: '',
        inputActivity: '',
        processes: []
    },
    methods: {
        addProcess() {
            this.processes.push({
                time: this.inputTime,
                activity: this.inputActivity
            });
            this.inputTime = '';
            this.inputActivity = '';
        },
        deleteProcess() {
            var res = confirm("削除しますか？");
            if( res == true ) {
                this.processes.pop();
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
        inputDate: '',
        inputActivity: '',
        schedules: []
    },
    methods: {
        addSchedule() {
            this.schedules.push({
                date: this.inputDate,
                activity: this.inputActivity
            });
            this.inputDate = '';
            this.inputActivity = '';
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
        inputDate: '',
        inputTime: '',
        inputActivity: '',
        extraSchedules: []
    },
    methods: {
        addExtraSchedule() {
            this.extraSchedules.push({
                date: this.inputDate,
                time: this.inputTime,
                activity: this.inputActivity
            });
            this.inputDate = '';
            this.inputTime = '';
            this.inputActivity = '';
        },
        deleteExtraSchedule() {
            var res = confirm("削除しますか？");
            if( res == true ) {
                this.extraSchedules.pop();
            }
        }
    }
});

var result = new Vue({
    el: '#resultModel',
    data: {
        info: info,
        attendance: attendance,
        process: process,
        activity: activity,
        schedule: schedule,
        extraSchedule: extraSchedule
    }
});