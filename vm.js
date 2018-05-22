var info = new Vue({
    el: '#infoModel',
    data: {
        date: {
            year: '',
            month: '',
            day: '',
            youbi: ''
        },
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

var proceeding = new Vue({
    el: '#proceedingModel',
    methods: {
        addProceeding: function () {
            var element = document.createElement('li');
            element.innerHTML = '<input type="text" class="time" placeholder="19:00-20:00"> <input type="text" class="order" placeholder="活動内容">';
            document.getElementById('proceeding').appendChild(element);
        },
        deleteProceeding: function () {
            var element = document.getElementById('proceeding');
            if (element.childNodes.length > 0) {
                element.removeChild(element.childNodes.item(element.childNodes.length - 1)); 
            }
        }
    }
});

var activity = new Vue({
    el: '#activityModel',
    methods: {
        addActivity: function () {
            var element = document.createElement('li');
            element.innerHTML = '<input type="text" placeholder="活動内容"><br><textarea cols="70" rows="10"></textarea>';
            document.getElementById('activity').appendChild(element);
        },
        deleteActivity: function () {
            var element = document.getElementById('activity');
            if (element.childNodes.length > 0) {
                element.removeChild(element.childNodes.item(element.childNodes.length - 1)); 
            }
        }
    }
});

var schedule = new Vue({
    el: '#scheduleModel',
    methods: {
        addSchedule: function () {
            var element = document.createElement('li');
            element.innerHTML = '<input type="text" class="schedule" placeholder="2000.00.00(月) 19:00-21:00"> <input type="text" class="order" placeholder="活動内容">';
            document.getElementById('schedule').appendChild(element);
        },
        deleteSchedule: function () {
            var element = document.getElementById('schedule');
            if (element.childNodes.length > 0) {
                element.removeChild(element.childNodes.item(element.childNodes.length - 1)); 
            }
        }
    }
});