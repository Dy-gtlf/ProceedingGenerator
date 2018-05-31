var today = new Date();
const weekDay = ["日", "月", "火", "水", "木", "金", "土"]; 

const date = `${('0000' + today.getFullYear()).slice(-4)}.`
             + `${('00' + (today.getMonth() + 1)).slice(-2)}.`
             + `${('00' + today.getDate()).slice(-2)}`
             + `(${weekDay[today.getDay()]})`;
const time = '19:00-21:00';
const overview = '定例活動';

var info = new Vue({
    el: '#infoModel',
    data: {
        date: date,
        stuName: '',
        stuNum: 's00t000',
        nextStuName: '',
        departments: ['全体', 'CEM', 'ETR', 'GMV'],
        selectedDepartment: '全体',
        activityTypes: ['定例活動', '週間報告', '活動報告'],
        selectedActivityType: '定例活動'
    }
});

var attendance = new Vue({
    el: '#attendanceModel',
    data: {
        attendances: [
            {
                grade: 'TR',
                members: ''
            },
            {
                grade: 'M2',
                members: ''
            },
            {
                grade: 'M1',
                members: ''
            },
            {
                grade: 'B4',
                members: ''
            }, 
            {
                grade: 'B3',
                members: ''
            },
            {
                grade: 'B2',
                members: ''
            },
            {
                grade: 'B1',
                members: ''
            },
        ]
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
            if (this.inputTime === '') {
                alert('時間が空白でござる');
                return;
            }
            if (this.inputOverview === '') {
                alert('概要が空白でござる');
                return;
            }
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
            if (this.inputOverview === '') {
                alert('概要が空白でござる');
                return;
            }
            if (this.inputDetail === '') {
                alert('詳細が空白でござる');
                return;
            }
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
            if (this.inputOverview === '') {
                alert('概要が空白でござる');
                return;
            }
            if (this.inputDetail === '') {
                alert('詳細が空白でござる');
                return;
            }
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
            if (this.inputDate === '') {
                alert('日付が空白でござる');
                return;
            }
            if (this.inputTime === '') {
                alert('時間が空白でござる');
                return;
            }
            if (this.inputOverview === '') {
                alert('概要が空白でござる');
                return;
            }
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
            if (this.inputDate === '') {
                alert('日付が空白でござる');
                return;
            }
            if (this.inputOverview === '') {
                alert('概要が空白でござる');
                return;
            }
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
        title: '',
        outputText: ''
    },
    methods: {
        generateProceeding() {
            if (this.info.date === '') {
                alert('日付が空白でござる');
                return;
            }
            if (this.info.stuName === '') {
                alert('議事の氏名が空白でござる');
                return;
            }
            if (this.info.stuNum === '') {
                alert('議事の学籍番号が空白でござる');
                return;
            }
            if (this.info.nextStuName === '') {
                alert('次回議事の氏名が空白でござる');
                return;
            }
            let title = '';
            if (this.info.selectedDepartment == '全体') {
                title = `${this.info.stuNum} [SLP] ${this.info.selectedActivityType} ${this.info.date}`;
            } else {
                title = `${this.info.stuNum} [SLP] {${this.info.selectedDepartment}} ${this.info.selectedActivityType} ${this.info.date}`;
            }
            this.title = title;
            let str = `□ ${this.title} ${this.info.stuName.split(' ',2)[0]}${this.info.stuName.split(' ',2)[1]}\n\n`
            + '★ 次第\n\n● 出席\n\n';
            let block = '';
            for (let index in this.attendance.attendances) {
                if (this.attendance.attendances[index].members !== '') {
                    block += `○ ${this.attendance.attendances[index].grade} ${this.attendance.attendances[index].members}\n`
                }
            }
            if (block !== '') {
                str += block + '\n';
            }

            str += `○ 議事 ${this.info.stuName.split(' ',1)}\n\n`
            + `○ 次回議事 ${this.info.nextStuName}\n\n`;
            
            for (let index in this.process.processes) {
                if (index == 0) {
                    str += '● 進行\n\n';
                }
                str += `○ ${this.process.processes[index].time} ${this.process.processes[index].overview}\n`;
                if (index == this.process.processes.length - 1) {
                    str += '\n';
                }
            }

            for (let index in this.contact.contacts) {
                if (index == 0) {
                    str += '★ 事務連絡\n\n';
                }
                str += `● ${this.contact.contacts[index].overview}\n\n${this.contact.contacts[index].detail}\n\n`;
            }

            for (let index in this.activity.activities) {
                if (index == 0) {
                    str += '★ 活動\n\n';
                }
                str += `● ${this.activity.activities[index].overview}\n\n${this.activity.activities[index].detail}\n\n`;
            }

           
            for (let index in this.schedule.schedules) {
                if (index == 0) {
                     str += '■ 予定\n\n';
                }
                str += `○ ${this.schedule.schedules[index].date} ${this.schedule.schedules[index].time} ${this.schedule.schedules[index].overview}\n`;
                if (index == this.schedule.schedules.length - 1) {
                    str += '\n';
                }
            }
            
            for (let index in this.extraSchedule.extraSchedules) {
                if (index == 0) {
                    str += '■ 課外\n\n';
                }
                str += `○ ${this.extraSchedule.extraSchedules[index].date} ${this.extraSchedule.extraSchedules[index].overview}\n`;
                if (index == this.extraSchedule.extraSchedules.length - 1) {
                    str += '\n';
                }
            }

            if (this.note.content !== '') {
                str += '■ 備考\n\n'
                + this.note.content;
            }
            
            this.outputText = str;
        }
    }
});